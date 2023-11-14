const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://root:1234@localhost:27017/AndShop?authSource=admin');
        console.log('success');
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = {
    connect,
    JWT_SECRET: process.env.JWT_SECRET,
};