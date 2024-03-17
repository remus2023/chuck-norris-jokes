import { useContext } from "react";
import { JokesContext } from "../providers/jokesContext";
import spinner from "../assets/Spinner.gif";
const JokesList = () => {
  const { jokes, setJokes, isFetch, countJokes, setCountJokes } = useContext(JokesContext);
  function deleteJoke(index) {
    setJokes(jokes.filter((joke) => joke !== index));
    setCountJokes(countJokes - 1);

    console.log(jokes, index);
  }
  return (
    <>
      {jokes.length > 0 ? (
        isFetch ? (
          jokes.map((joke, index) => (
            <div className="flex flex-row" key={index}>
              <p>{joke}</p>
              <button
                onClick={() => deleteJoke(joke)}
                className="border-orange-400 border-solid border-2 rounded-md bg-orange-300 w-[100px]"
              >
                Delete Joke
              </button>
            </div>
          ))
        ) : (
          <img src={spinner} width="70px" />
        )
      ) : (
        <p className="text-red-500">Momentan nu sunt glume</p>
      )}
    </>
  );
};

export default JokesList;
