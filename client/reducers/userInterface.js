import { fromJS }   from 'immutable';
import Actions      from '../actions/index';
const  { Types }    = Actions.UserInterface;
import API          from '../api/index';
const  UIStates     = API.Const.UserInterface;

const initialState = fromJS({
  appState: UIStates.UI_APP_STATE_INIT,
});

export default function userInterface(state = initialState, action = {}) {
  switch (action.type) {

    case Types.UI_LOGIN_TRY:
      return state;

    case Types.UI_LOGIN_FAIL:
      return state;

    case Types.UI_LOGOUT:
      return initialState.set('appState', UIStates.UI_APP_STATE_LOGGED_OUT);

    case Types.UI_SET_APP_STATE:
      return state.set('appState', action.appState);

    default:
      return state;
  }
}
