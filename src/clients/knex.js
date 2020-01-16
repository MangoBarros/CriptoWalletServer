'use strict';

/**
 * Module dependencies.
 */

const config = require('config');
const knex = require('knex');

/**
 * Export `knex`.
 */

module.exports = knex(config.database);
