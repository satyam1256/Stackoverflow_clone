import React from 'react';
import './App.css';
import Header from './components/Header/Header';

import {
  BrowserRouter as Router, Switch , Route , Redirect 
} from 'react-router-dom';

import StackOverflow from './components/StackOverflow';
import Question from './components/Add_question/Question';
import ViewQuestion from './components/ViewQuestion';
import Auth from './components/Auth';
import { useSelector , useDispatch} from 'react-redux';
import { auth } from './Firebase';
import { useEffect } from "react";
import { login , logout , selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
      // console.log(authUser);
    });
  }, [dispatch]);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          {/* now we have to put that if it is signed in user then we will direct them to stackoverflow path welse we will put the auth page */}
          <Route exact path={'/auth'} component={Auth } />
          <PrivateRoute exact path='/' component={StackOverflow} />
          <PrivateRoute exact path='/add-question' component={Question} />
          <PrivateRoute exact path='/view-question' component={ViewQuestion} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
