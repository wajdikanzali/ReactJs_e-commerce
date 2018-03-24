import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLID
} from 'graphql';

export const productType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        price: {
            type: GraphQLFloat
        },
        qteStock: {
            type: GraphQLInt
        },
        warranty: {
            type: GraphQLInt
        },
        image: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
    })
})


export const productInputType = new GraphQLInputObjectType({
    name: 'ProductInput',
    fields: () => ({
        _id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        price: {
            type: GraphQLFloat
        },
        qteStock: {
            type: GraphQLInt
        },
        warranty: {
            type: GraphQLInt
        },
        image: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        }
    })
})
