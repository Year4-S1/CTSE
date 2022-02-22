const Note = require("../models/note-model");

const createNote = async (req, res) => {
  if (req.body) {
    const note = new Note(req.body);
    await note
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

module.exports = {
  createNote,
};
