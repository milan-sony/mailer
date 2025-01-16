import express from "express"

const router = express.Router()

const api = router.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Mailer API V1"
    })
})

export default api