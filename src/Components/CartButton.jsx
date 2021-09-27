import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <Link
        to="/shopping-cart"
        data-testid="shopping-cart-button"
      >
        <ul>
          <li>
            <a href="/" className="cart position-relative" aria-label="shopping cart">
              <i className="fas fa fa-shopping-cart fa-lg" />
              <span className="cart-basket d-flex justify-content-center">
                0
              </span>
            </a>
          </li>
        </ul>
      </Link>
    );
  }
}

export default CartButton;
