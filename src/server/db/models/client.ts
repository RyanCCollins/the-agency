import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  url: {
    type: String,
  },
});

export default mongoose.model('Client', ClientSchema);
