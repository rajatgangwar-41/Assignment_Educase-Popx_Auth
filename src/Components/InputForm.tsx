import React from "react";

interface FormInputProps {
  text: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  text,
  type,
  placeholder,
  required = false,
  name,
  value,
  onChange,
}) => {
  return (
    <fieldset className="border border-gray-300 rounded-md px-3 py-1 focus-within:border-purple-600">
      <legend className="text-[13px] text-[#6C25FF] px-2">
        {text} {required && <span className="text-red-500">*</span>}
      </legend>
      <input
        className="w-full outline-none border-0 placeholder-gray-400"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
};

export default FormInput;
