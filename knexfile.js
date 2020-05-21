// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/business.db3"
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        // this is in case you use a foreign keys in your tables
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: "./database/migration"
    },
    seeds: {
      directory: "./database/seed"
    }
  }
};
