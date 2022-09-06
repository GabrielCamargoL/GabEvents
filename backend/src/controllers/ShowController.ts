import { Request, Response } from 'express';
import Show from '../models/Show';
import { createShow, deleteShow, findShow } from '../services/ShowService';

class ShowController {
  async index(req: Request, res: Response) {
    return res.json(await Show.find());
  }

  async show(req: Request, res: Response) {
    const findResponse = await findShow(req, res)
    return res.status(findResponse.status).json(findResponse.message);
  }

  async store(req: Request, res: Response) {
    const createResponse = await createShow(req, res);
    return res.status(createResponse.status).json(createResponse.message)
  }

  async delete(req: Request, res: Response) {
    const deleteResponse = await deleteShow(req, res);
    return res.status(deleteResponse.status).json(deleteResponse.message);
  }
}

export default new ShowController();