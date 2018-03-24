import {
	GraphQLNonNull,
} from 'graphql';

import { productType, productInputType } from '../../types/ProductTypes';
import productModel from '../../../models/ProductModels';

export default {
	type: productType,
	args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(productInputType)
		}
	},
	resolve(root, params) {
		const pModel = new productModel(params.data);
		const newproduct = pModel.save();
		if (!newproduct) {
			throw new Error('Error adding product');
		}
		return newproduct
	}
}