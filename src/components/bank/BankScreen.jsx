import React from 'react';
import { Link } from 'react-router-dom';



import '../../styles/public/styles.css';


const BankScreen = () => {
  return (
    <div className="__bank-screen-main">

      <div className="container-fluid">
        <div className="text-center">
          <h1 className="pt-5 pb-5">Welcome</h1>
        </div>

        <div className="text-center">
          <h2 className="pt-5 pb-5">What do you want to do?</h2>
        </div>

        <div className="row __bankScreen__table">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <Link className="__bank-scree__links" to="/checkBalance">
              <div
                className="__bank-screen-option p-5 m-4 text-center text-white rounded-3"
                type="button"
              >
                <h4>CHECK BALANCE</h4>
              </div>
            </Link>
          </div>

          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <Link className="__bank-scree__links" to="/latestTransactions">
              <div
                className="__bank-screen-option p-5 m-4 text-center text-white rounded-3"
                type="button"
              >
                <h4>LATEST TRANSACTIONS</h4>
              </div>
            </Link>
          </div>

          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <Link className="__bank-scree__links" to="/depositMoney">
              <div
                className="__bank-screen-option p-5 m-4 text-center text-white rounded-3"
                type="button"
              >
                <h4>DEPOSIT MONEY</h4>
              </div>
            </Link>
          </div>

          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <Link className="__bank-scree__links" to="/withdrawMoney">
              <div
                className="__bank-screen-option p-5 m-4 text-center text-white rounded-3"
                type="button"
              >
                <h4>WITHDRAW MONEY</h4>
              </div>
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}

export default BankScreen