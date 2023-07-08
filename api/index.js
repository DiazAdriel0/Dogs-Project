const server = require("./src/App/app.js");
const { conn } = require("./src/DataBases/db.js");
const PORT = 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`server raised on port: ${PORT}`);
  });
});
