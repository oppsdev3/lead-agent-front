
const mongoose = require('mongoose');

const DB = 'mongodb+srv://Siddhi:leejordanMongo@cluster0.yhvid.mongodb.net/leadmanagementAgent?retryWrites=true&w=majority'


mongoose.connect(DB).then(() => {
    console.log(`connection was successful`);
}).catch((err) => console.log(`error in connection`));








