const { Query } = require('./Query');
const { Mutation } = require('./Mutation');
const { Subscription } = require('./Subscription');
const { User } = require('./User');
const { Beer } = require('./Beer');

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Beer
};

module.exports = {
  resolvers
};
