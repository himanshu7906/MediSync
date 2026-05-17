import jwt from 'jsonwebtoken'

// user authentication middleware
const authUser = async (req, res, next) => {
    const { token } = req.headers
    if (!token) {
        return res.json({ success: false, message: 'Not Authorized Login Again' })
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)

        // ✅ Fix: Ensure req.body is defined before assigning to it
        if (!req.body) req.body = {}

        req.body.userId = token_decode.id
        next()
    } catch (error) {
        // Invalid/expired token — tell client to clear token and re-login
        res.json({ success: false, message: 'Session expired. Please log in again.' })
    }
}

export default authUser
