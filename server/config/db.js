const mongoose = require('mongoose');

const connectDB = async () => {
    const username = "root";
    const password = "123456val";
    const cluster = "valcluster";
    const dbname = "progfams_db";
    const URI = `mongodb+srv://${username}:${password}@${cluster}.j7zxiab.mongodb.net/${dbname}?retryWrites=true&w=majority`;
    try{
    const conn = await mongoose.connect(URI);
    console.log(`MongoBD Connected: ${conn.connection.host}`.cyan.underline.bold)
    }catch(err){
        console.log('DB ERR:', err)
        process.exit(1)
    }
}

module.exports = connectDB