import React, { FC } from 'react';
import styles from './style.module.css';
import { Button, TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';

const LoginPage: FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { setPassword, setEmail, navigate } = props;
  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Авторизация
      </Typography>
      <Typography variant="body1" marginBottom={2} fontFamily="Poppins" textAlign="center">
        Введите ваш логин и пароль
      </Typography>
      <TextField
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth={true}
        type="password"
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        sx={{ fontFamily: 'Poppins', marginTop: 2, width: '60%', marginBottom: 2 }}
        variant="contained"
        type="submit"
      >
        Войти
      </Button>
      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
        У вас нет аккаунта?
        <span onClick={() => navigate('/register')} className="incitingText">
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;
