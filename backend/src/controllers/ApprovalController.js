import Registration from '../models/Registration';
import User from '../models/User';

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

      return res.json(registration);
    } catch (error) {
      return res.json({ message: `Error registration Id does not exist. ${error}` });
    }
  };
};

export default new ApprovalController();
