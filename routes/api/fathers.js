const express = require("express");
const router = express.Router();
const Father = require("../../models/Father");
// @route   GET api/fathers
// @desc    Get fathers
// @access  Public
router.get("/", (req, res) => {
  
  Father.find()
    // .sort({ date: -1 })
    .then(fathers => res.json(fathers))
    .catch(err => res.status(404).json({ nofathersfound: "No fathers found" }));
});

module.exports = router;
