import gql from 'graphql-tag';

const ALL_PRODUCTS_QUERY = gql`
query{
  Products {
    _id
    name
    price
    qteStock
    warranty
    image
    description
  }
}
`;

export default ALL_PRODUCTS_QUERY;
