const beers = require('./data');

const resolvers = {
  Query: {
    getBeers: () => beers,
    retrieveBeer: (obj, { id }) => beers.find(beer => beer.id === Number(id))
  }
};

module.exports = resolvers;
