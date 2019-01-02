const { PubSub } = require('apollo-server-express');
const beers = require('./data');

const BEER_CREATED = 'BEER_CREATED'; // Topic when we create a new beer

const pubsub = new PubSub();

const resolvers = {
  Query: {
    getBeers: () => beers,
    retrieveBeer: (obj, { id }) => beers.find(beer => beer.id === Number(id))
  },
  Mutation: {
    createBeer: (obj, { name, breweryName }) => {
      const id = beers.length + 1; // "Autoincrement"
      const newBeer = {
        id,
        name,
        brewery: {
          name: breweryName
        }
      };
      beers.push(newBeer); // This is in memory
      pubsub.publish(BEER_CREATED, {
        // Publish new beer to PubSub
        beerCreated: newBeer
      });
      return newBeer;
    },
    updateBeer: (obj, { id, name, styleName, breweryName }) => {
      const beer = beers.find(beer => beer.id === Number(id));

      if (!beer) {
        throw new Error(`Beer with 'id' equal to '${id}' not found`);
      }

      const beerIndex = beers.indexOf(beer);

      if (name) beer.name = name;
      if (styleName && typeof beer.style !== 'undefined') beer.style.name = styleName;
      if (breweryName && typeof beer.brewery !== 'undefined') beer.brewery.name = breweryName;

      beers[beerIndex] = beer;
      return beer;
    },
    deleteBeer: (obj, { id }) => {
      const beer = beers.find(beer => beer.id === Number(id));

      if (!beer) {
        throw new Error(`Beer with 'id' equal to '${id}' not found`);
      }

      const beerIndex = beers.indexOf(beer);
      beers.splice(beerIndex, 1);
      return { id, message: `Beer with 'id' equal to '${id}' delete successfully` };
    }
  },
  Subscription: {
    beerCreated: {
      subscribe: () => pubsub.asyncIterator(BEER_CREATED)
    }
  }
};

module.exports = resolvers;
