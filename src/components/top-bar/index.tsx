import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { useAppSelector } from '../utils/hooks';
import SearchIcon from '@mui/icons-material/Search';
import { ColorModeContext } from '../theme';
import { useStyles } from './styles';
import { RootState } from '../../store';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { LightMode, DarkMode, MenuOutlined, NotificationsNone } from '@mui/icons-material';
import FlexBetween from '../flex-between';

const TopBarComponent = (props: any) => {
  const { isOpen, setIsOpen } = props;
  const user = useAppSelector((state: RootState) => state.auth.user);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <FlexBetween>
          <MenuOutlined className={classes.menuIcon} onClick={()=> setIsOpen(!isOpen)} />
          <Typography variant="h3">Welcome Alex</Typography>
        </FlexBetween>
        <Grid></Grid>
        <Box display="flex">
          <Grid onClick={colorMode.toggleColorMode} className={classes.iconBlock}>
            <IconButton className={classes.themeIcon}>
              {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
            </IconButton>
            <IconButton>
              <NotificationsNone />
            </IconButton>
          </Grid>
          <Grid className={classes.searchBlock}>
            <IconButton className={classes.searchIcon}>
              <SearchIcon />
            </IconButton>
            <InputBase className={classes.searchInput} placeholder="Поиск" />
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBarComponent;
