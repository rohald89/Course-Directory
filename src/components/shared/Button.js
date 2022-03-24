const Button = ({ children, ...props }) => {
  return (
    <button
      type={props.type}
      className={`focus:outline-none focus:ring-4 dark:focus:ring-purple-900 hover:bg-purple-800  focus:ring-purple-300 px-5 py-2.5 font-medium text-sm mb-2 rounded-lg ${
        props.color === 'primary'
          ? 'text-white bg-purple-700  dark:bg-purple-600 dark:hover:bg-purple-700'
          : 'text-purple-700 hover:text-white border border-purple-700 ml-8 text-sm mr-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
