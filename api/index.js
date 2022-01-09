const express = require("express");
const bodyParser=require("body-parser");

const cors=require("cors");
const app = express();
const PORT = "8080";

const Routes=require("./routes/code")

app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api',Routes)

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
