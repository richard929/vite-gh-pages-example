import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Example } from "./components/Example";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/vite-gh-pages-example">
            <Route path="" element={<Home />} />
            <Route path="example" element={<Example />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
