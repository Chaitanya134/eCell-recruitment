import { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./scss/style.scss";

function App() {

  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="App">
      <Sidebar showSidebar={showSidebar} />
      <Main setShowSidebar={setShowSidebar} />
    </div>
  );
}

export default App;
