// to call it use http://localhost:3000/api/getAllQuestions

module.exports = (req, res) => {
    res.status(200).json({ response: "This route will return all questions" });
};
  


