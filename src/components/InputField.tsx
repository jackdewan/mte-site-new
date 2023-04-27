interface InputFieldProps {
  label: string;
  id: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  hideLabel?: boolean;
  dark?: boolean;
}

export const InputField = ({
  label,
  id,
  required,
  placeholder,
  type = "text",
  hideLabel,
  dark,
}: InputFieldProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={`mb-2 text-sm font-medium ${
          dark ? "text-white" : "text-gray-900"
        } ${hideLabel ? "hidden" : "block"}`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`border text-sm rounded-lg block w-full p-2.5
          ${
            dark
              ? "bg-aqua-850 border-gray-600 placeholder-gray-400 text-white focus:ring-aqua-500 focus:border-aqua-500"
              : "focus:ring-aqua-500 focus:border-aqua-500 border-gray-300 text-gray-900 bg-gray-50"
          }
        `}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
