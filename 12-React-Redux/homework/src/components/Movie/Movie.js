import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';


class Movie extends React.Component {
    constructor(){
        super()
        this.state = {
            loading: true
        }
    }
    componentDidMount(){
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId)
    }
    componentDidUpdate(){
        if(this.state.loading === true){
            this.setState({
                loading:false
            })
        }
    }
    render() {
        return (
            <div className="movie-card">
                {this.state.loading === true ? <div><h1>Cargando...</h1></div>:
                <div className='container2'>
                    <h1 clas>{this.props.movies.Title}</h1>
                    <p className='details'>Year:{this.props.movies.Year}</p>
                    <p className='details'>Director:{this.props.movies.Director}</p>
                    <p className='details'>Genre:{this.props.movies.Genre}</p>
                    <p className='details'>Runtime:{this.props.movies.Runtime}</p>
                    <p className='details'>Rating:{this.props.movies.imdbRating}</p>
                    <p className='details'>BoxOffice:{this.props.movies.BoxOffice}</p>
                    <p className='details'>Plot:{this.props.movies.Plot}</p>
                    <p className='details'>Country:{this.props.movies.Country}</p>
                    <img className="img" src={this.props.movies.Poster}></img>
                    
                </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movieDetail
    }
}
function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: id => dispatch(getMovieDetail(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
