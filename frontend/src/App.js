import Login from './components/Login';
import Homepage from './components/Homepage';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      {/* <Routes> */}
        {/* <Route path="/" element={<Login />} /> */}

      <Login />
      <Homepage exact='/homepage'/>
        {/* <Route path="/homepage" element={<Homepage />} /> */}
      {/* </Routes> */}
    </div>
    // </BrowserRouter>
  );
}

export default App;
