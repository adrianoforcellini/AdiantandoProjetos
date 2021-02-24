// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  Despesas: 0,
  Adição: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_DESPESA':
    return { ...state, Despesas: action.email };
  default:
    return state;
  }
}
