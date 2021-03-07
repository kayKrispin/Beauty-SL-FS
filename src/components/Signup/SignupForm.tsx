import React, { useState, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Link from 'next/link';

import moment, { Moment } from 'moment';

import { useOptions } from '@/hooks/useOptions';
import { useGetServiceDay } from '@/hooks/useGetServiceDay';
import { calculateDayLoading } from '@/helpers';
import styles from './SignupForm.module.scss';

import serviceApi from '../../api/serviceApi';

// сomponents
import Select from '../../shared/FormElements/Select/Select';
import DatePicker from '../../shared/FormElements/DatePicker/DatePicker';
import Input from '../../shared/FormElements/Input/Input';
import Button from '../../shared/Button/Button';
import TimePicker from '../../shared/FormElements/TimePicker/TimePicker';

// time formats
const TIME_FORMAT = `HH:mm`;
const DATE_FORMAT = `MM-DD`;

type Service = {
  id: number;
  time: string;
  timeToComplete: string;
};

type FormValues = {
  phone: string;
  instagramName: string;
  email: string;
  time: Moment | string | any;
  date: string | Date;
  service: Service | string;
  isAccepted: boolean;
};

type Props = {
  children: React.ReactNode;
};

const formatDate = (date: Date | any) => moment(date).format(DATE_FORMAT);

export default function SignupForm({ children }: Props) {
  const [isSubmitted, setSubmitted] = useState(false);
  const [busyTime, setBusyTime] = useState<any>([]);
  const { data, loading } = useOptions();

  const methods = useForm<FormValues>({
    defaultValues: {
      date: new Date(),
      time: null,
    },
    reValidateMode: `onChange`,
    mode: `onChange`,
  });

  // Get all records from specific day
  const serviceDays = useGetServiceDay(formatDate(methods.watch(`date`)));

  const getValues = (values: FormValues) => {
    values.isAccepted = false;
    values.time = values.time && values.time.format(TIME_FORMAT);
    values.date = formatDate(values.date);
    values.service = JSON.stringify(
      data.find((el: any) => el.id.toString() === values.service),
    );

    return values;
  };

  // Define witch hours are unavailable
  const disabledHours = busyTime && [
    ...busyTime
      ?.map((el: any) => {
        const updatedArray = [];
        if (el.hour) updatedArray.push(+el.hour);

        if (el.secondHour) updatedArray.push(+el.secondHour);
        if (el.thirdHour) updatedArray.push(+el.thirdHour);

        return updatedArray;
      })
      .filter((item: any) => [...item])
      .reduce((acc: any, val: any) => [...acc, ...val], []),
  ];

  // Calculate day loading
  useEffect(() => {
    const salonBusyTime = calculateDayLoading(serviceDays?.serviceDay);
    setBusyTime(salonBusyTime);
  }, [serviceDays?.serviceDay]);

  const onSubmit = (values: FormValues) => {
    const formattedValues = getValues(values);

    serviceApi.create(formattedValues).then(() => {
      setSubmitted(true);
    });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.formContainer}>
      <div className={styles.formContainerInner}>
        {isSubmitted ? (
          <h1>
            Bам на пошту прийшов лист про запис, перейдіть будь ласка по лінці
            шоб підтвердити запис
          </h1>
        ) : (
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Select options={data} name="service" label="Bибери послугу" />
              <DatePicker name="date" />
              <Input name="email" label="Eмейл" placeholder="напиши емейл" />
              <Input
                name="phone"
                label="Teлефон"
                placeholder="напиши телефон"
              />
              <TimePicker
                disabledHours={disabledHours}
                label="Time"
                name="time"
                placeholder="напиши час"
              />
              <Input
                name="instagramName"
                label="Iнстаграм нік"
                placeholder="напиши нік"
              />
              <Button label="Gо" />
              <Link href="/cabinet">cabinetr</Link>
            </form>
          </FormProvider>
        )}
      </div>
      {children}
    </div>
  );
}
