import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <small>
          <footer className="App-footer">
            This project was coded by <strong>Meiling Aw</strong> and is{" "}
            <a
              href="https://github.com/ArtexCoder/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://gifted-galileo-12e983.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </footer>
        </small>
      </div>
    </div>
  );
}
