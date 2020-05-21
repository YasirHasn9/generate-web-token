const db = require("../database/db-config");

module.exports = {
  find,
  add,
  findById
};

function find() {
  return db("users");
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user);
    return findById(id);
  } catch (err) {
    console.log("ADD USER", err);
    throw err;
  }
}

async function findById(id) {
  return await db("users")
    .where(id)
    .first();
}
