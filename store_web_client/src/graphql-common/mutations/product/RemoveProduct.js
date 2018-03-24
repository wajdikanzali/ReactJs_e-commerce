import gql from 'graphql-tag';

const REMOVE_PRODUCT_MUTATION = gql`
  mutation RemoveProduct($id: ID!) {
    removeProduct(id: $id){
      name
  }
}`;

export default REMOVE_PRODUCT_MUTATION;

