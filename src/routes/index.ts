import { Router } from 'express';

import User from '../controllers/UserController';

const routes = Router()

routes.route('/user')
  .get(User.select)
  .post(User.insert)

export default routes