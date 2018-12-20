import React, { Component, createRef } from 'react';
import createRequest from 'core/create-request';
import { addFoods } from 'core/api-config';
import Food from "foods/food";

class Foods extends Component {
  state = {
    foods: []
  };

  textRef = createRef();

  componentDidMount() {
    createRequest(addFoods).then((response) => {
      if (response.status === 'OK') {
        setTimeout(() => {
          this.setState({ foods: response.data });
        }, 2000);
      }
    });
  }

  render() {
    {
      console.log(this.state.foods);
    }
    return (
    //     <form className="add-task" onSubmit={this.onSubmit}>
    //     <input className="add-task--field" type="text" name="text" ref={this.textRef} />
    //     <input className="add-task--button" type="submit" value="Добавить" />
    //   </form>
    this.state.foods.map(function(it) {
        console.log(it);
        return <Food data={it}/>
    })
    )
  }
}

export default Foods;
