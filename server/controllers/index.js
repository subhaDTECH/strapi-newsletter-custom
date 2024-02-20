"use strict";

const settings = require("./settings");
const mailchimp = require("./mailchimp");
const newsletter = require("./newsletter");
const convertkit = require("./convertkit");
const brevo = require("./brevo");

module.exports = {
  settings,
  mailchimp,
  newsletter,
  convertkit,
  brevo,
};
