import React, { PureComponent, createRef } from 'react';

class Radio extends PureComponent {
  onChange = () => {
    console.log(this.props.data);
    this.props.handleChange(
      this.props.data.name,
      this.fieldEl.current.value,
      this.props.data.value
    );
  };

  fieldEl = createRef();

  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <label className="gender">
        {data.label}
        <input type={data.type} name={data.name} onChange={this.onChange} ref={this.fieldEl} />
      </label>
    );
  }
}

export default Radio;
