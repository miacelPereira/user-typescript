import { Router } from 'express';

import User from '../controllers/UserController';

const routes = Router();

routes.route('/user')
  .get(User.select)
  .post(User.insert)
  .put(User.update)
  .delete(User.delete)

routes.route('/user/:id')
  .get(User.details)

export default routes