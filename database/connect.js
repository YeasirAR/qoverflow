import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://yeasir:yeasir@cluster0.ujeivtm.mongodb.net/qverflow?retryWrites=true&w=majority"

async function connect() {
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = { connect };

