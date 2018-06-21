import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Myjumbo from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import { Jumbotron } from 'reactstrap'
import { Col, Row, Container } from "./components/Grid";
import Playercard from "./components/Playercard";
import players from "./players.json";
import "./App.css";

class App extends React.Component {
  state = {
      message: "Click an image to begin!",
      topScore: 0,
      curScore: 0,
      players: players,
      unselectedplayers: players
  }

  componentDidMount() {
  }

  shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

render (){
  return (
  <Router>
  <Container fluid>
    <Navbar />
    <Myjumbo />
    <Row>
    {players.map((player)=>  <Playercard
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
    </Row>
  </Container>
</Router>
)}
}




export default App;

