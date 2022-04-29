import './App.css';
import SideBar from "./Component/SideBar/SideBar";
import Home from "./Component/Home/Home"
import RightSidebar from './Component/RightSideBar/RightSidebar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Home />
      <RightSidebar />
    </div>
  );
}

export default App;
