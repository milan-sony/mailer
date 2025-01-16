import express from "express"
import mailRoutes from "./mailRoutes.js"

const router = express.Router()

const api = router.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Mailer API V1"
    })
})

// mail routes
router.use("/mail", mailRoutes)

export default api