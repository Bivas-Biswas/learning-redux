import React from 'react';
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
    return (
        <>
            <h2>Number of iceCream - {props.numOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </>
    );
}

const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer);