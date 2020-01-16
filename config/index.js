"use strict";

module.exports = {
    database: {
        client: "postgres",
        connection: {
            charset: "utf8",
            database: "criptoWallet",
            host: "127.0.0.1",
            user: "postgres2",
            password: "postgres"
        }
    },
    server: {
        host: "0.0.0.0",
        port: 3001
    }
};
