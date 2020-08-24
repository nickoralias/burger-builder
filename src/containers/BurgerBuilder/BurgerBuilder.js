import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...};
  // }
  state = {
    ingredients: {
      lettuce: 1,
      bacon: 1,
      cheese: 2,
      patty: 2
    }
  }

  render () {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;