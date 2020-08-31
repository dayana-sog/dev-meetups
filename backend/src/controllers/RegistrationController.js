import Registration from '../models/Registration';

class RegistrationController {
  async store(req, res) {
    const { user_id } = req.headers;
    const { eventId } = req.params;
    const { date } = req.body;

    console.log('dentro de registration', user_id );

    const registration = await Registration.create({
      user: user_id,
      event: eventId,
      date,
    });

    await registration
      .populate('event')
      .populate('user', '-password') //'-password' => faz com que não mostre
      .execPopulate();


    return res.json(registration);
  };

  async show(req, res) {
    const { registration_id } = req.params;

    try {
      const registration = await Registration.findById(registration_id);

      await registration
      .populate('event')
      .populate('user', '-password')
      .execPopulate();

      return res.json({ message: 'Soliciteted de registration with de creator. Wait for your confimation.'});
    } catch (error) {
      return res.json({ message: `Error registration Id does not exist. ${error}` });
    }
  };
};

export default new RegistrationController();
