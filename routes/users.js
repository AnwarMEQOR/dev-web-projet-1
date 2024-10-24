const express = require("express")
const router = express.Router()
const { getAllUsers, createNewUser, updateUser, deleteUser } = require("../controllers/usersControllers")

// GET method
router.get("/users", getAllUsers)

// POST method
router.post('/users', createNewUser)

// PUT method
router.put('/users/:id', updateUser)

// DELETE method
router.delete('/users/:id', deleteUser)

module.exports = router