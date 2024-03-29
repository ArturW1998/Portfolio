import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from 'react-s-alert';

import REG_EXPS from '../../../constants/regExps';
import getAction from '../../../state/actions/contact';
import sendMail from '../../../services/SendMail';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';

const USERNAME = 'username';
const EMAIL = 'email';
const SUBJECT = 'subject';
const BODY = 'body';
const fieldNames = [USERNAME, EMAIL, SUBJECT, BODY];

const configAlert = {
  position: 'top-right',
  effect: 'scale',
  beep: false,
  timeout: 3000,
};
const stackAlert = { limit: 3 };

class Form extends Component {
  static propTypes = {
    contact: PropTypes.shape({
      username: PropTypes.string,
      subject: PropTypes.string,
      email: PropTypes.string,
      body: PropTypes.string,
    }),
    getAction: PropTypes.func,
  };

  static defaultProps = {
    contact: {
      username: '',
      subject: '',
      email: '',
      body: '',
    },
    getAction: () => {},
  };

  contactForm = createRef();

  username = createRef();

  email = createRef();

  subject = createRef();

  body = createRef();

  _onSubmit = e => {
    e.preventDefault();

    const error = this._validate();
    const { getAction, contact: contactData } = this.props;

    if (!error) {
      Alert.error('Some field is Invalid', configAlert);
      return;
    }

    sendMail(contactData);

    this.contactForm.current.reset();

    fieldNames.forEach(fieldName => {
      this[fieldName].current.classList.remove('goodInput');
      getAction(fieldName, '');
    });
  };

  _onKeyUp = ({ target: { name, value } }) => {
    const { getAction } = this.props;

    const actionResult = getAction(name, value);
    const { fieldName } = actionResult;

    this._validate(fieldName);
  };

  _validate = (name = null) => {
    let resultValidation = true;
    const ruleEmail = REG_EXPS.email;

    this.addError = fieldName => {
      this[fieldName].current.classList.remove('goodInput');
      this[fieldName].current.classList.add('badInput');
      resultValidation = false;
    };

    this.removeError = fieldName => {
      this[fieldName].current.classList.add('goodInput');
      this[fieldName].current.classList.remove('badInput');
    };

    if (name == null || name === EMAIL) {
      const emailField = this[EMAIL].current.value;
      emailField && ruleEmail.test(emailField) ? this.removeError(EMAIL) : this.addError(EMAIL);
    }

    const fieldNamesWithoutEmail = fieldNames.filter(fieldName => fieldName !== EMAIL);
    fieldNamesWithoutEmail.forEach(fieldName => {
      if (name == null || name === fieldName) {
        const currentField = this[fieldName].current.value;
        currentField ? this.removeError(fieldName) : this.addError(fieldName);
      }
    });

    return resultValidation;
  };

  render() {
    const {
      contact: { username, subject, email, body },
    } = this.props;

    return (
      <div className="contact-form" id="myContact_form_container">
        <p>Contact me</p>
        <p>
          <span>If you have any questions, </span>use the form below...
        </p>

        <form ref={this.contactForm} onSubmit={this._onSubmit}>
          <div>
            <input
              ref={this.username}
              name={USERNAME}
              onChange={this._onKeyUp}
              placeholder="Name"
              type="text"
              value={username}
            />
            <input
              ref={this.email}
              name={EMAIL}
              onChange={this._onKeyUp}
              placeholder="Email"
              type="text"
              value={email}
            />
          </div>
          <div>
            <input
              ref={this.subject}
              name={SUBJECT}
              onChange={this._onKeyUp}
              placeholder="Subject"
              type="text"
              value={subject}
            />
          </div>
          <div>
            <textarea
              ref={this.body}
              name={BODY}
              onChange={this._onKeyUp}
              placeholder="Message"
              value={body}
            />
          </div>
          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
        <Alert stack={stackAlert} />
      </div>
    );
  }
}

const mapStateToProps = ({ contact }) => ({ contact });

const matchDispatchToProps = { getAction };

export default connect(mapStateToProps, matchDispatchToProps)(Form);
