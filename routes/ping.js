module.exports = app => {
	app.get("/ping", (req, res, next) => {
		const msg = req.query.msg;
		res.send({ message: msg, stamp: new Date() });
	});
}