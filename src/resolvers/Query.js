const { getUserId } = require('../utils');

const Query = {
  me: (parent, args, context) => {
    const userId = getUserId(context);
    return context.prisma.user({ id: userId });
  },
  getBeers: (parent, args, context) => {
    return context.prisma.beers({ where: { published: true } });
  },
  retrieveBeer: (parent, { id }, context) => {
    return context.prisma.beer({ id });
  },
  filterBeers: (parent, { searchString }, context) => {
    return context.prisma.beers({
      where: {
        OR: [
          {
            name_contains: searchString
          },
          {
            description_contains: searchString
          }
        ]
      }
    });
  }
};

module.exports = {
  Query
};
