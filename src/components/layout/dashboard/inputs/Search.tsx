import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface SearchProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: () => void;
  isSearching: boolean;
}

const Search = ({ inputValue, onInputChange, onSearchClick, isSearching }: SearchProps) => {
  return (
    <div className="flex items-center">
      <div className="relative flex items-center">
        <input
          type="text"
          value={inputValue}
          placeholder="Search by name"
          onChange={onInputChange}
          className="p-1.5 pl-10 pr-3 border border-gray-300 shadow-sm outline-none md:w-[200px]"
        />
        <FaSearch className="absolute left-3 text-gray-400" size={20} />
      </div>
      <Button onClick={onSearchClick} aria-label="Search blogs" className="ml-3">
        {isSearching ? "Searching..." : "Search"}
      </Button>
    </div>
  );
};

export default Search;