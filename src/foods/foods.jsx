import React, { Component, createRef } from 'react';
import createRequest from 'core/create-request';
import { addFoods } from 'core/api-config';
import Food from 'foods/food';

class Foods extends Component {
  state = {
    foods: [],
    currentlipids: '',
    currentcarbs: '',
    currentprotein: '',
    currentcalories: ''
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

  onClick(protein, lipids, carbs, calories) {
    this.setState({
      currentprotein: protein,
      currentlipids: lipids,
      currentcarbs: carbs,
      currentcalories: calories
    });
    return (
      <table>
        <tr>
          <td>Белки</td>
          <td>Жиры</td>
          <td>Углеводы</td>
          <td>Калории</td>
        </tr>
        <tr>
          <td>{this.state.currentprotein}</td>
          <td>{this.state.currentlipids}</td>
          <td>{this.state.currentcarbs}</td>
          <td>{this.state.currentcalories}</td>
        </tr>
      </table>
    );
  };

  render() {
    {
      console.log(this.state.foods);
    }
    return (
    //     <form className="add-task" onSubmit={this.onSubmit}>
    //     <input className="add-task--field" type="text" name="text" ref={this.textRef} />
    //     <input className="add-task--button" type="submit" value="Добавить" />
    //   </form>

      this.state.foods.map((it) => {
        console.log(it);
        console.log(this.onClick);
          <Food data={it} onClick={this.onClick} />;
      })
    );
  }
}

export default Foods;