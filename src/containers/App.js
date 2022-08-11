import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary'
import Scroll from '../components/Scroll'

class App extends Component {
  constructor(){
    super()
    this.state = {
      'robots': [],
      'searchBox': ''
    }
  }

  onSearch = (event) => {
    this.setState({searchBox: event.target.value})
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(
          response => response.json()
          )
      .then(
          users => this.setState({robots: users}
          )
      );
  }

  render() {  
    const { robots, searchBox } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchBox.toLowerCase());
    });
    return !robots.length ? 
      <h1>Loading</h1> : 
      (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox Search={this.onSearch}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default App;