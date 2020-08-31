import Registration from '../models/Registration';

class ApprovalController {
  async update(req, res) {
    const { registration_id } = req.params;

    try {
      const registration = await Registration.findById(registration_id);

      registration.approved = true;

      await registration.save();

      await registration
        .populate('event')
        .populate('user', '-password')
        .execPopulate();

      return res.json({ message: 'Soliciteted de registration with de creator. Wait for your confimation.', registration});
    } catch (error) {
      return res.json({ message: `Error registration Id does not exist. ${error}` });
    }
  };

  async index(req, res) {
    const { user_id } = req.headers;

    try {
      const registersWaitingAproval = await Registration.find({user: user_id});

      console.log(user_id)

      return res.json(registersWaitingAproval);

    } catch (error) {
      console.log('erro dentro do aproval', error);
    }
  }
};

export default new ApprovalController();
