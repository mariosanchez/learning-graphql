const { pubsub } = require('../utils');
const { BEER_CREATED_TOPIC } = require('./constants');

const Subscription = {
  beerCreated: {
    subscribe: () => pubsub.asyncIterator(BEER_CREATED_TOPIC)
  }
};

module.exports = {
  Subscription
};
