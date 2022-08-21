// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios')

export default async function handler(req, res) {

  const response = await axios.get(process.env.PYTHON_API + '/supabase/list')

  res.status(200).json({ test: 123 })

}
