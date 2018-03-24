import { Header, Icon, Grid, Image, Segment, Label } from 'semantic-ui-react';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
// import { Link } from 'react-router-dom';
import AddToCartButton from '../../productContainers/AddToCartButton';
import ProductDetails from '../ProductDetails';

const MAX_QTE_STOCK = 10;
const style = {
  h1: {
    marginTop: '1em',
  },
};

class ProductList extends Component {
  ChekStateOfProduct = (qteStock) => (qteStock < MAX_QTE_STOCK) ? ' Sur commande' : ' Disponible';
  ChekColor = (qteStock) => (qteStock < MAX_QTE_STOCK) ? 'yellow' : 'green';

  render() {
    const {
      product,
      onProductDelete,
    } = this.props;

    return (
      <Grid container>
        <Grid.Row>
          <Grid.Column width={4}>
            <Segment>
              <Header size="tiny">{product.name}</Header>
            </Segment>
          </Grid.Column>
          <Grid.Column width={7}>
            <Segment>
              <Label
                color={this.ChekColor(product.qteStock)}
                key={this.ChekColor(product.price)}
                circular
                empty
              />
              <Label
                color={this.ChekColor(product.qteStock)}
              >
                {this.ChekStateOfProduct(product.qteStock)}
              </Label>
              <Label
                as="price"
                size="medium"
                color="red"
                tag
              >$ {product.price}
              </Label>
              <Segment>
                <Header size="tiny">Description:</Header>
                {product.description}
              </Segment>
              <Label as="warranty" basic color="red">  Garantie {product.warranty} ans</Label>
              <AddToCartButton key={product.id} data={product} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={4} stretched>
            <Segment><Image centered src={product.image} size="medium" /></Segment>
          </Grid.Column>
          <Grid.Column width={1}>
            <ProductDetails product={product} />
            {/* <Link
              to={`/${product._id}`} // eslint-disable-line
              href
            >
              <Icon
                style={style.h1}
                name="pencil"
                color="green"
                title="Update Product"
                circular
              />
            </Link> */}
            <Icon
              style={style.h1}
              name="delete"
              color="red"
              title="Delete Product"
              onClick={onProductDelete}
              circular
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        </Grid.Row>
      </Grid>
    );
  }
}

ProductList.propTypes = {
  product: PropTypes.object,
  onProductDelete: PropTypes.func,
};

export default ProductList;
