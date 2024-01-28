import {
  HomeOutlined,
  AutoGraphOutlined,
  MenuBookOutlined,
  SettingsOutlined,
  LogoutOutlined,
  AccountCircleOutlined
} from '@mui/icons-material';
import React from 'react';

export const navMenu = [
  {
    name: 'Главная',
    icon: <HomeOutlined />,
    path: '/',
    id:1
  },
  {
    name: 'Избранное',
    icon: <AutoGraphOutlined />,
    path: '/watchlist',
    id:2
  },
  {
    name: 'Новости',
    icon: <MenuBookOutlined />,
    path: '/news',
    id:3
  },
  {
    name: 'Настройки',
    icon: <SettingsOutlined />,
    path: '/settings',
    id:4
  },
];

export const navMenuUser = [
  {
    name: 'User',
    icon: <AccountCircleOutlined />,
    path: '/',
    id:1
  },
  {
    name: 'Logout',
    icon: <LogoutOutlined/>,
    path: '/',
    id:2
  }
]