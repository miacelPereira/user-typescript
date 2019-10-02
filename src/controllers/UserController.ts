
import { Request, Response } from 'express'
import User from '../models/User'

class UserController {
  async select (_: Request, res: Response): Promise<Response> {
    const response = await User.findAll();
    return res.json(response);
  }

  async insert (req: Request, res: Response): Promise<Response> {
    const { name, surname } = req.body
    const response = await User.create({name, surname});
    return res.json(response);
  }

  async update (req: Request, res: Response): Promise<Response> {
    const { name, surname, id } = req.body
    const response = await User.update({name, surname}, {where: {id}});
    return res.json(response);
  }

  async delete (req: Request, res: Response): Promise<Response> {
    const { id } = req.body
    const response = await User.destroy({where: {id}});
    return res.json(response);
  }

  async details (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const response = await User.findAll({where : {id}});
    return res.json(response);
  }
  
}

export default new UserController();