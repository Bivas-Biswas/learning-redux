import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer(props) {
    const numOfCakes =useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <>
            <p>Using Hooks</p>
            <h2>Num of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </>
    );
}

export default HooksCakeContainer;