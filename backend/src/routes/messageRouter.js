const express = require('express')
const qrcode = require('qrcode-terminal');



const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        message: 'Hellooooo',
    });
})



module.exports = router;