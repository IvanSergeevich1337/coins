import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import {
  Box,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import { ChevronLeftOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from '../flex-between';
import { navMenu, navMenuUser } from '../../common/moks/navigate';
import Logo from '../../assets/images/sidebar/menuIcon.svg';

const SideBarComponent = (props: any) => {
  const [active, setActive] = useState('');
  const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props;
  const classes = useStyles();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const renderUserMenu = navMenuUser.map((el) => (
    <ListItem key={el.id}>
      <ListItemButton onClick={() => navigate(`${el.path}`)} className={classes.navItem}>
        <ListItemIcon>{el.icon}</ListItemIcon>
        <ListItemText>
          <Typography variant="body1">{el.name}</Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  ));

  const renderSideBarMenu = navMenu.map((item) => (
    <ListItem key={item.name}>
      <ListItemButton onClick={() => navigate(`${item.path}`)} className={classes.navItem}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText>
          <Typography variant="body1">{item.name}</Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  ));
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isOpen && (
        <Drawer
          open={isOpen}
          anchor="left"
          onClose={() => setIsOpen(false)}
          variant="persistent"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.primary.main,
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Box className={classes.navBlock}>
            <Box>
              <FlexBetween>
                <Box className={classes.brand}>
                  <img src={Logo} alt="logo" />
                  <Typography
                    variant="h1"
                    className={classes.brandTitle}
                  >
                    Test
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsOpen(!isOpen)}>
                    <ChevronLeftOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List className={classes.navList}>{renderSideBarMenu}</List>
          </Box>
          <Box width="100%">
            <List>{renderUserMenu}</List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default SideBarComponent;
