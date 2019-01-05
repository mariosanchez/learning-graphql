const User = {
  beersReviewed: ({ id }, args, context) => {
    return context.prisma.user({ id }).beersReviewed();
  }
};

module.exports = {
  User
};
