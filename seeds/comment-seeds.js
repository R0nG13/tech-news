const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Cool!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "who cares"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "comment!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Update please"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Stupid"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "It's OK"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "good luck"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Really?"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
