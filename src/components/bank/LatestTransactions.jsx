import React from 'react';

import { Link } from 'react-router-dom';

import Table from '../../helpers/Table';
import { bankTransactionColumns } from '../../helpers/bankTransactionsColumns';

import '../../styles/public/styles.css';
import { useSelector } from 'react-redux';

const LatestTransactions = () => {


  const {
    events,
  } = useSelector( state => state.bankReducer );


  return (
    <div className="__bank-screen-main">
      

      <div className="container-fluid">
        <div className="">
          <h1 className="pt-5 pb-5 text-center">Latest Transactions</h1>
          <div className="__bankScreen__table">
            <Table
              className="m-4"
              columnas={ bankTransactionColumns }
              filas={ events }
            />

            
            <Link className="__bank-scree__links" to="/">
              <button className="btn btn-primary">
                <h4>back</h4>
              </button>
            </Link>
            
          </div>
          


        </div>
      </div>

    </div>
  )
}

export default LatestTransactions
