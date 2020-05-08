const express = require("express");
const cors = require("cors");
const data = require("./data.json");

const app = express();
app.use(cors());

app.get("/patients", (request, response) => {
  response.send(data.patients);
});

app.get("/doctors", (request, response) => {
  response.send(data.doctors);
});

app.get("/patients/:id", (request, response) => {
  const result = data.patients.filter(
    (patient) => patient.id === request.params.id
  );

  response.send(result[0]);
});

const PORT = 4000;

app.listen(PORT, console.log(`server running on ${PORT}`));
