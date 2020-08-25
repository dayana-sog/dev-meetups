import Event from '../models/Event';
import User from '../models/User';

class EventController {
  async store(req, res) {
    try {
      const { title, description, price, category, date } = req.body;
      const { user_id } = req.headers;
      const { filename } = req.file;

      const user = await User.findById(user_id);

      if(!user) {
        return res.json({ message: 'User does not exists.' });
      }

      const event = await Event.create({
        title,
        description,
        date,
        price,
        thumbnail: filename,
        user: user_id,
        category
      });

      return res.json(event);
    } catch (error) {
      return res.json({ message: `Error while registering a new event ${error}` });
    }
  };

  async delete(req, res) {
    try {
      const { id } = req.params;

      await Event.findByIdAndDelete(id);

      return res.json({ message: `The event ${id} was deleted with success.` });
    } catch (error) {
      return res.status(400).json({ message: "Sorry. We don't have any event with the ID."});
    }
  };
}

export default new EventController();
