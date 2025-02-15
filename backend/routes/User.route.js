import express from 'express'
import { allUsers, Login, Logout, Signup } from '../controllers/UserController.js'
import secureRoute from '../middleware/secureRoute.js'

const router = express.Router()

router.post("/signup",  Signup)
router.post('/login', Login)
router.post('/logout', Logout)
router.get('/allusers', secureRoute, allUsers)

export default router