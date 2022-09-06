import { Request, Response } from "express";
import { Show } from "../models/Show";

export async function createShow(req: Request, res: Response) {
  const showCreated = await Show.create(req.body);
  return {
    "message": showCreated,
    "status": 201
  };
}

export async function findShow(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const show = await Show.findById(id);
    if (show) {
      return {
        "message": show,
        "status": 200
      };
    }

    return {
      "message": "Show Não encontrado",
      "status": 404
    }
  }
  catch (err) {
    return {
      "message": {
        "error": err
      },
      "status": 500
    }
  }
}

export async function deleteShow(req: Request, res: Response) {
  const { id } = req.params;

  const show = await Show.findByIdAndDelete(id);
  if (show) {
    return {
      "message": "Show deletado com sucesso",
      "status": 200
    };
  }
  return {
    "message": "Show não encontrado",
    "status": 404
  }
}