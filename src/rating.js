import React from 'react';
import PostComments from './postcomments.js';
import './rating.css';


class Rating extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            rating: [],

        };

    }

    componentDidMount() {
        let myRequest = new Request('http://192.168.99.100:8888/api/collections/get/rating?token=e40f461fd0a7a62080326a8398b858');
        let initialRatings = [];
        fetch(myRequest)
            .then(response => {
                return response.json();
            }).then(data => {
            initialRatings = data.entries.map((ratings) => {
                return ratings
            });
            console.log(initialRatings);
            this.setState({
                rating: initialRatings,
            });
        });
    }

    render () {

        let arrayToFilter = this.state.rating;
        let idToMatch = this.props.id;
        let filterdArray = arrayToFilter.filter(function(rating){
            return rating.productId === idToMatch;
        });

        let ratingsArray = filterdArray;

        let ratings = ratingsArray.map((rating) =>
            <div className="row" key={rating._id}>
                <div className="col-sm-3"></div>
                <div className="col-sm-5">
                    <div className="row">
                        <div className="col-sm-12"><h3>{rating.Name}</h3></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12"><p>{rating.text}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12"><p><strong>Rating: {rating.rating}/5 </strong></p></div>
                    </div>
                </div>
                <div className="col-sm-4"></div>
            </div>

        );




        return (
            <div id="container">
                {ratings}

                <div className="row">
                    <div className="col-sm-12 skrivEnKommentar"><h2>Skriv en kommentar</h2></div>
                </div>

                <PostComments id={this.props.id} />
            </div>
        );
    }

}
export default Rating;