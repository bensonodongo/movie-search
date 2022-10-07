import MovieApp from "./MovieApp";
import './App.css';
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={{}}>
    <div className="App">
      <MovieApp />
      </div>
      </ThemeProvider>
  );
}

export default App;
