const { ServiceOption } = require(`../models`);

module.exports = {
  list(req, res) {
    return ServiceOption.findAll()
      .then((serviceOptions) => res.status(200).send(serviceOptions))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  // create(req, res) {
  //   return Service.create({
  //     date: req.body.date,
  //     service: req.body.service,
  //     email: req.body.email,
  //     phone: req.body.phone,
  //     time: req.body.time,
  //     instagramName: req.body.instagramName,
  //   })
  //     .then((profile) => res.status(201).send(profile))
  //     .catch((error) => res.status(400).send(error));
  // },
};
