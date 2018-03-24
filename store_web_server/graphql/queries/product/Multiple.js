import {
	GraphQLList
} from 'graphql'

import { productType } from '../../types/ProductTypes'
import productModel from '../../../models/ProductModels'

export default {
	type: new GraphQLList(productType),
	resolve() {
		const products = productModel.find().exec()
		if (!products) {
			throw new Error('Error getting products')
		}
		return products
	}
}