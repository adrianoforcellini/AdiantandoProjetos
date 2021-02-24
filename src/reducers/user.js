// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: 'adriano@email.com',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'CHANGE_EMAIL':
    return { ...state, email: action.email };
  default:
    return state;
  }
}
