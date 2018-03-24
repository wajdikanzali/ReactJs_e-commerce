import gql from 'graphql-tag';

const ADD_PRODUCTS_MUTATION = gql`
  mutation addPoduct ($name:String, $price:Float, $qteStock:Int, $warranty:Int, $image:String, $description:String ){
  addPoduct(data:{
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

export default ADD_PRODUCTS_MUTATION;
