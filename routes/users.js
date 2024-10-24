const express = require("express")
const router = express.Router()
const db = require("../database")

const usersArray = [
    { id: 1, firstName: "John", lastName: "Doe", role: "admin" },
    { id: 2, firstName: "Jane", lastName: "Smith", role: "user" },
    { id: 3, firstName: "Alice", lastName: "Johnson", role: "moderator" },
    { id: 4, firstName: "Bob", lastName: "Brown", role: "user" },
    { id: 5, firstName: "Charlie", lastName: "Davis", role: "admin" },
]

// GET method
router.get("/users", (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
})

// GET method: returns user by id
router.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id)

    const userIndex = usersArray.findIndex((user) => user.id === id)
    if (userIndex < 0) {
        return res.status(404).json({msg: "utilisateur non trouvé"})
    }

    res.json(usersArray[userIndex])
})

// POST method
router.post('/users', (req,res)=>{
    const { firstName, lastName, role } = req.body

    const lastId = usersArray[usersArray.length - 1].id
    const newId = lastId + 1

    const newUser = {
        firstName,
        lastName,
        role,
        id: newId,
    }

    usersArray.push(newUser)

    res.status(201).json(newUser)
})

// PUT method
router.put('/users/:id', (req,res)=>{
    const id = parseInt(req.params.id)

    const userIndex = usersArray.findIndex((user) => user.id === id)

    if (userIndex < 0) {
        return res.status(404).json({msg: "utilisateur non trouvé"})
    }

    const { firstName, lastName, role } = req.body

    if (firstName) usersArray[userIndex].firstName = firstName
    if (lastName) usersArray[userIndex].lastName = lastName
    if (role) usersArray[userIndex].role = role

    res.status(200).json(usersArray[userIndex])
})

// DELETE method
router.delete('/users/:id', (req,res)=>{
    const id = parseInt(req.params.id)

    const userIndex = usersArray.findIndex((user) => user.id === id)

    if (userIndex < 0) {
        return res.status(404).json({msg: "utilisateur non trouvé"})
    }

    usersArray.splice(userIndex, 1)

    res.json({
        msg: "utilisateur suprimée",
    })
})


module.exports = router