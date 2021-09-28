import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartButton extends Component {
  countCartItems = () => {
    const { shoppingCartItens } = this.props;
    const total = shoppingCartItens.reduce((prev, curr) => prev + curr.quantity, 0);
    return total;
  }

  render() {
    // const { shoppingCartItens } = this.props;
    return (
      <ul>
        <li>
          <Link
            to="/shopping-cart"
            data-testid="shopping-cart-button"
            className="cart position-relative"
          >
            <i className="fas fa fa-shopping-cart fa-lg" />
            <span
              className="cart-basket d-flex justify-content-center"
              data-testid="shopping-cart-size"
            >
              { this.countCartItems() }
            </span>
          </Link>
        </li>
      </ul>
    );
  }
}

CartButton.propTypes = {
  shoppingCartItens: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CartButton;
