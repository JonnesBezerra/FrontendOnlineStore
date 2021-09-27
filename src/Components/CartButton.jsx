import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link
            to="/shopping-cart"
            data-testid="shopping-cart-button"
            className="cart position-relative"
          >
            <i className="fas fa fa-shopping-cart fa-lg" />
            <span className="cart-basket d-flex justify-content-center">
              0
            </span>
          </Link>
        </li>
      </ul>
    );
  }
}

export default CartButton;
