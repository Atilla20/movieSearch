import React, { Component } from 'react';
import './movieTable.css';


class MovieTable extends Component {
    render() {
        return(
        <div className="movie-tables">
            <table>
                <tbody>
                    <tr>
                        <td className="movie-title"> {this.props.movie.title} </td>
                        <td className="overview-text"> {this.props.movie.overview}</td>
                        <td className="small-font"> VOTE COUNT:{this.props.movie.vote_count}</td>
                        <td className="small-font"> VOTE AVERAGE:{this.props.movie.vote_average}</td>
                        <td className="small-font"> RELEASE DATE:{this.props.movie.release_date}</td>
                    </tr>
                </tbody>
            </table>

        </div>
        );
    }
}

export default MovieTable;