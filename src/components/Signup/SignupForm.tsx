import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import moment from 'moment';
import useSwr from 'swr';

import styles from './SignupForm.module.scss';

import serviceApi from '../../api/serviceApi';

// сomponents
import Select from '../../shared/FormElements/Select/Select';
import DatePicker from '../../shared/FormElements/DatePicker/DatePicker';
import Input from '../../shared/FormElements/Input/Input';
import Button from '../../shared/Button/Button';
import TimePicker from '../../shared/FormElements/TimePicker/TimePicker';

const MOMENT_FORMAT = `HH:mm`;
const NOW = moment().hour(14).minute(30);

function SignupForm() {
  const [isSubmitted, setSubmitted] = useState(false);
  const { data, error } = useSwr(`/serviceOptions`);
  const loading = !data && !error;

  const methods = useForm({
    defaultValues: {
      date: new Date(),
      time: NOW,
    },
  });

  const onSubmit = (values: any) => {
    values.time = values.time.format(MOMENT_FORMAT);
    values.service = data.find(
      (el: any) => el.id.toString() === values.service,
    );
    serviceApi.create(values).then(() => {
      setSubmitted(true);
    });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.formContainer}>
      {isSubmitted ? (
        <h1>DANKE SCHON</h1>
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Select options={data} name="service" label="Bибери послугу" />
            <DatePicker name="date" />
            <Input name="email" label="Eмейл" placeholder="напиши емейл" />
            <Input name="phone" label="Teлефон" placeholder="напиши телефон" />
            <TimePicker label="Time" name="time" placeholder="напиши час" />
            <Input
              name="instagramName"
              label="Iнстаграм нік"
              placeholder="напиши нік"
            />
            <Button label="Gо" />
          </form>
        </FormProvider>
      )}
    </div>
  );
}

export default SignupForm;
