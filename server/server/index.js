const express = require("express");

const PORT = process.env.PORT || 8000;

const app = express();


const movie=require("../routing/Api")
app.use("/movie",movie)
app.get('/', (req, res) => {
  res.send("success get request")
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});