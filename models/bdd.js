const mongoose = require("mongoose");

// useNewUrlParser ;)
const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const identifiants = {
  mdp: "MOT DE PASSE",
  identifiant: "IDENTIFIANT",
  nomCluster: "CLUSTER",
};

// --------------------- BDD -----------------------------------------------------
mongoose.connect(
  `mongodb+srv://${identifiants.identifiant}:${identifiants.mdp}@${identifiants.nomCluster}.mongodb.net/Ticketac?retryWrites=true`,
  options,
  function (err) {
    if (err) {
      console.log(
        `error, failed to connect to the database because --> ${err}`
      );
    } else {
      console.info("*** Database Ticketac connection : Success ***");
    }
  }
);
