import { User } from './user';
import { MessageState } from './message_state';
export class Message {
  constructor(
    public uuid: string,
    public user: User,
    public sender: string,
    public recipient: string,
    public room: string,
    public content: string,
    public state: MessageState,
  ) { }
}