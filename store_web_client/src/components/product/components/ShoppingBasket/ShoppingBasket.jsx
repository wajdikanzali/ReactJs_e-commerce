import React from 'react';
import { Button, Icon, Divider } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

function ShoppingBasket(props) {
  const {
    total,
    productLength,
  } = props;
  return (
    <Button basic icon labelPosition="left">
      {productLength} <Divider fitted /> <Icon name="shopping basket" /> {total} €
    </Button>
  );
}

ShoppingBasket.propTypes = {
  total: PropTypes.string,
  productLength: PropTypes.number,
};

export default ShoppingBasket;
