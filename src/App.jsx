import TodoApp from "./components/TodoApp";
import DarkModeToggle from "./components/DarkModeToggle";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <DarkModeToggle />
      <TodoApp />
    </div>
  );
}

export default App;
