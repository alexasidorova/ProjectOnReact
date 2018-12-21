import React, { PureComponent, createRef } from 'react';

class Food extends PureComponent {
  onClick = () => {
    console.log('CLICK', this.props);
    this.props.onClick(
      this.props.data.protein,
      this.props.data.lipids,
      this.props.data.carbs,
      this.props.data.calories
    );
  };

  render() {
    const { data } = this.props;
    return <div onClick={this.onClick}>{data.name}</div>;
  }
}

export default Food;
