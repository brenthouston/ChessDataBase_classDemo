const router = require('express').Router();
const Player = require('../../models/Player');

//endpoint: /api/players
router.get("/", async(req, res)=> {
    const players = Player.findAll()
    req.statusCode(200).json(players)
})

module.exports= router;