const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const POST = mongoose.model("POST");

//Route
router.post("/createPost", requireLogin, (req, res) => {
  const { body, pic } = req.body;
  console.log(pic, body);
  if (!body || !pic) {
    return res.status(422).json({ error: "Please enter all the fields!" });
  }
  console.log(req.user);

  const post = new POST({
    body,
    photo: pic,
    postedBy: req.user,
  });

  post
    .save()
    .then((result) => {
      return res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/allposts", requireLogin , (req, res) => {
  POST.find()
  .populate("postedBy","_id name")
    .then((posts) => res.json(posts))
    .catch((err) => console.log(err));
});

module.exports = router;
