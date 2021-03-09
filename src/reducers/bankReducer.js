import {
  types
} from '../types/types';
// {
//     id: 'askdjhaksdjas',
//     title: 'Cumpleaños del jefe',
//     start: moment().toDate(),
//     end: moment().add( 2, 'hours' ).toDate(),
//     notes: 'Comprar el pastel',
//     user: {
//         _id: '123',
//         name: 'Fernando'
//     }
// }

const initialState = {
  events: [
    {
      name: 'Alex',
      transactionID: 1,
      type: 'Deposit',
      amount: 500000,
      user: {
        name: 'Alex',
        password: '123456',
        amount: 1000000
      }
    },
  ],
};

export const bankReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.bankDepositMoneyAddNew:
      return {
        ...state,
        events: [
          ...state.events,
          action.payload
        ]
      }

    case types.bankDepositMoneyUpdate:
      return {
        ...state,
        events: state.events.map(
          e => (e.transactionID === action.payload.transactionID) ? action.payload : e
        )
      }

      // case types.eventLoaded:
      //   return {
      //     ...state,
      //     events: [...action.payload]
      //   }

        default:
          return state;
  }


}