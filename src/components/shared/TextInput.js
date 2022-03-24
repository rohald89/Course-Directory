import { useField, ErrorMessage } from 'formik';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log(field, meta);
  return (
    <div className="mb-6">
      {/* <label htmlFor={props.id || props.name}>{label}</label>
      <input type="text" {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null} */}
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        htmlFor={field.name}
      >
        {label}
      </label>
      <input
        className={`focus:outline-none bg-gray-50 border border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 ${
          meta.touched &&
          meta.error &&
          ' border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:border-red-400'
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="mt-2 text-sm text-red-500" />
    </div>
  );
};

export default TextInput;
