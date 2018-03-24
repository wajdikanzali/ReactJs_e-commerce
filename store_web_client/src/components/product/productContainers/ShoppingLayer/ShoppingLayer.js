
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { reduce } from 'lodash';
import { PropTypes } from 'prop-types';
import ShoppingBasket from '../../components/ShoppingBasket';
import BasketList from '../../../../components/product/components/BasketList';

class ShoppingLayer extends Component {
  onProductDelete = (product) => {
    this.props.mutate({
      variables: { product },
    });
  }

  render() {
    const total = reduce(this.props.data.basketList, (memo, item) =>
      memo + Number(item.product.price), 0).toFixed(2);
    const productLength = this.props.data.basketList.length;
    return (
      <Grid>
        <Grid.Row centered>
          <ShoppingBasket
            total={total}
            productLength={productLength}
          />
        </Grid.Row>
        <Grid.Row>
          {this.props.data.basketList.map((item, key) => (
            <BasketList
              key={key} // eslint-disable-line
              product={item.product}
              onProductDelete={this.onProductDelete}
            />
          ))}
        </Grid.Row>
      </Grid>
    );
  }
}

const query = gql`
query GetBasketList {
  basketList @client {
    product {
      _id
      description
      name
      price
      qteStock
      image
      warranty
    }
  }
}
`;

const deleteProduct = gql`
  mutation deleteProduct($product: Object!) {
    deleteProduct(product: $product) @client {
      _id
    }
  }
`;

ShoppingLayer.propTypes = {
  data: PropTypes.object,
  mutate: PropTypes.func.isRequired,
};

export default compose(graphql(deleteProduct), graphql(query))(ShoppingLayer);

// export default graphql(query)(ShoppingLayer);
