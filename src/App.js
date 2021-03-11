import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "reactstrap";

import "./App.css";
import { Header } from "./components/header";
import { AppRoutes } from "./routes";

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
}

export default App;
