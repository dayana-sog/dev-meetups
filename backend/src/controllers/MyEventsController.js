import Event from '../models/Event';

class MyEventsController {
  async getEventsByUserId(req,res) {

    try {
      const { user_id } = req.headers;

      const events = await Event.find({ user: user_id });

      if(events) {
        return res.json(events);
      }
    } catch (error) {
      return res.status(400).json({ message: 'Sorry, we do not have event from this user.'});
    }
  };
}

export default new MyEventsController();
