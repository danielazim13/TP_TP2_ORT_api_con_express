import express from 'express'
import controller from '../controllers/characters.controller.js'

const router = express.Router()

router.get("/characters", controller.getCharacters)

export default router


