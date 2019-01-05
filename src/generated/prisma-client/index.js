"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Beer",
    embedded: false
  },
  {
    name: "Brewery",
    embedded: false
  },
  {
    name: "Country",
    embedded: false
  },
  {
    name: "Glass",
    embedded: false
  },
  {
    name: "Location",
    embedded: false
  },
  {
    name: "Style",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
