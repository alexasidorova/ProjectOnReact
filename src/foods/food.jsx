import React, { PureComponent, createRef } from 'react';

class Food extends PureComponent {
  onClick = () => {
    alert('click');
  };

  render() {
    const { data } = this.props;
    console.log(data);
    return <div onClick={this.onClick}>{data.catetegory}</div>;
  }
}

export default Food;
