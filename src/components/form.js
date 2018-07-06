import React, { Component } from 'react';
import Header from './navbar';

class Form extends Component {
  render() {
    return (
      <div>
        <Header />
      <form className="form">
        <div className="form__Name">
        <label>
          First Name:
          <input type="text" name="First Name"></input>
        </label>
      </div>
      <div className="form__Name">
        <label>
          Last Name
          <input type="text"  name="Last Name"></input>
        </label>
      </div>
      <div className="form__email">
        <label>
          Email:
          <input type="text" name="Email"></input>
        </label>
      </div>
      <div className="form__CC">
        <label>
          Credit Card Number:
          <input type="text" name="Credit Card Number"></input>
        </label>
      </div>
      <div className="form__CC">
        <label>
          Expiration Date:
          <input type="text" name="Expiration Date"></input>
        </label>
      </div>
      <div className="form__CC">
        <label>
          CVV:
          <input type="text" name="CVV"></input>
        </label>
      </div>
      <div className="form__CC">
        <label>
          Billing ZIP:
          <input type="text" name="Billing ZIP"></input>
        </label>
      </div>
      <button className="submit"><i class="fas fa-credit-card"></i> Submit</button>
      </form>
      </div>
    );
  }
}
export default Form;