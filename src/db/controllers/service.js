import { verifyEmail } from '../services/mailer';

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

  servicesByUser(req, res) {
    return Service.findAll({
      where: {
        email: req.query.email,
      },
      attributes: ['id', 'time', 'service', 'date'],
    })
      .then((services) => res.status(200).send(services))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  create(req, res) {
    const mailOptions = (id) => ({
      from: req.body.email,
      to: req.body.email,
      subject: 'Email verification',
      text: 'To acivate your account, please click link below',
      html: `<p><b>To acivate your account, please click link below</b></p>
<a href='http://localhost:3000/accept/${id}'>
        http://localhost:3000/accept/${id}</a>`,
    });

    return Service.create({
      date: req.body.date,
      service: req.body.service,
      email: req.body.email,
      phone: req.body.phone,
      time: req.body.time,
      isAccepted: req.body.isAccepted,
      instagramName: req.body.instagramName,
    })
      .then((service) => verifyEmail(mailOptions(service.id)))
      .then((service) => res.status(201).send(service))
      .catch((error) => res.status(400).send(error));
  },
};
