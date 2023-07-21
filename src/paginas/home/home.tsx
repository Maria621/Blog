import React from 'react';
import './Home.css';
import homeLogo from '../../assets/home.jpg'

function Home(){
    return (
        <>
            <h1 className='titulo'>Home</h1>
           <img src={homeLogo} className="img" alt="imagem do" />
        </>
    );
}

export default Home;