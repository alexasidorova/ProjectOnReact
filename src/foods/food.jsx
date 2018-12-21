import React, { PureComponent, createRef } from 'react';

class Food extends PureComponent {
  onClick = () => this.props.onClick(
    this.props.protein,
    this.props.lipids,
    this.props.carbs,
    this.props.calories
  );

  render() {
    const { data } = this.props;
    console.log(data);
    return <div onClick={this.onClick}>{data.catetegory}</div>;
  }
}

export default Food;