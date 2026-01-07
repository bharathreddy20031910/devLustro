const simpleAuth = (req, res, next) => {
const userId = req.headers.userid;
if (!userId) {
return res.status(401).json({ message: "Access denied" });
}
req.userId = userId;
next();
};
module.exports = simpleAuth;