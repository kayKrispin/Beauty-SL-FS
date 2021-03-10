const { ServiceOption } = require(`../models`);

module.exports = {
  list(req, res) {
    return ServiceOption.findAll({
      attributes: ['label', 'timeToComplete', 'id'],
    })
      .then((serviceOptions) => res.status(200).send(serviceOptions))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
