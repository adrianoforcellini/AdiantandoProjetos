// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  Senha: '',
  Authenticated: false,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'CHANGE_EMAIL':
    return { ...state, email: action.email };
  case 'CHANGE_SENHA':
    return { ...state, Senha: action.Senha };
  case 'AUTHENTICATED':
    return { ...state, Authenticated: true };
  case 'LOGOUT':
    return { ...state, Authenticated: false };

  default:
    return state;
  }
}
