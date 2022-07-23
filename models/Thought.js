const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema({
    thought: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    userName: {
        type: String,
        required: true,
    },
    reactions: [ReactionSchema]
});

const ReactionSchema = new Schema ({
    reactionId: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Reaction'
        }
    ],
      reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    userName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
    },
    {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
)
const Thought = model('Thought', ThoughtSchema);

module.export = Thought;
