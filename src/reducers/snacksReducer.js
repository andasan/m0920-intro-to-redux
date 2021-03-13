import { UPDATE_SNACKS_QUANTITY } from '../actions/snackDeptUpdate'

const initState = {
  snacksData: [
    { food: 'Doritos', quantity: 10 },
    { food: 'Jagabee', quantity: 6 },
    { food: 'Haribo', quantity: 22 },
    { food: 'Calbee', quantity: 12 },
    { food: 'M&Ms', quantity: 2 },
  ],
}

const snacksReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case UPDATE_SNACKS_QUANTITY:
      const newSnackState = [...state.snacksData]

      if (payload.operator === '+') {
        newSnackState[payload.index].quantity++
      } else if (payload.operator === '-') {
        newSnackState[payload.index].quantity--
      }
      
      return {
        ...state,
        snacksData: newSnackState,
      }
    default:
      return state
  }
}

export default snacksReducer
