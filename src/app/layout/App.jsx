import React, { useState } from "react";
import NavBar from "../../features/nav/NavBar";
import SideBar from "../../features/nav/SideBar";
import { Route, Switch } from "react-router-dom";
import NewsDashboard from "../../features/news/newsDashboard/newsDashboard";
import NewsList from "../../features/news/newsDashboard/newsList";
import { Container } from "semantic-ui-react";

function App() {
  const [clicked, setClicked] = useState(false);

  function handleSetClick() {
    setClicked(!clicked);
  }

  return (
    <>
      <NavBar clicked={clicked} handleSetClick={handleSetClick} />
      <SideBar clicked={clicked} handleSetClick={handleSetClick} />
      <Container className="main">
        <Switch>
          <Route path="/" exact component={NewsDashboard} />
          <Route path="/features" component={NewsList} />
          <Route path="/pricing" component={NewsDashboard} />
          <Route path="/testimonial" component={NewsList} />
          <Route path="/demo" component={NewsDashboard} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
