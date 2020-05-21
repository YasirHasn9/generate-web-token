exports.seed = async function(knex) {
  await knex("users").insert([
    {
      username: "Luis",
      password: "pass",
      department: "Cohort web29"
    }
  ]);
};
