import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../theme';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    searchIcon: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    iconBlock: {
      paddingRight: '37px',
      borderRight: `1px solid ${colors.borderColor}`,
      paddingTop:'10px'
    },
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 32px',
      backgroundColor: colors.primary.DEFAULT,
      maxHeight:'95px',
      borderBottom:`1px solid ${colors.borderColor}`
    },
    themeIcon: {
      marginRight: '45px',
    },
    searchBlock: {
      display: 'flex',
      borderRadius: '8px',
      marginLeft: '28px',
      backgroundColor: `${colors.primary[600]}`
    },
    searchInput: {
      padding: '12px 18px',
    },
  };
});
