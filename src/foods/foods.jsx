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
        }, 50);
      }
    });
  }

  onClick = (protein, lipids, carbs, calories) => {
    let table = document.querySelector('table');
    table.classList.remove('hidden');
    this.setState({
      currentprotein: protein,
      currentlipids: lipids,
      currentcarbs: carbs,
      currentcalories: calories
    });
    console.log('onclick',this.state);
  };

  render() {
    return (
    //     <form className="add-task" onSubmit={this.onSubmit}>
    //     <input className="add-task--field" type="text" name="text" ref={this.textRef} />
    //     <input className="add-task--button" type="submit" value="Добавить" />
    //   </form>
    <div id='wrapperForTable'>
    <table className="hidden" id='resultTable'>
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
      {this.state.foods.map((it) => {
        return  <Food data={it} onClick={this.onClick} />;
      })
    }
    </div>
    )
  }
}

export default Foods;