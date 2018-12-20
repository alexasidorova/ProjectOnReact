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
    { label: 'Вес (кг)', name: 'weight', type: 'number' },
    { label: 'Рост (см)', name: 'height', type: 'number' },
    { label: 'Возраст', name: 'old', type: 'number' },
    
    //   label: 'Твоя активность',
    { name: 'activity', type: 'radio', value: 'activity1', label: 'Низкая'},       
    { name: 'activity', type: 'radio', value: 'activity2', label: 'Физические нагрузки 1-2 раза в неделю' },
    { name: 'activity', type: 'radio', value: 'activity3', label: 'Физические нагрузки 3-4 раза в неделю' },
    { name: 'activity', type: 'radio', value: 'activity4', label: 'Физические нагрузки 5-6 раз в неделю' },
    { name: 'activity', type: 'radio', value: 'activity5', label: 'Физические нагрузки каждый день' }
      
    
   
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
    let result;
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
      result = active*(655 + 9.6 * data.weight + 1.8 * data.height - 4.7 * data.old);
    } else if (data.man && data.man === 'on') {
      result = active*(66 + 13.7 * data.weight + 5 * data.height - 6.8 * data.old);
    }
    console.log(result)
    return <div>{result}</div>;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Узнай количество калорий, необходимых тебе на целый день!</h1>
        </header>
        <form className="App-calc">
          <h3 className="App-calc_header">Введи свои данные:</h3>
          {/* <Input data={this.state} handleChange={this.handleChange} /> */}
          {this.state.map(element => {
              debugger;
              if (element.type === 'radio') {
                  console.log('form')
                return <Radio data={element} handleChange={this.handleChange} />
              } else if (element.type === 'number') {
                return <Input data={element} handleChange={this.handleChange} />
              }
          })
        }
          
          
          {/* <label className='gender'>{this.state[0].label}
        <input type={this.state[0].type} name={this.state[0].name} onChange={this.handleChange}></input>
        {this.state[0].options[0].label} </label>  */}
          {/* <label>
        <input type={this.state[0].type} name={this.state[0].name} onChange={this.handleChange}></input> {this.state[0].options[1].label} </label> */}
          {/* <label>{this.state[1].label} <input type={this.state[1].type} name={this.state[1].name} onChange={this.handleChange}></input></label>
       <label>{this.state[2].label} <input type={this.state[2].type} name={this.state[2].name} onChange={this.handleChange}></input></label>
       <label>{this.state[3].label} <input type={this.state[3].type} name={this.state[3].name} onChange={this.handleChange}></input></label>
       <label>{this.state[4].label}</label>
       <input type={this.state[4].type} name={this.state[4].name}></input>
       <label>{this.state[4].options[0].label}<input type={this.state[4].options[0].label} name="group2"></input>{this.state[4].options[1].label}</label>
         <input type="radio" name="group2"></input><label>{this.state[4].options[2].label}</label>
         <input type="radio" name="group2"></input><label>{this.state[4].options[3].label}</label>
         <input type="radio" name="group2"></input><label>{this.state[4].options[0].label}</label>              */}
          <button type="button" onClick={this.onClickButton}>
            Посчитать
          </button>
        </form>
      </div>
      // <form onSubmit={this.onSubmit}>
      //   {this.fields.map(fieldData => (
      //     <Input {...fieldData} handleChange={this.handleChange} />
      //   ))}
      // </form>
      // {this.calc()}
    );
  }
}

export default Form;