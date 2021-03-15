import { Moment } from 'moment';

export type ServiceOption = {
  id: number;
  time: string;
  timeToComplete: string;
};

export type BasicObject = {
  [key: string]: any;
};

export type MailOptions = {
  from: string;
  to: string;
  text: string;
  html: string;
  subject: string;
};

export type Service = {
  phone: string;
  instagramName: string;
  email: string;
  time: Moment | string | any;
  date: string | Date;
  service: ServiceOption | string;
  isAccepted: boolean;
  isAdmin?: boolean;
};
