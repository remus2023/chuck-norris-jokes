import "./App.css";
import JokesList from "./components/JokesList";
import JokesTrigger from "./components/JokesTrigger ";
import { JokesContext } from "./providers/jokesContext";
import { useState } from "react";

function App() {
  const [jokes, setJokes] = useState([]);
  const [countJokes, setCountJokes] = useState(0);
  const [isFetch, setIsFetch] = useState(false);
  return (
    <JokesContext.Provider
      value={{ jokes, setJokes, countJokes, setCountJokes, isFetch, setIsFetch }}
    >
      <JokesList />
      <JokesTrigger />
    </JokesContext.Provider>
  );
}

export default App;
