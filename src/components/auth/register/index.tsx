import { Button, TextField, Typography } from '@mui/material';
import React, { FC } from 'react';
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
  const { setEmail, setPassword, setUserName, setRepeatPassword, setFirstName, navigate } = props;

  return (
    <>
      <Typography variant="h2" fontFamily="Poppins" textAlign="center">
        Регистрация
      </Typography>
      <Typography variant="body1" marginBottom={2} fontFamily="Poppins" textAlign="center">
        Введите данные для регистрации
      </Typography>
      <TextField
        fullWidth={true}
        margin="normal"
        label="Имя"
        variant="outlined"
        placeholder="Введите ваше Имя"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Username"
        variant="outlined"
        placeholder="Введите ваш username"
        onChange={(e) => setUserName(e.target.value)}
      />
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
      <TextField
        fullWidth={true}
        type="password"
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Повторите ваш пароль"
        onChange={(e) => setRepeatPassword(e.target.value)}
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
