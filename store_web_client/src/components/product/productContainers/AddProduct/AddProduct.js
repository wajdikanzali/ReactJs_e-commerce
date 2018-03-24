import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import createHistory from 'history/createBrowserHistory';
import { Form, Icon, Button, TextArea, Input, Container, Header } from 'semantic-ui-react';
import ADD_PRODUCTS_MUTATION from '../../../../graphql-common/mutations/product/AddProduct';
import ALL_PRODUCTS_QUERY from '../../../../graphql-common/queries/product';

const history = createHistory({
  forceRefresh: true,
});

class AddProduct extends React.Component {
  state = {
    name: '',
    price: '',
    qteStock: '',
    warranty: '',
    image: '',
    description: '',
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  creerProduct = (event) => {
    event.preventDefault();
    this.props.mutate({
      variables: {
        name: this.state.name,
        price: this.state.price,
        qteStock: this.state.qteStock,
        warranty: this.state.warranty,
        image: this.state.image,
        description: this.state.description,
      },
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }).then(() => history.push('/'));
  };

  render() {
    const {
      name,
      price,
      qteStock,
      warranty,
      image,
      description,
    } = this.state;

    return (
      <Container text>
        <Header as="h2" icon textAlign="center">
          <Icon name="add to cart" circular />
          <Header.Content>
            Add New Product
            <Link
              to="/"
              href
              title="Back to product list"
            >
              <Icon name="angle left" />
            </Link>
          </Header.Content>
        </Header>
        <Form>
          <Input
            name="name"
            onChange={this.onChange}
            value={name}
            placeholder="Product Name"
            fluid
          />
          <Input
            name="price"
            onChange={this.onChange}
            value={price}
            placeholder="Price"
            fluid
          />
          <Input
            name="qteStock"
            onChange={this.onChange}
            value={qteStock}
            placeholder="Quantity in stock"
            type="number"
            min={0}
            required
            fluid
          />
          <Input
            name="warranty"
            onChange={this.onChange}
            value={warranty}
            placeholder="warranty"
            type="number"
            min={0}
            required
            fluid
          />
          <Input
            name="image"
            onChange={this.onChange}
            value={image}
            placeholder="URL"
            fluid
          />
          <TextArea
            name="description"
            onChange={this.onChange}
            value={description}
            placeholder="Description"
          /><br />
          <Button onClick={(event) => this.creerProduct(event)}>Add new product</Button>
        </Form>
      </Container>
    );
  }
}

AddProduct.propTypes = {
  mutate: PropTypes.func.isRequired,
};

export default graphql(ADD_PRODUCTS_MUTATION)(AddProduct);
