import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";

import BankScreen from '../components/bank/BankScreen';

import CheckBalance from '../components/bank/CheckBalance';
import LatestTransactions from '../components/bank/LatestTransactions';
import DepositMoney from '../components/bank/DepositMoney';
import WithdrawMoney from '../components/bank/WithdrawMoney';
import Navbar from '../components/ui/Navbar';

const AppRouter = () => {

  // const dispatch = useDispatch();
  // const { checking, uid } = useSelector( state => state.auth );

  // useEffect(() => {

  //   dispatch( startChecking() );
    
  // }, [ dispatch ]);

  // if ( checking ) {
  //   return (<h5>Espere...</h5>);
  // }

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            component={ BankScreen }
          />

          <Route
            path="/checkBalance"
            component={ CheckBalance }
          />

          <Route
            path="/latestTransactions"
            component={ LatestTransactions }
          />

          <Route
            path="/depositMoney"
            component={ DepositMoney }
          />

          <Route
            path="/withdrawMoney"
            component={ WithdrawMoney }
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
