import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql'

import { productType, productInputType } from '../../types/ProductTypes'
import ProductModel from '../../../models/ProductModels'

export default {
	type: productType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		},
		data: {
			name: 'data',
			type: new GraphQLNonNull(productInputType)
		}
	},
	resolve(root, params) {
		return ProductModel.findByIdAndUpdate(
			params.id,
			{ $set: { ...params.data } },
			{ new: true }
		)
		.catch(err => new Error('Couldn\'t Update Product data, ', err));
	}
}