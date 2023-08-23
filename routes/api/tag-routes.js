const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");
// tag routs same as tag
// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll();
    res.json(tagData);
  } catch (err) {
    res.json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findOne({
      where: { id: req.params.id },
    });
    res.json(tagData);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.json(tagData);
  } catch (err) {
    res.json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(tagData);
  } catch (err) {
    res.json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: { id: req.params.id },
    });
    res.json(tagData);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;