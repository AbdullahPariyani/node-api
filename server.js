const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const port = 6000;

require("./routes/hello.routes")(app);
require("./routes/ping")(app);

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(port, () => {
	console.log(`Server is started on port number ${port}`);
});