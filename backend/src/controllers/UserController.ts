import { Request, Response } from 'express';
import { User } from '../models/User';
import { createUser, deleteUser, findUser } from '../services/UserService';

class UserController {
  async index(req: Request, res: Response) {
    return res.json(await User.find());
  }

  async show(req: Request, res: Response) {
    const findResponse = await findUser(req, res)
    return res.status(findResponse.status).json(findResponse.message);
  }

  async store(req: Request, res: Response) {
    const createResponse = await createUser(req, res);
    return res.status(createResponse.status).json(createResponse.message)
  }

  async delete(req: Request, res: Response) {
    const deleteResponse = await deleteUser(req, res);
    return res.status(deleteResponse.status).json(deleteResponse.message);
  }
}

export default new UserController();