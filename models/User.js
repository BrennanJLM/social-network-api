const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    thoughts: {
        _id: [Thought]
    },
    friends: {
        _id: [Friend]
    },
})

