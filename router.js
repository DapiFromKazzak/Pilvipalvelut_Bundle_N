const express = require('express');
const router = express.Router();

router.get('/:nro', function (request, response){
    response.json({saatuData: request.params.nro});
});

module.exports = router;