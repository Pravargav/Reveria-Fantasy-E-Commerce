import React from 'react';
import './Checkout.css'; // Assuming you have a CSS file for this component's styling

const Checkout = () => (
  <div className="checkout">
    <div className="checkout-container">
      <h3 className="heading-3">Credit card checkout</h3>
      <Input label="Cardholder's Name" type="text" name="name" />
      <Input 
        label="Card Number" 
        type="number" 
        name="card_number" 
        imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" 
      />
      <div className="row">
        <div className="col">
          <Input label="Expiration Date" type="month" name="exp_date" />
        </div>
        <div className="col">
          <Input label="CVV" type="number" name="cvv" />
        </div>
      </div>
      <Button text="Place order" />
    </div>
  </div>
);

const Input = (props) => (
  <div className="input">
    <label>{props.label}</label>
    <div className="input-field">
      <input type={props.type} name={props.name} />
      {props.imgSrc && <img src={props.imgSrc} alt="Input Icon" />}
    </div>
  </div>
);

const Button = (props) => (
  <button className="checkout-btn" type="button">{props.text}</button>
);

export default Checkout;
