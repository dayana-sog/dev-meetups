
import Event from '../models/Event';

class DashboardController{

  async show(req,res) {
    try {
      const { id } = req.params;

      const event  = await Event.findById(id);

      if(event) {
        return res.json(event);
      }
    } catch (error) {
      return res.status(400).json({ message: `Sorry, event does not exist.`});
    }
  };

  async index(req,res) {
    const { category } = req.query;

    try {
      if (category) {
        const events  = await Event.find({category});


        return res.json(events);

      } else {
        const events  = await Event.find({});

        return res.json(events);
      }
    } catch (error) {
      return res.status(400).json({ message: "Sorry. We don't have any events yet."});
    }
  };
};

export default new DashboardController();
