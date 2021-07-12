const { Router } = require("express")

const usercontroller = require("./usercontroller");
const router = Router();

router.get('/', usercontroller.find);
router.post('/', usercontroller.create);
router.put('/:id', usercontroller.update);
router.get('/:id', usercontroller.findUserByPk);
router.delete('/:id', usercontroller.deleteById);

module.exports = router;

