import React, { useState, useEffect } from 'react';
import pic from '../../images/childSupport.png';
import fakeData from '../../fakeDate/fakeDate';
import Donation from '../Donation/Donation';
import ShowHome from './ShowHome';



const Home = () => {
    const [data, setData] = useState(fakeData);
    useEffect(() => {

    }, [])
    return (
        <div className="container">
            <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
            <input type="text" name="" id=""/><button>Search</button>
            <div className="row row-cols-3 mt-5">
                {
                    data.map(data => <ShowHome data={data}></ShowHome>)
                }
            </div>
        </div>
    );
};

export default Home;