const { Service } = require(`../models`);

module.exports = {
  list(req, res) {
    return Service.findAll()
      .then((services) => res.status(200).send(services))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  serviceDay(req, res) {
    return Service.findAll({
      where: {
        date: req.query.day,
      },
      attributes: ['id', 'time', 'service'],
    })
      .then((services) => res.status(200).send(services))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  create(req, res) {
    return Service.create({
      date: req.body.date,
      service: req.body.service,
      email: req.body.email,
      phone: req.body.phone,
      time: req.body.time,
      instagramName: req.body.instagramName,
    })
      .then((service) => res.status(201).send(service))
      .catch((error) => res.status(400).send(error));
  },
};
