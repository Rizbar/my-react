import React from 'react';
import { Form, Field } from 'react-final-form';

const validate = (values) => {
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
  <Form
    onSubmit={(values) => {
      alert(JSON.stringify(values, null, 2));
    }}
    validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label>
          <Field name="nama">
            {({ input, meta }) => (
              <div>
                <input {...input} type="text" />
                {meta.touched && meta.error && (
                  <div style={{ color: 'red' }}>{meta.error}</div>
                )}
              </div>
            )}
          </Field>
        </div>
        <div>
          <label>Email:</label>
          <Field name="email">
            {({ input, meta }) => (
              <div>
                <input {...input} type="email" />
                {meta.touched && meta.error && (
                  <div style={{ color: 'red' }}>{meta.error}</div>
                )}
              </div>
            )}
          </Field>
        </div>
        <div>
          <label>Password:</label>
          <Field name="password">
            {({ input, meta }) => (
              <div>
                <input {...input} type="password" />
                {meta.touched && meta.error && (
                  <div style={{ color: 'red' }}>{meta.error}</div>
                )}
              </div>
            )}
          </Field>
        </div>
        <button type="submit">Submit</button>
      </form>
    )}
  />
);

export default MyForm;