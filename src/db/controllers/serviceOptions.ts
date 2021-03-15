import { Request, Response, ErrorRequestHandler } from 'express';
import { ServiceOption } from '../types';

const { ServiceOption } = require(`../models`);

module.exports = {
  list(req: Request, res: Response) {
    return ServiceOption.findAll({
      attributes: [`label`, `timeToComplete`, `id`],
    })
      .then((serviceOptions: ServiceOption[]) =>
        res.status(200).send(serviceOptions),
      )
      .catch((error: ErrorRequestHandler) => {
        res.status(400).send(error);
      });
  },
};
