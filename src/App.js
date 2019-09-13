import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CardWrapper from "./components/CardWrapper";
import CardColumn from "./components/CardColumn";

import Card from "./components/Card";
import Navbar from "./components/Navbar";

import rentals from "./bikerentals.json";

class App extends React.Component {
  state = {
    rentals
  };

  handleClick = name => {
    alert("You have rented: " + name);
  };

  render() {
    return (
      <div>
        <Navbar />
        <CardWrapper>
          {this.state.rentals.products.map(rentalData => (
            <CardColumn>
              <Card
                image={rentalData.image}
                name={rentalData.name}
                id={rentalData.id}
                price={rentalData.price}
                handleClick={this.handleClick}
              />
            </CardColumn>
          ))}
          ;
        </CardWrapper>
      </div>
    );
  }
}

export default App;
