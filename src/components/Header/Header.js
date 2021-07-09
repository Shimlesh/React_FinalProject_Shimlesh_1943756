import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import headerStyles from './HeaderStyle'
import muiTheme from '../../themes/mui';
import { ThemeProvider } from '@material-ui/core/styles';


const baseUrl = "https://image.tmdb.org/t/p/original/";
export default function Header() {
  const classes = headerStyles();

  return (
    <div className={classes.root}>
    <ThemeProvider theme={muiTheme}>
      <AppBar position="static">
        <Toolbar>
 
             <Typography className={classes.title} variant="h6" noWrap>
             E-CUBE MOVIES
            </Typography>
          
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </div>
    );
}
