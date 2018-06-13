import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
import Myjumbo from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import { Jumbotron } from 'reactstrap'
import Playercard from "./components/Playercard";
import players from "./players.json";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";

const App = () => (

    <Router>
      <div>
        <Navbar />
        <Myjumbo />
        {players.map((player)=>  <Playercard
      name={player.name}
      image={player.image}
      team={player.team}
    /> )}
        {/* <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer /> */}
      </div>
    </Router>
);

export default App;

