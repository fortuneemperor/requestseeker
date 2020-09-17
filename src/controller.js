const { validate } = require('@arcanix/validate');

class Controller {
  constructor({ socketService }) {
    this.socketService = validate(socketService, 'socketService is required');
  }

  async hook(req, res, next) {
    try {
      return res.sendStatus(204);
    } catch (error) {
      return next(error);
    }
  }
}

export { Controller };

