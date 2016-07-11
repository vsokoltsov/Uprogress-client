import css from './ElementTextField.styl';

import React, { Component, PropTypes } from 'react';
import CN from 'classnames';

export default class ElementTextField extends Component {
  static propTypes = {
    name: PropTypes.string,
    onChange: React.PropTypes.func,
    type: React.PropTypes.string,
    error: React.PropTypes.any,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string
  }

  static defaultProps = {
    name: '',
    onChange: () => {},
    type: 'text',
    error: false,
    value: '',
    placeholder: ''
  }

  render() {
    const name = this.props.name;
    const listener = this.props.onChange;
    const type = this.props.type;
    const placeholder = this.props.placeholder;

    return (
      <div className={CN(css.textField)}>
        <input name={name} ref="input" type={type}
          placeholder={placeholder} onChange={listener}/>
      </div>
    );
  }
}