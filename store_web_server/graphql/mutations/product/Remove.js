import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql'

import { productType } from '../../types/ProductTypes'
import ProductModel from '../../../models/ProductModels'

export default {
	type: productType,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		const removedproduct = ProductModel.findByIdAndRemove(params.id).exec();
		if (!removedproduct) {
			throw new Error('Error removing product')
		}
		return removedproduct;
	}
}