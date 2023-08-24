import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Header} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
