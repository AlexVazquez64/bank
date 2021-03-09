import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import '../../styles/public/styles.css';

const CheckBalance = () => {

  const {
    events,
  } = useSelector( state => state.bankReducer );

  const user = events.map(item => item.user);
  const amount = user.map(item => item.amount).pop();


  return (
    <div className="__bank-screen-main">
      

      <div className="container-fluid">
        <div className="">
          <div className="__bankScreen__table">
            
            <h1 className="pt-5 pb-5 text-center">Amount:</h1>
              <div
                className="__bank-screen-option p-5 m-4 text-center text-white rounded-3"
              >
                <h4>
                  {
                    "$" + amount
                  }
                </h4>
              </div>
            
              <Link className="__bank-scree__links" to="/">
              <button className="btn btn-primary m-4">
                <h4>back</h4>
              </button>
            </Link>
            
          </div>
          


        </div>
      </div>

    </div>
  )
}

export default CheckBalance
