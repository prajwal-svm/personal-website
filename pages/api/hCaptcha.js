const { verify } = require('hcaptcha');

async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const response = await verify(
                process.env.HCAPTCHA_SECRET_KEY,
                req.body.token
            )

            if (response && response.success) {
                res.status(201).json(response)
            } else {
                res.status(400).send({
                    success: false,
                    message: 'Invalid hCaptcha!'
                })
            }

        } catch (e) {
            res.status(400).send({
                success: false,
                message: 'Captcha Error, Try Again!'
            })
        }
    } else {
        res.status(405).send({ message: 'Request Denied!' })
    }
}

export default handler