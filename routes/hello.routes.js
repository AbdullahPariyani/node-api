module.exports = app => {

	app.get("/hello", (req, res, next) => {
		res.send("hello World");
	});

	app.post("/hello", (req, res, next) => {
		res.send({ msg: "Hello world!" });
	});
}