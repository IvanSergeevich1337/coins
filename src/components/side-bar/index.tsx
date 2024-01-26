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
import {
  HomeOutlined,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  AutoGraphOutlined,
  MenuBookOutlined,
  SettingsOutlined,
  LogoutOutlined,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from '../flex-between';

const SideBarComponent = (props: any) => {
  const [active, setActive] = useState('');
  const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props;
  const classes = useStyles();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

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
          <Box width="100%">
            <Box>
              <FlexBetween>
                <Box display="flex" alignItems="center" gap="10px">
                  <Typography>Test</Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsOpen(!isOpen)}>
                    <ChevronLeftOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default SideBarComponent;