import React from 'react';


class Button extends React.Component {

  render() {
    return (
      <div>
        <button onClick={ this.props.onClickButton }>{ this.props.labelButton }</button>
      </div>
    )
  }
}

export default Button;
