const mongoose = require('mongoose');

exports.mongoDbConnect = () => {
    main().catch(err => console.log(err));

    async function main() {
     await mongoose.connect(process.env.MONGO_DB_URI);
     }
}
