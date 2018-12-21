
import React, { Component } from 'react';

import Input from './input';
import Radio from './radio';

class Form extends React.Component {
  state = [
    {
      label: 'Пол', name: 'sex', type: 'radio', value: 'man', label: 'мужской'
    },
    {
      label: 'Пол', name: 'sex', type: 'radio', value: 'woman', label: 'женский'
    },
    { label: 'Вес (кг)', name: 'weight', type: 'number', id: 'weight', className: 'weight' },
    { label: 'Рост (см)', name: 'height', type: 'number', id: 'height', className: 'height'},
    { label: 'Возраст', name: 'old', type: 'number', id: 'old', className: 'old' },
    
      
    { name: 'activity', type: 'radio', value: 'activity1', label: 'Твоя активность:  Низкая',  id: 'activity1'},       
    { name: 'activity', type: 'radio', value: 'activity2', label: 'Физические нагрузки 1-2 раза в неделю',  id: 'activity' },
    { name: 'activity', type: 'radio', value: 'activity3', label: 'Физические нагрузки 3-4 раза в неделю',  id: 'activity' },
    { name: 'activity', type: 'radio', value: 'activity4', label: 'Физические нагрузки 5-6 раз в неделю',id: 'activity' },
    { name: 'activity', type: 'radio', value: 'activity5', label: 'Физические нагрузки каждый день',id: 'activity' },
   
  ];

 
  info = {};
 
  handleChange = (name, value, radioValue) => {
    console.log(name, value, radioValue);
    if (radioValue) {
      Object.assign(this.info, { [radioValue]: value });
    } else {
        Object.assign(this.info, { [name]: value });
    }

    console.log(this.info);
  };

  onClickButton = () => {
    const data = this.info;
    console.log('data',data);
    let newResult;
    let active;
    function getActivity () {
        if (data.activity1 && data.activity1 === 'on'){
            active = 1.2;
        } else if (data.activity2 && data.activity2 === 'on'){
            active = 1.3;
        }else if (data.activity3 && data.activity3 === 'on'){
            active = 1.5;
        }else if (data.activity4 && data.activity4 === 'on'){
            active = 1.7;
        }else if (data.activity5 && data.activity5 === 'on'){
            active = 1.8; 
        } 
    };
    getActivity();
    console.log(active);      
    if (data.woman && data.woman === 'on') {
      newResult = active*(655 + 9.6 * data.weight + 1.8 * data.height - 4.7 * data.old);
    } else if (data.man && data.man === 'on') {
      newResult = active*(66 + 13.7 * data.weight + 5 * data.height - 6.8 * data.old);
    }
    console.log(newResult)
    this.setState({ result: newResult });
    // return <div id='totalCalories'>Тебе необходимо  {result} калорий в день!</div>;
  };

  inputs = [];


render() {
    debugger;
    for (let i=0; i < (this.state.length-1); i++) {
    this.inputs.push(this.state[i]);
    };
    console.log('inputs',this.inputs);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Узнай количество калорий, необходимых тебе на целый день!</h1>
        </header>
        <form className="App-calc">
          <h3 className="App-calc_header">Введи свои данные:</h3>
          {/* <Input data={this.state} handleChange={this.handleChange} /> */}
          {         this.inputs.map(element => {
              if (element.type === 'radio') {
                  console.log('form')
                return <Radio data={element} handleChange={this.handleChange} />
              } else if (element.type === 'number') {
                return <Input data={element} handleChange={this.handleChange} />
              }
            })
          }
          
          
         
          <button id='buttonPage1' type="button" onClick={this.onClickButton}>
            Посчитать
          </button>
         
          <div id='totalCalories'>Тебе необходимо  {this.state.result} калорий в день!</div>
        </form>
        
      </div>
      
    );
  }
}

export default Form;