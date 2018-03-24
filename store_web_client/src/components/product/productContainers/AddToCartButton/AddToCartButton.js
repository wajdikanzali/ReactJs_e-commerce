import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { PropTypes } from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

const MAX_QTE_STOCK = 10;
class AddToCartButton extends Component {
  addToList = (product) => {
    this.props.mutate({
      variables: { product },
    });
  }

  CheckButton = (qteStock) => (qteStock < MAX_QTE_STOCK);

  render() {
    return (
      <Button
        disabled={this.CheckButton(this.props.data.qteStock)}
        color="blue"
        floated="right"
        animated="vertical"
        onClick={() => this.addToList(this.props.data)}
      >
        <Button.Content hidden>Buy</Button.Content>
        <Button.Content visible>
          <Icon name="shop" />
        </Button.Content>
      </Button>
    );
  }
}
const addToBasket = gql`
  mutation addProduct($product: Object!) {
    addProduct(product: $product) @client {
      id
    }
  }
`;

AddToCartButton.propTypes = {
  mutate: PropTypes.func.isRequired,
  data: PropTypes.object,
};


export default graphql(addToBasket)(AddToCartButton);
