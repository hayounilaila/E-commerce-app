import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "reactstrap";

import "./App.css";
import { Header } from "./components/header";
import { AppRoutes } from "./routes";

function App() {
  return (
    <Container className="themed-container" fluid={true}>
      <Header />
      <Router>
        <AppRoutes />
      </Router>
    </Container>
  );
}

export default App;
