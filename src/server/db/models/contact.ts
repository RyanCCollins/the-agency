import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    index: { unique: false },
  },
  name: String,
  message: String,
});

export default mongoose.model('Contact', ContactSchema);
