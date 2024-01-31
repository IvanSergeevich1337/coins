import { Button, TextField, Typography } from '@mui/material';
import React, { FC } from 'react';
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
  const { navigate, errors, register } = props;

  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Регистрация
      </Typography>
      <Typography variant="body1" marginBottom={2} fontFamily="Poppins" textAlign="center">
        Введите данные для регистрации
      </Typography>
      <TextField
        error={!!errors.name}
        helperText={errors.name ? `${errors.name.message}` : ''}
        fullWidth={true}
        margin="normal"
        label="Имя"
        variant="outlined"
        placeholder="Введите ваше Имя"
        {...register('name')}
      />
      <TextField
        error={!!errors.username}
        helperText={errors.username ? `${errors.username.message}` : ''}
        fullWidth={true}
        margin="normal"
        label="Username"
        variant="outlined"
        placeholder="Введите ваш username"
        {...register('username')}
      />
      <TextField
        error={!!errors.email}
        helperText={errors.email ? `${errors.email.message}` : ''}
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        {...register('email')}
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
        {...register('password')}
      />
      <TextField
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword ? `${errors.confirmPassword.message}` : ''}
        fullWidth={true}
        type="password"
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Повторите ваш пароль"
        {...register('confirmPassword')}
      />
      <Button
        sx={{ fontFamily: 'Poppins', marginTop: 2, width: '60%', marginBottom: 2 }}
        variant="contained"
        type="submit"
      >
        Регистрация
      </Button>
      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
        У вас уже есть аккаунт?
        <span onClick={() => navigate('/login')} className="incitingText">
          Авторизация
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;
