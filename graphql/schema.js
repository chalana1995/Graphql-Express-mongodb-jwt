const { GraphQLSchema, GraphQLObjectType } = require('graphql')


// import queries path
const { } = require('./queries')

// import mutation path
const { } = require('./mutation');

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'Quaries',
    fields: {}
})


const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    description: 'Mutations',
    fields: {}
})

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
}) 