exports.up = async function(knex) {
  await knex.schema.createTable("users", user => {
    user.increments("id");
    user
      .string("username", 128)
      .notNullable()
      .unique();
    user.string("password", 225).notNullable();
    user.string("department", 128).notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("users");
};
