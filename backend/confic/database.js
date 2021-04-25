const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('DB is conned'))
    .catch(err => console.error(err));