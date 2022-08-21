const axios = require('axios')
import Cors from 'cors'

const cors = Cors({
    origin: '*'
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

export default async function handler(req, res) {
    await runMiddleware(req, res, cors)
    if (req.method === 'POST') {
        const response = await axios.post(process.env.PYTHON_API + `/supabase/comment`, req.body, { headers: { token: req.headers.token } })
        res.status(200).json(response.data)
    }

}