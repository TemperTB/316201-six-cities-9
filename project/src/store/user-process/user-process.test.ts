import { AuthorizationStatus } from '../../const';
import { requireAuthorization, userProcess } from './user-process';

describe('Reducer: userProcess', () => {
  it('Без каких-либо параметров - вернет первоначальное состояние', () => {
    expect(userProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown});
  });

  it('requireAuthorization - поменяет state.authorizationStatus', () => {

    const stateUnknown = {authorizationStatus: AuthorizationStatus.Unknown};

    expect(userProcess.reducer(stateUnknown, requireAuthorization(AuthorizationStatus.Auth)))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth});
    expect(userProcess.reducer(stateUnknown, requireAuthorization(AuthorizationStatus.NoAuth)))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth});


    const stateAuth = {authorizationStatus: AuthorizationStatus.Auth};

    expect(userProcess.reducer(stateAuth, requireAuthorization(AuthorizationStatus.Auth)))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth});
    expect(userProcess.reducer(stateAuth, requireAuthorization(AuthorizationStatus.NoAuth)))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth});

    const stateNoAuth = {authorizationStatus: AuthorizationStatus.NoAuth};

    expect(userProcess.reducer(stateNoAuth, requireAuthorization(AuthorizationStatus.Auth)))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth});
    expect(userProcess.reducer(stateNoAuth, requireAuthorization(AuthorizationStatus.NoAuth)))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth});
  });

});
