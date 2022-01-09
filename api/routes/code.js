const  codeController = require("../controller/code");
const  express=require('express');
const router = express.Router();

router.post('/sendcode', codeController.sendcode);

module.exports = router;