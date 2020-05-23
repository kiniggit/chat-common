import { User } from './user';

export class Message {
  constructor(
    public user: User,
    public sender: string,
    public recipient: string,
    public room: string,
    public content: string,
  ) { }
}