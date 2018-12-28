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
    }
  }
};

module.exports = resolvers;
