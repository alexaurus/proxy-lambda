"use strict";

const Responses = require("./Responses");

exports.handler = async (event) => {
  return Responses._200();
};
