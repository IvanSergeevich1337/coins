import React, { FC } from 'react';
import styles from './style.module.css';
import { Button, TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';

const LoginPage: FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { navigate, register, errors } = props;
  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Авторизация
      </Typography>
      <Typography variant="body1" marginBottom={2} fontFamily="Poppins" textAlign="center">
        Введите ваш логин и пароль
      </Typography>
      <TextField
        error={!!errors.email}
        helperText={errors.email ? `${errors.email.message}` : ''}
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        {...register('email', {
          required: 'Это поле обязательно для заполнения',
          pattern:
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        })}
      />
      <TextField
        error={!!errors.password}
        helperText={errors.password ? `${errors.password.message}` : ''}
        fullWidth={true}
        type="password"
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
        {...register('password', {
          required: 'Это поле обязательно для заполнения',
          minLength: 6,
        })}
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
