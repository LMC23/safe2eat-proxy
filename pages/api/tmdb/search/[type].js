const axios = require('axios')

export default async function handler(req, res) {
    const { type, query } = req.query;
    if (req.method === 'GET') {
        const response = await axios.get(process.env.PYTHON_API + `/tmdb/search/${type}?query=${query}&page=1`)
        res.status(200).json(response.data)

    }

}