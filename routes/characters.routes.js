import express from 'express'
import controller from '../controllers/characters.controller.js'

const router = express.Router()

router.get("/characters", controller.getCharacters)
router.get("/characters/:id", controller.getCharactersById)
router.get("/characters/gender/:gender", controller.getCharactersByGender)

export default router


