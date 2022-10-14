import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddProject from "./components/AddProject";
import EditProject from "./components/EditProject";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-student"} className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>
            </Container>
            <Container>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-student"} className="nav-link">
                    Add Project
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/student-list"} className="nav-link">
                    Project Name
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props: JSX.IntrinsicAttributes) => (
                      <AddProject {...props} />
                    )}
                  />
                  <Route
                    exact
                    path="/create-student"
                    component={(props: JSX.IntrinsicAttributes) => (
                      <AddProject {...props} />
                    )}
                  />
                  <Route
                    exact
                    path="/edit-student/:id"
                    component={(props: JSX.IntrinsicAttributes) => (
                      <EditProject {...props} />
                    )}
                  />
                  <Route
                    exact
                    path="/student-list"
                    component={(props: JSX.IntrinsicAttributes) => (
                      <ProjectList {...props} />
                    )}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}
export default App;
