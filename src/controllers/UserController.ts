
import { Request, Response } from 'express'
import User from '../models/User'

class UserController {
  async select (_: Request, res: Response): Promise<Response> {
    const response = await User.findAll();

    return res.json(response);
  }

  async insert (req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    const { surname } = req.body;


    const response = await User.create({ name, surname });

    return res.json(response);
  }
}

export default new UserController();