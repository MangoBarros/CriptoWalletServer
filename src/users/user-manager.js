"use strict";

/**
 * Module dependencies.
 */

const knex = require("src/clients/knex");

/**
 * `UserManager`.
 */

class UserManager {
    /**
     * Find all.
     */

    async findAll() {
        const users = await knex("users").select("*");

        return users;
    }

    /**
     * Find by id.
     */

    async findById(id) {
        const user = await knex("users")
            .select("*")
            .where({ id });

        return user;
    }

    /**
     * Create user.
     */

    async createUser(data) {
        const user = await knex("users")
            .insert({
                name: data.name,
                email: data.email
            })
            .returning("*");

        return user;
    }

    async check(email) {
        const user = await knex("users")
            .select("*")
            .where({ email });

        return user;
    }

    /**
     * Update user.
     */

    async updateUser(id, data) {
        const user = await knex("users")
            .update(data)
            .where({ id })
            .returning("*");

        return user;
    }

    /**
     * Delete user.
     */

    async deleteUser(id) {
        await knex("users")
            .delete()
            .where({ id });
    }
}

/**
 * Export `UserManager`.
 */

module.exports = new UserManager();
