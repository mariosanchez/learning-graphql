const Beer = {
  reviewer: ({ id }, args, context) => {
    return context.prisma.beer({ id }).reviewer();
  },
  brewery: ({ id }, args, context) => {
    return context.prisma.beer({ id }).brewery();
  },
  style: ({ id }, args, context) => {
    return context.prisma.beer({ id }).style();
  },
  glass: ({ id }, args, context) => {
    return context.prisma.beer({ id }).glass();
  }
};

module.exports = {
  Beer
};
