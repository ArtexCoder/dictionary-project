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
          <footer className="App-footer">Coded by Meiling Aw</footer>
        </small>
      </div>
    </div>
  );
}
