
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import Header from '../Header/Header';
import muiTheme from '../../themes/mui';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const baseUrl = "https://image.tmdb.org/t/p/original/";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '60%',
    margin: '30px auto',
    backgroundColor: 'black',
    color: "white",
    '& p': {
      color: 'white',
      fontSize:18,
      fontFamily: 'arial',   
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    color: "white"
  },
  buttonContainer: {
    textAlign: 'center',
    width: '100%',
    backgroundColor: 'red',
    height: '40px'

  },

  title: {
    backgroundColor: 'red',
    borderColor: 'black',
    fontSize:29,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'arial',
  },

  paragraph: {
    borderColor: 'black',
    fontSize: '18px',
    fontWeight: '400px',
    fontFamily: 'Arial',
  },
  
  link: {
    textDecoration: 'none',
    color: 'black'
  }
}));

export default function MovieDetails(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const {params} = props.location.state;

  

  return (
    <React.Fragment>
        <Header/>
        <ThemeProvider theme={muiTheme}>
    <Card className={classes.root} >
      <CardHeader className={classes.title}
    
    title=  {params.movieDetails.original_title ? 
             params.movieDetails.original_title : params.movieDetails.name}
    />
      <CardMedia
    className={classes.media}
    image={`${baseUrl}${params.movieDetails.poster_path ? params.movieDetails.poster_path : params.movieDetails.backdrop_path}`}
    />

      <CardContent>
        <Typography  variant="body2" color="textPrimary" component="p">
                {params.movieDetails.overview}
        </Typography>
      </CardContent>
    
        <CardContent className={classes.paragraph}>
        <Typography paragraph>
                 * Release Date : {params.movieDetails.release_date}
          </Typography>
          <Typography paragraph>
                * IMDB Rating : {params.movieDetails.vote_average}
          </Typography>
          <Typography paragraph>
                 * IMDB Stars : {params.movieDetails.vote_count}
          </Typography>
          <Typography paragraph>
                 * IMDB Popularity : {params.movieDetails.popularity}
          </Typography>
          <CardActions disableSpacing><hr></hr>
     <Button  className={classes.buttonContainer} variant="contained"  color="primary" component="xs" width="50%">
      <Link  className={'link'}to=
    {{
      pathname: '/booking',
      state: {
        params: {
          movieDetails: params.movieDetails,
        }
      }
    }}>BOOK NOW </Link>
      </Button>
    
      </CardActions>
        </CardContent>
      
    </Card>
    </ThemeProvider>
   
     </React.Fragment>
     
    );
}
