const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret'

const simpleAuth=(req,res,next)=>{
	const authHeader = req.headers['authorization'] || req.headers['Authorization']
	if(!authHeader) return res.json("No Token Provided")

		const token = authHeader.split(' ')[1]
		try{
			const payload = jwt.verify(token,JWT_SECRET)
			req.userId = payload.userId
			next()
		}catch(err){
			return res.json("Invalid Token")
		}

}

module.exports = simpleAuth;

// const simpleAuth = (req, res, next) => {
// 	const authHeader = req.headers['authorization'] || req.headers['Authorization']
// 	if (!authHeader) return res.status(401).json({ message: 'Access denied' })

// 	const parts = authHeader.split(' ')
// 	if (parts.length !== 2 || parts[0] !== 'Bearer') return res.status(401).json({ message: 'Invalid token format' })

// 	const token = parts[1]
// 	try {
// 		const payload = jwt.verify(token, JWT_SECRET)
// 		req.userId = payload.userId
// 		next()
// 	} catch (err) {
// 		return res.status(401).json({ message: 'Invalid or expired token' })
// 	}
// }