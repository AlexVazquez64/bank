import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';


import { Link } from 'react-router-dom';
import { bankDepositMoneyAddNew, bankDepositMoneyUpdate } from '../../actions/depositMoneyAction';

const WithdrawMoney = () => {

  const [ amount, setAmount ] = useState();
  const dispatch = useDispatch();
  const {
    events,
  } = useSelector( state => state.bankReducer );

  console.log(events)

  const transactionID = events.map(item => item.transactionID).pop();

  const user = events.map(item => item.user);

  const amount1 = user.map(item => item.amount).pop();

  console.log(amount1)

  const handleInputChange = ({target}) => {

    setAmount({
      ...amount,
      amount: parseInt(target.value),
      
    });

  }

  useEffect(() => {
    setAmount( amount );
  }, [ setAmount, amount ])

  const handleSubmitForm = ( e ) => {
    e.preventDefault();

    if(amount.amount < 50){
      Swal.fire(
        'Error!',
        'Tu deposito no puede ser menor a $50!',
        'error'
      )
    } else {
      dispatch( bankDepositMoneyAddNew({
        name: 'Alex',
        transactionID: parseInt(transactionID) + 1,
        type: 'Withdraw',
        amount: amount.amount,
        user: {
          name: 'Alex',
          password: '123456',
          amount: parseInt(amount1 - amount.amount)
        }
      }) );

      dispatch(bankDepositMoneyUpdate({
        user: {
          name: 'Alex',
          password: '123456',
          amount: parseInt(amount1 - amount.amount)
        }
      }))
      Swal.fire(
        'Good job!',
        'Your deposit was made correctly!',
        'success'
      )
      setAmount('');
    }
      
  }

  return (
    <div className="__bank-screen-main">
      

      <div className="container-fluid">
        <div className="">
          <h1 className="pt-5 pb-5 text-center">Withdraw Money</h1>
          <div className="__bankScreen__table">


            <form
              onSubmit={ handleSubmitForm }
            >
              <div className="mb-3">
                <label
                  htmlFor="amount"
                  className="form-label"
                >
                  <h5>Enter the amount</h5>
                </label>

                <input
                  className="form-control"
                  id="amount"
                  min="50"
                  required
                  placeholder="50"
                  type="number"
                  onChange={ handleInputChange }
                >
                </input>
              </div>

              <Link to="/">
                <button className="btn btn-secondary">
                  <h4>back</h4>
                </button>
              </Link>

              <button
                className="btn btn-primary mx-5"
                type="submit"
              >
                <h4>Withdraw!</h4>
              </button>
            </form>
            
          </div>

          
          


        </div>
      </div>

    </div>
  )
}

export default WithdrawMoney
