import { Request, Response } from "express";
import { User } from "../models/User";

export async function createUser(req: Request, res: Response) {
  const { username, email, password } = req.body

  const userExists = await User.find({ email })
  console.log(userExists);

  // if (!userExists) {
  const userCreated = await User.create(req.body);

  userCreated.password = undefined;

  return {
    "message": userCreated,
    "status": 201
  };
  // } else {
  //   return {
  //     "message": {
  //       "error": "Este e-mail já foi usado!",
  //     },
  //     "status": 409
  //   };
  // }
}

export async function findUser(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    return {
      "message": user,
      "status": 200
    };
  }
  catch (err) {
    return {
      "message": {
        "error": "usuário não encontrado"
      },
      "status": 404
    }
  }
}

export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    return {
      "message": "usuário deletado com sucesso",
      "status": 200
    };
  }
  catch (err) {
    return {
      "message": {
        "error": "usuário não encontrado"
      },
      "status": 404
    }
  }
}