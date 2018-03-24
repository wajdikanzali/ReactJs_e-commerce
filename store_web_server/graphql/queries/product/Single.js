import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import { productType } from '../../types/ProductTypes'
import productModel from '../../../models/ProductModels'

export default {
	type: productType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		return productModel.findById(params.id).exec();
	}
}