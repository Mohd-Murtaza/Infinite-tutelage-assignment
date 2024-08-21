import "./App.css";
import Body from "./pages/Body";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="mainAppContainer">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
