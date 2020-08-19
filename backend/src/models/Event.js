import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  title: String,
  creator: String,
  description: String,
  price: Number,
  thumbnail: String,
  category: String,
  date: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  toJSON: {
    virtuals: true
  }
});

EventSchema.virtual('thumbnail_url').get(function () {
    return `http://localhost:3333/files/${this.thumbnail}`
});

export default mongoose.model('Event', EventSchema);
