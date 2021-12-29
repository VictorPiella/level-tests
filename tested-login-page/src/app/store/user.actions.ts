import { User } from './user.model';
export class AddUser {
  static readonly type = '[USER] Add';
  constructor( public payload: User ) {}
}
export class RemoveUser {
  static readonly type = '[USER] Remove';
  constructor( public payload: string ) {}
}