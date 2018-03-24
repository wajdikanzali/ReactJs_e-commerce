import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  qteStock: {
    type: Number,
    required: true,
  },
  warranty: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true
  }
}, { collection: 'product', timestamps: true });


export default mongoose.model('product', productSchema);