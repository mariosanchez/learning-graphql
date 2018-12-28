const beers = require('./data');

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
    }
  }
};

module.exports = resolvers;
