const express = require("express")
const router = express.Router()
const { getAllUsers } = require("../controllers/usersControllers")

// GET method
router.get("/users", getAllUsers)

module.exports = router