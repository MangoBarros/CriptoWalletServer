exports.up = async function(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await knex.schema.createTable("wallets", table => {
        table
            .uuid("id")
            .primary()
            .defaultTo(knex.raw("uuid_generate_v4()"));
        table.uuid("user_id").notNullable();
        table
            .double("eur")
            .notNullable()
            .defaultTo(10000000000000000);
        table
            .double("btc")
            .notNullable()
            .defaultTo(0);
        table
            .double("eth")
            .notNullable()
            .defaultTo(0);

        table
            .foreign("user_id")
            .references("id")
            .inTable("users");
    });
};

exports.down = function(knex) {
    throw new Error("Irreversible Migration");
};
