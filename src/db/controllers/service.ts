import { Request, Response } from 'express';
import verifyEmail from '../services/mailer';
import { Service } from '../types';

const { Service } = require(`../models`);

module.exports = {
  list(req: Request, res: Response) {
    return Service.findAll()
      .then((services: Service[]) => res.status(200).send(services))
      .catch((error: Error) => {
        res.status(400).send(error);
      });
  },

  serviceDay(req: Request, res: Response) {
    return Service.findAll({
      where: {
        date: req.query.day,
      },
      attributes: [`id`, `time`, `service`],
    })
      .then((services: Service[]) => res.status(200).send(services))
      .catch((error: Error) => {
        res.status(400).send(error);
      });
  },

  servicesByUser(req: Request, res: Response) {
    return Service.findAll({
      where: {
        email: req.query.email,
      },
      attributes: [`id`, `time`, `service`, `date`, `isAccepted`],
    })
      .then((services: Service[]) => res.status(200).send(services))
      .catch((error: Error) => {
        res.status(400).send(error);
      });
  },

  servicesByAdmin(req: Request, res: Response) {
    return Service.findAll({
      attributes: [
        `id`,
        `time`,
        `service`,
        `date`,
        `isAccepted`,
        `instagramName`,
        `email`,
        `phone`,
        `isAdmin`,
      ],
      where: { isAdmin: null },
    })
      .then((services: Service[]) => res.status(200).send(services))
      .catch((error: Error) => {
        res.status(400).send(error);
      });
  },

  updateService(req: Request, res: Response) {
    const mailOptions = (service: Service) => ({
      from: `Cалон`,
      to: `taras.b@coaxsoft.com`,
      subject: `запис підтверджено`,
      text: `інстаграм малишка з ніком`,
      html: `<p><b>${service.instagramName}</b> підтвердила запис на <b>${service.date} - ${service.time}</b></p>`,
    });

    return Service.findByPk(req.body.id)
      .then((service: Service | any) => {
        if (!service || service.isAccepted) {
          return res.status(404).send({
            message: `Service Not Found`,
          });
        }
        return service
          .update({
            isAccepted: true,
          })
          .then((updatedService: Service) =>
            res.status(200).send(updatedService),
          )
          .then(() => verifyEmail(mailOptions(service)))
          .catch((error: Error) => res.status(400).send(error));
      })
      .catch((error: Error) => res.status(400).send(error));
  },

  create(req: Request, res: Response) {
    const mailOptions = (id: string) => ({
      from: `Cалон`,
      to: req.body.email,
      subject: `підтвердження послуги`,
      text: `щоб підтвердити послугу класни суда`,
      html: `<p><b>щоб підтвердити послугу класни суда</b></p>
<a href='http://localhost:3000/acceptService/${id}'>
        http://localhost:3000/acceptService/${id}</a>`,
    });

    return Service.create({
      date: req.body.date,
      service: req.body.service,
      email: req.body.email,
      phone: req.body.phone,
      time: req.body.time,
      isAccepted: req.body.isAccepted,
      instagramName: req.body.instagramName,
      isAdmin: req.body.isAdmin,
    })
      .then(
        (service: Service | any) =>
          !req.body.isAdmin && verifyEmail(mailOptions(service.id)),
      )
      .then((service: Service) => res.status(201).send(service))
      .catch((error: Error) => res.status(400).send(error));
  },

  delete(req: Request, res: Response) {
    const mailOptions = (service: Service) => ({
      from: `Cалон`,
      to: `taras.b@coaxsoft.com`,
      subject: `запис cкасовано`,
      text: `інстаграм малишка з ніком`,
      html: `<p><b>cобака ${service.instagramName}</b> відмінила запис на <b>${service.date} - ${service.time}</b></p>`,
    });

    return Service.findByPk(req.query.id)
      .then((service: Service | any) => {
        if (!service) {
          return res.status(400).send({
            message: `сервіс Not Found`,
          });
        }
        return service
          .destroy()
          .then(() => verifyEmail(mailOptions(service)))
          .then(() => res.status(204).send())
          .catch((error: Error) => res.status(400).send(error));
      })
      .catch((error: Error) => res.status(400).send(error));
  },
};
