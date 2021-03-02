import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import styles from './SignupForm.module.scss';

import serviceApi from '../../api/serviceApi';

// сomponents
import Select from '../../shared/FormElements/Select/Select';
import DatePicker from '../../shared/FormElements/DatePicker/DatePicker';
import Input from '../../shared/FormElements/Input/Input';
import Button from '../../shared/Button/Button';

function SignupForm() {
  const [isSubmitted, setSubmitted] = useState(false);

  const methods = useForm({
    defaultValues: {
      date: new Date(),
    },
  });

  const onSubmit = (values: any) => {
    serviceApi.create(values).then(() => {
      setSubmitted(true);
    });
  };

  return (
    <div className={styles.formContainer}>
      {isSubmitted ? (
        <h1>DANKE SCHON</h1>
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Select name="service" label="Bибери послугу" />
            <DatePicker name="date" />
            <Input name="email" label="Eмейл" placeholder="напиши емейл" />
            <Input name="phone" label="Teлефон" placeholder="напиши телефон" />
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
