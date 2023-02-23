const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, {userId}) => {
            return User.findOne({_id: userId})
        }
    },

    Mutation: {
        addUser: async (parent, {username, password, email}) => {
            return User.create({username, email, password});
        },
        loginUser: async (parent, {username, password, email}) => {
            
        },
        saveBook: async (parent, {}) => {

        },
        removeBook: async (parent, {}) => {

        }
    }
}