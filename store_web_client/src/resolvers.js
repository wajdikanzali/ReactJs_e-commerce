import gql from 'graphql-tag';
import client from './apollo';
export default {
  Mutation: {
    addProduct: (_, { product }, { cache }) => {
      const query = gql`
          query Products {
            basketList @client {
              product{
                _id
              }
            }
          }
        `;
      const previous = client.readQuery({ query });
      const newProduct = {
        id: previous.basketList.length,
        product,
        generated: false,
        __typename: 'ShoppingList',
      };
      const data = {
        basketList: previous.basketList.concat(newProduct),
      };
      data.length = data.basketList.length;
      cache.writeData({ data });
      return newProduct;
    },

    deleteProduct: (_, { product }, { cache }) => {
      const query = gql`
          query Products {
            basketList @client {
              product{
                _id
              }
            }
          }
        `;
      const previous = client.readQuery({ query });
      const data = {
        basketList: previous.basketList.filter((item) => item.product._id !== product._id), // eslint-disable-line
      };
      cache.writeData({ data });
      return product;
    },
  },
};
