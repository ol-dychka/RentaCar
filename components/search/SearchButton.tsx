import Image from "next/image";

interface SearchButtonProps {
  customStyles: string;
}

const SearchButton = ({ customStyles }: SearchButtonProps) => {
  return (
    <button type="submit" className={`-ml-4 z-10 ${customStyles}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="search icon"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};
export default SearchButton;
