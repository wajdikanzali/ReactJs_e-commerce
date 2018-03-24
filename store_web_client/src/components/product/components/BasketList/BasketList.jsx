import React from 'react';
import { PropTypes } from 'prop-types';
import { Card, Image, Header, Icon } from 'semantic-ui-react';

function BasketList(props) {
  const {
    product,
    onProductDelete,
  } = props;

  const style = {
    h1: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      width: '100%',
      height: '1.2em',
    },
  };

  return (
    <Card href="#card-example-link-card">
      <Image src={product.image} size="tiny" centered />
      <Card.Content>
        <Card.Header textAlign="left">{product.name}</Card.Header>
        <Card.Description textAlign="right">
          <Icon onClick={() => onProductDelete(product)} title="Delete" color="red" name="delete" />
        </Card.Description>
        <Card.Description style={style.h1}>{product.description}</Card.Description>
        <Header size="medium" color="red" align="right">{product.price}€</Header>
      </Card.Content>
    </Card>
  );
}

BasketList.propTypes = {
  product: PropTypes.object,
  onProductDelete: PropTypes.func,
};

export default BasketList;
