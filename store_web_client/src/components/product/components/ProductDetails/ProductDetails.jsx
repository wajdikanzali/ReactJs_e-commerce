import React from 'react';
import { Modal, Header, Icon, Image, Label } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

function ProductDetails(props) {
  const {
    product,
  } = props;
  return (
    <Modal
      trigger={<Icon
        name="eye"
        color="blue"
        title="More Details..."
        circular
      />}
    >
      <Modal.Header>{product.name}</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src={product.image} />
        <Modal.Description>
          <Header>Description</Header>
          <p>{product.description}</p>
          <Label
            as="price"
            size="medium"
            color="red"
            tag
          >$ {product.price}
          </Label>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.object,
};

export default ProductDetails;
