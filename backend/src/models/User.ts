import mongoose, { model, Model, Schema } from "mongoose";
import bcrypt from 'bcryptjs';

import { IUserDocument } from '../interfaces/IUserDocument';

export interface IUser extends IUserDocument {
  comparePassword(password: string): boolean;
}

export interface IUserModel extends Model<IUser> {
  hashPassword(password: string): string;
}

const UserSchema: Schema = new mongoose.Schema<IUserDocument>({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    requered: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.method('comparePassword', function (password: string): boolean {
  if (bcrypt.compareSync(password, this.password)) return true;
  return false;
});

UserSchema.static('hashPassword', (password: string): string => {
  return bcrypt.hashSync(password);
});

UserSchema.pre<IUserDocument>("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
})

export const User: IUserModel = model<IUser, IUserModel>('User', UserSchema);

export default User;