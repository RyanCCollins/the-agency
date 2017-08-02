import mongoose from 'mongoose';

// const ProjectContentSchema = new mongoose.Schema({
//   type: String,
//   data: Object,
// });

// const ProjectContent = mongoose.model('ProjectContent', ProjectContentSchema);

const ProjectSchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
  content: { type: String },
});

export default mongoose.model('Project', ProjectSchema);
