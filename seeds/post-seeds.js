const { Post } = require('../models');

const postData = [
    {
        title: "New Node!",
        post_content: "super cool",
        user_id: 1
    },
    {
        title: "Twiter Overload!",
        post_content: "too manny 144 characters",
        user_id: 2
    },
    {
        title: "Bitcoin is up!",
        post_content: "It passed $15000",
        user_id: 4

    },
    {
        title: "new tech talk!",
        post_content: "so cool check it out",
        user_id: 3
    },
    {
        title: "AMD releases new processor",
        post_content: "you have got to see it to believe it",
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;