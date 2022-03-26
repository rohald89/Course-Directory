import { useField, ErrorMessage } from 'formik';

const TextareaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-6">
      <label className="block mb-2 mt-8 text-sm font-medium text-gray-300" htmlFor={field.name}>
        {label}
      </label>
      <textarea
        className={`min-h-[300px] focus:outline-none border-2 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-purple-500 focus:border-purple-500 ${
          meta.touched &&
          meta.error &&
          ' border text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 border-red-400'
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="mt-2 text-sm text-red-500" />
    </div>
  );
};

export default TextareaInput;
