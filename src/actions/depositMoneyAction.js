// Deposit Money \--- *_* ---/

import { types } from "../types/types";


export const bankDepositMoneyAddNew = ( Event ) => ({
  type: types.bankDepositMoneyAddNew,
  payload: Event
});

export const bankDepositMoneyUpdate = ( Event ) => ({
  type: types.bankDepositMoneyUpdate,
  payload: Event
});