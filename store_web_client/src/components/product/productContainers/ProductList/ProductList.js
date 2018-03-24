import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { PropTypes } from 'prop-types';
import { Grid } from 'semantic-ui-react';
import ProductHeader from '../../components/header';
import ProductItem from '../../components/ProductList';
import ShoppingLayer from '../../productContainers/ShoppingLayer';
import ALL_PRODUCTS_QUERY from '../../../../graphql-common/queries/product';
import REMOVE_PRODUCT_MUTATION from '../../../../graphql-common/mutations/product/RemoveProduct';


class ProductList extends Component {
  onProductDelete(id) {
    this.props.mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  }
  render() {
    if (this.props.data.loading) { return <div>Loading...</div>; }
    return (
      <div>
        <ProductHeader />
        <Grid columns="2" divided>
          <Grid.Row>
            <Grid.Column width={12}>
              {this.props.data.Products.map((product) => (
                <ProductItem
                  key={product._id} // eslint-disable-line
                  product={product}
                  onProductDelete={() => this.onProductDelete(product._id)} // eslint-disable-line
                />
              ))}
            </Grid.Column>
            <Grid.Column width={4}>
              <ShoppingLayer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

ProductList.propTypes = {
  mutate: PropTypes.func.isRequired,
  data: PropTypes.object,
};

export default compose(graphql(REMOVE_PRODUCT_MUTATION), graphql(ALL_PRODUCTS_QUERY))(ProductList);

// export default graphql(REMOVE_PRODUCT_MUTATION)(graphql(ALL_PRODUCTS_QUERY)(ProductList));
