import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Page from "./components/Page";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Page} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
