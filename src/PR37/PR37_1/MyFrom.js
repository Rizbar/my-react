import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validate = values => {
  const errors = {};

  // Validasi Nama
  if (!values.nama) {
    errors.nama = 'Nama tidak boleh kosong';
  } else if (values.nama.length < 5) {
    errors.nama = 'Nama minimal 5 karakter';
  } else if (values.nama.length > 12) {
    errors.nama = 'Nama maksimal 12 karakter';
  }

  // Validasi Email
  if (!values.email) {
    errors.email = 'Email tidak boleh kosong';
  }

  // Validasi Password
  if (!values.password) {
    errors.password = 'Password tidak boleh kosong';
  } else if (values.password.length < 6) {
    errors.password = 'Password minimal 6 karakter';
  }

  return errors;
};

const MyForm = () => (
  <Formik
    initialValues={{ nama: '', email: '', password: '' }}
    validate={validate}
    onSubmit={(values) => {
      alert(JSON.stringify(values, null, 2));
    }}
  >
    {() => (
      <Form>
        <div>
          <label>Nama:</label>
          <Field name="nama" type="text" />
          <ErrorMessage name="nama" component="div" style={{ color: 'red' }} />
        </div>
        <div>
          <label>Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
        </div>
        <div>
          <label>Password:</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
        </div>
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);

export default MyForm;