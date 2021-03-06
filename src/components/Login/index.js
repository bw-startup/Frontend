import React, {useState, useContext, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import axios from 'axios';
import GlobalContext from '../../utils/context';
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from '../../utils/constants';
import Loader from '../shared/Loader';
import ErrorMessage from '../shared/ErrorMessage';
import FormFooterLink from '../shared/FormFooterLink';
import * as S from '../../styles';

export default function Login(props) {
  const {state, dispatch} = useContext(GlobalContext);
  const [cookie, setCookie] = useCookies(['StartupTrajectoryPredictor']);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const checkForCookie = () => {
      if (cookie['StartupTrajectoryPredictor']) {
        dispatch({type: LOGIN_START});
        setTimeout(() => {
          dispatch({type: LOGIN_SUCCESS});
          props.history.push('/predictor');
        }, 2000);
      }
    };

    checkForCookie();
  }, []);

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    dispatch({type: LOGIN_START});
    axios
      .post('https://startups7.herokuapp.com/api/auth/login', inputs)
      .then((response) => {
        setTimeout(() => {
          dispatch({type: LOGIN_SUCCESS});
          setCookie('StartupTrajectoryPredictor', response.data.token, {
            path: '/',
          });
          props.history.push('/predictor');
        });
      })
      .catch((err) => {
        dispatch({type: LOGIN_FAILURE, payload: err.response.data.message});
      });
  };

  return state.isLoggingIn ? (
    <Loader text='Logging In...' />
  ) : (
    <S.Login>
      <S.BodyBackgroundVertical primary />
      <S.LoginImage>
        <S.LoginImageImg src='/images/investing-login.svg' alt='Investing' />
      </S.LoginImage>

      <S.LoginForm>
        <h2>Welcome back!</h2>
        <p>Sign in to continue using Predict a Venture!</p>
        <p style={{marginTop: '22px'}}>Please use these credentials:</p>
        <p>email: test@test.com</p>
        <p>password: test</p>
        <form onSubmit={handleLoginSubmit}>
          <S.LoginField>
            <label htmlFor='email'>Email:</label>
            <input
              required
              type='email'
              name='email'
              onChange={handleInputChange}
              value={inputs.email}
            />
          </S.LoginField>
          <S.LoginField>
            <label htmlFor='password'>Password:</label>
            <input
              required
              type='password'
              name='password'
              onChange={handleInputChange}
              value={inputs.password}
            />
          </S.LoginField>
          {state.errorMessage && <ErrorMessage message={state.errorMessage} />}
          <S.LoginButton type='submit' data-testid='loginButton'>
            Log In
          </S.LoginButton>
          <FormFooterLink
            primary
            text="Don't have an account?"
            to='/register'
            linkText='Register Here!'
          />
        </form>
      </S.LoginForm>
    </S.Login>
  );
}
