const { hash, compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { pubsub } = require('../utils');
const { getUserId } = require('../utils');
const { APP_SECRET } = require('../constants');
const { BEER_CREATED_TOPIC } = require('./constants');

const Mutation = {
  signup: async (parent, { name, email, password }, context) => {
    const hashedPassword = await hash(password, 10);
    const user = await context.prisma.createUser({
      name,
      email,
      password: hashedPassword
    });
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    };
  },
  login: async (parent, { email, password }, context) => {
    const user = await context.prisma.user({ email });
    if (!user) {
      throw new Error(`No user found for email: ${email}`);
    }
    const passwordValid = await compare(password, user.password);
    if (!passwordValid) {
      throw new Error('Invalid password');
    }
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    };
  },
  // TODO add all Beer attributes
  createBeer: async (parent, { name, description }, context) => {
    const userId = getUserId(context);
    const newBeer = await context.prisma.createBeer({
      name,
      description,
      reviewer: { connect: { id: userId } }
    });
    pubsub.publish(BEER_CREATED_TOPIC, {
      // Publish new beer to PubSub
      beerCreated: newBeer
    });
    return newBeer;
  },
  // TODO add all Beer attributes
  updateBeer: async (parent, { id, name, description }, context) => {
    return context.prisma.updateBeer({
      where: { id },
      data: { name, description }
    });
  },
  deleteBeer: async (parent, { id }, context) => {
    await context.prisma.deleteBeer({ id });
    return { id, message: `Beer with 'id' equal to '${id}' delete successfully` };
  },
  publishBeer: async (parent, { id }, context) => {
    return context.prisma.updateBeer({
      where: { id },
      data: { published: true }
    });
  }
};

module.exports = {
  Mutation
};
