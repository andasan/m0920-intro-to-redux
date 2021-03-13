import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import snackUpdate from '../actions/snackDeptUpdate';

class SnackDept extends Component {


    handleQuantity = (operator, index) => {
        this.props.snackUpdate(operator, index)
    }

    render() {
        return (
            <div>
                <h1>The Snack Department</h1>
                <ul>
                    {
                        this.props.data.map((snack, index) => (
                            <div key={index}>
                                <li>{snack.food} - {snack.quantity}</li>
                                <input type="button" value="+" onClick={() => this.handleQuantity('+', index)} />
                                <input type="button" value="-" onClick={() => this.handleQuantity('-', index)}/>
                            </div>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        data: state.snacks.snacksData
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         snackUpdate: snackUpdate
//     }, dispatch)
// }

const mapDispatchToProps = dispatch => {
    return {
        snackUpdate: (operator, index) => dispatch(snackUpdate(operator,index))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SnackDept);