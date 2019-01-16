"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Division",
    embedded: false
  },
  {
    name: "Player",
    embedded: false
  },
  {
    name: "Result",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://jgamesdb-edc9ceb75a.herokuapp.com/prisma/dev`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Division",
    embedded: false
  },
  {
    name: "Player",
    embedded: false
  },
  {
    name: "Result",
    embedded: false
  }
];
