import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  content: {
    type: String,
  },
});

export default mongoose.model('Project', ProjectSchema);
