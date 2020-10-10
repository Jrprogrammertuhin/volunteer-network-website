import React from 'react';
import css from './Home.css';
import { Link, useHistory } from 'react-router-dom';
const ShowHome = (props) => {
    const history = useHistory();

    const addProduct = () =>{
        console.log('is click')
         history.push('/register');
    }

    return (
        <div className="a col-sm-3">
            <img style={{ height:"250px"}} src={require(`../../images/${props.data.pic}`)} alt=""/>
            <h4><button onClick={addProduct}>{props.data.name}</button></h4>
        </div>
        
    );
};

export default ShowHome;