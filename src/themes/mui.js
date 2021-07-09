import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: 'rgb(238, 238, 238)',
      },
    },
    MuiButton: {
      textSizeLarge: {
        color: 'white',
        backgroundColor: '#212225',
      },
    },
    MuiTypography: {
      colorTextSecondary: {
        color: 'white',
      },
    },
    MuiIconButton: {
      xs: {
        color: 'black',
      },
    },
    MuiStepLabel: {
      active: {
        color: 'white',
      },
      label: {
        color: 'white!important',
      },
      alternativeLabel: {
        color: 'white!important',
      },
      completed: {
        color: 'white!important',
      },
    },
    MuiStepper: {
      alternativeLabel: {
        backgroundColor: 'black',
      },
      completed: {
        color: 'white',
      },
    }
  },
});


export default theme;



