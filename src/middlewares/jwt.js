const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const createJWTtoken = async (user) => {
	return jwt.sign(
		{
			username: user.email,
			id: user._id,
		},
		process.env.TOKEN_SECRET,
		{ expiresIn: '168h' }
	);
};

const jwtVerify = async (req, res, next) => {
	const token = req.header('token');
	try {
		if (!token) return res.status(401).json({ message: 'No token' });
		// console.log(process.env.TOKEN_SECRET)
		// console.log(token)
		jwt.verify(token, process.env.TOKEN_SECRET, async (err, decoded) => {
			req.jwt_payload = decoded;
			if (err) {
				console.log(err.message);
				return res
					.status(403)
					.json({ message: 'Invalid token or token expired' });
			}
			if (!mongoose.Types.ObjectId.isValid(decoded.id))
				return res.status(400).json({ message: 'Invalid userId' });
			req.user = true;
			return next();
		});
		return null;
	} catch (err) {
		console.log('error', err.message);
		return res
			.status(500)
			.json({ message: 'Server error. Try again later' });
	}
};

module.exports = {
	jwtVerify,
	createJWTtoken,
};