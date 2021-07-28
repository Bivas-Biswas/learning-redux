import React, { useState } from 'react';
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)

    const handleOnChange = (e) => {
        let value = e.target.value
        setNumber(value)
    }

    return (
        <>
            <h2>Number of cake - {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={handleOnChange}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
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
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer);