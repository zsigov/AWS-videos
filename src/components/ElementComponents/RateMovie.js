import React, { Component } from 'react'
import { connect } from 'react-redux'
import { rateMovie } from '../../redux/mainActions'

//I use class for this component because I decided not put rates array and display options in the Redux state.
export class SelectRate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rates: [1, 2, 3, 4, 5],
            display: ""
        }
    }

    //HideRate function makes Rate option disapear on onBlur event.
    HideRate = (e) => {
        this.setState({
            display: "none"
        })
    }

    render() {
        return (
            <div>

                {/* A select type drop down list displays rate options.
                In the next version I would probably use another type of drop down list 
                whit more possibilities and much bigger flexibility. 
                And if user login is interpreted than I have to implement 
                not to be able to rate more than one times. */}
                <select style={{ display: this.state.display }}
                    className="selectRate"
                    onBlur={this.HideRate}

                    //Send rate information to Redux state.
                    onChange={(e) => this.props.rateMovie(this.props.id, e.target.value)} >

                    <option className="rateOptions">Rate</option>
                    {this.state.rates.map((rate) =>
                        <option className="rateOptions"
                            key={rate}
                            value={rate}
                        >{rate}
                        </option>)
                    }

                </select>

            </div>
        )
    }
}

//Dispatch rate to redux store.
const mapDispatchToProps = dispatch => {
    return {
        rateMovie: (id, rate) => dispatch(rateMovie(id, rate))
    }
}

//Connect Redux store to this page and send null inseatd of mapStateToProps because we don't need it here.
export default connect(null, mapDispatchToProps)(SelectRate)