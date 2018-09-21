import React from 'react';
import './postcomments.css';
import Footer from './footer.js';
class PostComments extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            ratingText: "",
            rating: "",


        };

        this.changeName = this.changeName.bind(this);
        this.changeText = this.changeText.bind(this);
        this.changeRating = this.changeRating.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    changeName(event) {
        this.setState({name: event.target.value});
    }
    changeText(event) {
        this.setState({ratingText: event.target.value});
    }
    changeRating(event) {
        this.setState({rating: event.target.value});
    }


    handleSubmit(event) {


            fetch('http://192.168.99.100:8888/api/collections/save/rating?token=e40f461fd0a7a62080326a8398b858', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                data: {
                    Name: this.state.name,
                    text: this.state.ratingText,
                    rating: this.state.rating,
                    productId: this.props.id,

                }
            })
        })
            .then(res=>res.json())
            .then(entry => console.log(entry));




    }

    render () {

        return (

            <div className="Row ">
                <div className="col-sm-3"></div>
                <div className="col-sm-6 container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" value={this.state.name} onChange={this.changeName} className="form-control" id="name" placeholder="Ditt Namn" />
                        </div>

                        <div className="form-group">
                            <textarea className="form-control" value={this.state.ratingText} onChange={this.changeText} rows="5" id="comment" placeholder="Skriv din kommentar"></textarea>
                        </div>
                        <div className="form-group">
                            <input type="text" value={this.state.rating} onChange={this.changeRating} className="form-control" id="rating" placeholder="Din rating mellan 1-5" />
                        </div>

                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>
                </div>
                <div className="col-sm-3"></div>


            </div>


        );
    }

}
export default PostComments;