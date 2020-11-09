const { User } = require('../models');

const userData = [
    {
        username: "TechnoTom",
        twitter: "TechnoTom",
        github: "TechnoTom",
        email: "TT@mail.com",
        password: "p@ssword1"
    },
    {
        username: "RobotRob",
        twitter: "RobotRob",
        github: "RobotRob",
        email: "RobotRob@mail.com",
        password: "p@ssword2"
    },
    {
        username: "Compy",
        twitter: "Compy",
        github: "Compy",
        email: "Compy@mail.com",
        password: "p@ssword3"
    },
    {
        username: "hackhank",
        twitter: "hackhank",
        github: "hackhank",
        email: "hackhank@mail.com",
        password: "p@ssword4"
    },
    {
        username: "gizmodo",
        twitter: "gizmodo",
        github: "gizmodo",
        email: "gizmodomail.com",
        password: "p@ssword5"
    },
    {
        username: "bitmain",
        twitter: "bitmain",
        github: "bitmain",
        email: "bitmain@mail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;