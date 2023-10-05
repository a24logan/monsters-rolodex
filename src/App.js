import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      currentSearch: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    this.setState(() => {
      return { currentSearch: event.target.value.toLowerCase() };
    });
  };

  render() {
    const { monsters, currentSearch } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monsters) => {
      return monsters.name.toLowerCase().includes(currentSearch);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        ></input>

        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
