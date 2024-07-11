import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";
import Details from "./pages/Details";
import Carts from "./pages/Carts";
import Success from "./pages/Success";
import NotFounds from "./pages/NotFounds";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={HomePages} />
          <Route path="/categories/:idc" Component={Details} />
          <Route path="/cart" Component={Carts} />
          <Route path="/success" Component={Success} />
          <Route path="*" Component={NotFounds} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
