const express = require('express')
const sparkAPI = express.Router()
const axios = require('axios')

sparkAPI.get('/v1/listings', async (req, res) => {
    try {
        const response = await axios('https://replication.sparkapi.com/v1/listings', {
            headers: {
                Authorization: 'Bearer 537oef7mojquj5e2tyt4gmhzo'
            }
        })
        if (response) return res.json(response.data)
        throw Error()
    } catch (e) {
        console.info(e)
        return res.json([])
    }
})

module.exports = sparkAPI