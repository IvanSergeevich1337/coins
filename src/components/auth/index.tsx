import React, { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import './style.scss';
import { Box } from '@mui/material';
import { instance } from '../utils/axios';
import { useAppDispatch } from '../utils/hooks';
import { login } from '../../store/slices/auth';
import { AppErrors } from '../../common/errors';

const AuthRootComponent: FC = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatpassword, setRepeatPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [userName, setUserName] = useState('');

  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (location.pathname === '/login') {
      try {
        const userData = {
          email,
          password,
        };
        const user = await instance.post('auth/login', userData);
        await dispatch(login(user.data));
        navigate('/')
      } catch (e) {
        return e;
      }
    } else {
      if (password === repeatpassword) {
        const userData = {
          firstName,
          userName,
          email,
          password,
        };
        const newUser = await instance.post('auth/register', userData);
        console.log(newUser);
      } else {
        throw new Error(AppErrors.PasswordDoNotMatch);
      }
    }
  };

  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
        >
          {location.pathname === '/login' ? (
            <LoginPage setEmail={setEmail} setPassword={setPassword} navigate={navigate} />
          ) : location.pathname === '/register' ? (
            <RegisterPage
              setEmail={setEmail}
              setPassword={setPassword}
              setRepeatPassword={setRepeatPassword}
              setFirstName={setFirstName}
              setUserName={setUserName}
              navigate={navigate}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;