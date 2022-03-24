const Button = ({ children, ...props }) => {
  return (
    <button
      type={props.type}
      className={`focus:outline-none focus:ring-purple-900 hover:bg-purple-700  px-5 py-2.5 font-medium text-sm mb-2 rounded-lg ${
        props.color === 'primary'
          ? 'text-white bg-purple-600'
          : 'text-purple-500 hover:text-white border border-purple-600 ml-8'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
