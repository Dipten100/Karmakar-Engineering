import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <div className="min-vh-100">
        <Outlet/>
      </div>
    </>
  );
}

export default App;
