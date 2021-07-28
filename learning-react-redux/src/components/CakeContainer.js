import React from 'react';
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
    return (
        <>
            <p>Not using Hooks</p>
            <h2>Number of cake - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </>
    );
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);