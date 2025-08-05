import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";


const GptSearch = () => {
  return (
    <>
        <div className="w-full h-full left-0 top-0 fixed -z-10">
            <img className="w-full h-screen object-cover"
             src = {BG_URL}
             alt="logo"/>
        </div>
        <div className="pt-[30%] md:p-0">
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </>
  );
};

export default GptSearch;