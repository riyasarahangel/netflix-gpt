import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";


const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store)=>store.config.lang);
  const searchText = useRef(null);


  //searches movie that are returned for the searched query and it's info in TMDB 
  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +
    movie + 
    "&include_adult=false&language=en-US&page=1",
    API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  }
  
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery = 
    "Act as a Movie Recommendation system and suggest some movies for the query" + 
    searchText.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result : Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    console.log(gptResults.choices?.[0]?.message?.content);

    // gives coma seperated array of movies based on the search query
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // for each movie, I'll search TMDB API

    //this calls the searchMovieTMDB no. of times the gptResults and maps it
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
    // returns an array of Promises because it is an async function

    //to convert the promise array data 

    const tmdbResults = await Promise.all(promiseArray);
    
    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));

  };

  return (
    <div className="pt-[10%] flex justify-center">
        <form 
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e)=>e.preventDefault()} >
            <input 
              ref={searchText}
              type = "text" 
              className="p-4 m-4 col-span-9" 
              placeholder={lang[langKey].gptSearchPlaceholder}
              />
            <button 
              className="py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg "
              onClick={handleGptSearchClick}> 
              {lang[langKey].search} 
            </button>
        </form>
    </div>
  );
};

export default GptSearchBar;