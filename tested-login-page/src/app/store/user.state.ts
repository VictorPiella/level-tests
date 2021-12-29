import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserStateModel } from './user.model';
import { AddUser, RemoveUser } from './user.actions';

@State({
  name: 'user',
  defaults: {
    user: []
  }
})
export class UserState {
  @Selector()
  static getUser(state: UserStateModel) { return state.user; }

  @Action(AddUser)
  add({ getState, patchState }: StateContext<UserStateModel>, { payload }: AddUser) {
    const state = getState();
    patchState({
      user: [...state.user, payload]
    });
  }

  @Action(RemoveUser)
  remove({ getState, patchState }: StateContext<UserStateModel>, { payload }: RemoveUser) {
    patchState({
      user: getState().user.filter(user => user.email !== payload)
    });
  }
}