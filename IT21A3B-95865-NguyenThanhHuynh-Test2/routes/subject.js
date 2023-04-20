const bodyParser = require("body-parser");
const subjectController = require("../controllers/subjectController");
const router = require("express").Router();

//ADD SUBJECT
router.post("/",subjectController.addSubject);

//GET ALL SUBJECT
router.get("/",subjectController.getAllSubject);

//GET AN SUBJECT
router.get("/:id",subjectController.getAnSubject);

//UPDATE SUBJECT
router.put("/:id",subjectController.updateSubject);

//DELETE A SUBJECT
router.delete("/:id",subjectController.deleteSubject);

module.exports = router;