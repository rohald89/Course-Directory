import { useField } from 'formik';
import React from 'react';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField();
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="text" {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

export default TextInput;
