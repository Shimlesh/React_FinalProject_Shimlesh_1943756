import './App.css';
import { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import { connect } from "react-redux";
import Header from '../../components/Header/Header';
import Row from '../../components/Row/Row';
import { getTrendingMovies, getTopRatedMovies, getPopularMovies} from '../../redux/actions';

class App extends Component {
 

  componentDidMount(){
       this.props.getTrendingMovies();
       this.props.getTopRatedMovies();
       this.props.getPopularMovies();

  }
  render() {
    return (
      <div className="App"> 
          <Header/>
         
         <Carousel movies={this.props.trendingMovies}  /> 
         <br></br><br></br><br></br><br></br>
    

        <section className="top_section">
               <div >
                <h2>Top Rated</h2>
               </div> 
               <div>
               <h2>New Movies</h2> 
                </div> 
               <div>
               <h2>Blockbuster </h2>
               </div>        
               
          </section>
      <div>

          <br></br><br></br><br></br><br></br>
          <Row  movies={this.props.popularMovies} isSmallRow="true" showButton="true"/> <br></br><br></br><br></br>
          <Row  movies={this.props.trendingMovies} isSmallRow="true" showButton="true"/> <br></br><br></br><br></br>
          <Row  movies={this.props.topRatedMovies} isSmallRow="true" showButton="true"/> <br></br><br></br><br></br>
          

          <br></br>

     </div> 
      </div>
      );
  }

}

const mapStateToProps = (state) => (
{
  trendingMovies: state.trendingMovies,
  topRatedMovies: state.topRatedMovies,
  popularMovies: state.popularMovies,

})

const mapDispatchToProps = {
  getTrendingMovies: getTrendingMovies,
  getTopRatedMovies: getTopRatedMovies,
  getPopularMovies: getPopularMovies,
}

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
