const jdoodle = require("jdoodle-api");

exports.sendcode = async (req, res) => {
  try {
    const { code, languag } = req.body;

  const language = {
      languageCode: languag,
      versionIndex: 2,
    };

    const script = code;

    jdoodle(language, script).then((result) => {
      console.log(result)
      console.log(result.cpuTime)
      res.send(result.output)
    });
  } catch (error) {
    console.log(error);
  }
};
