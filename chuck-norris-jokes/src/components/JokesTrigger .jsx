import { useContext } from "react";

import { JokesContext } from "../providers/jokesContext";

const JokesTrigger = () => {
  const { jokes, setJokes, countJokes, setCountJokes, setIsFetch } = useContext(JokesContext);
  function handleClick() {
    setIsFetch(false);
    setTimeout(() => {
      fetchJokes();
      setIsFetch(true);
    }, 0);
  }

  async function fetchJokes() {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setJokes((prevJoke) => [...prevJoke, data.value]);
      setCountJokes(countJokes + 1);
      console.log(jokes);
    } catch (error) {
      console.log(error);
    }
  }

  //   useEffect(() => {
  //     fetchJokes();
  //   }, []);

  return (
    <>
      <button onClick={() => handleClick()} disabled={countJokes === 10}>
        Show Jokes
      </button>
    </>
  );
};

export default JokesTrigger;
