const { rule, and, shield } = require('graphql-shield');
const { getUserId } = require('../utils');

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context);
    return Boolean(userId);
  }),
  isBeerReviewer: rule()(async (parent, { id }, context) => {
    const userId = getUserId(context);
    const reviewer = await context.prisma
      .beer({
        id
      })
      .reviewer();

    return userId === reviewer.id;
  })
};

const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser,
    filterBeers: rules.isAuthenticatedUser
  },
  Mutation: {
    createBeer: rules.isAuthenticatedUser,
    updateBeer: rules.isBeerReviewer,
    deleteBeer: rules.isBeerReviewer,
    publishBeer: rules.isBeerReviewer
  }
});

module.exports = {
  permissions
};
