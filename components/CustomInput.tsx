interface CustomInputProps {
  name: string;
  placeholder: string;
}

const CustomInput = ({ name, placeholder }: CustomInputProps) => {
  return (
    <div>
      <p>{placeholder}</p>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="w-full h-[48px] p-4 bg-light-white rounded-full max-sm:rounded-full outline-none cursor-pointer text-sm"
      />
    </div>
  );
};
export default CustomInput;
