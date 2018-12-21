import React, { PureComponent, createRef } from 'react';

class Input extends PureComponent {
  onChange = () => {
    console.log(this.props.data);
    this.props.handleChange(this.props.data.name, this.fieldEl.current.value);
  };

  fieldEl = createRef();

  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <label>
        {data.label}
        <br />
        <input
          type={data.type}
          name={data.name}
          id={data.id}
          className={data.className}
          onChange={this.onChange}
          ref={this.fieldEl}
        />
        {' '}
        <br />
      </label>
    );
  }
}

export default Input;
