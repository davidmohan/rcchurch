import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Page from "./components/Page";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Page} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
