const { formSchema } = require("@instant-full-stack-messenger/common");

const validateForm = (req, res, next) => {
  const formData = req.body;
  formSchema
    .validate(formData)
    .catch(() => {
      res.status(422).send();
    })
    .then((valid) => {
      if (valid) {
        next();
      } else {
        res.status(422).send();
      }
    });
};

module.exports = validateForm;