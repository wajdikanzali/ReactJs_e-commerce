import gql from 'graphql-tag';

const UPDATE_PRODUCTS_MUTATION = gql`
 mutation updateProduct ($id:ID!,$name:String, $price:Float, $qteStock:Int, $warranty:Int, $image:String, $description:String ){
    updateProduct(id:$id, data:{
    name:$name,
    price:$price,
    qteStock:$qteStock,
    warranty:$warranty,
    image:$image,
    description:$description
  } ) {
    name
    price
    qteStock
    warranty
    image
    description
  }
}`;

export default UPDATE_PRODUCTS_MUTATION;
