import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <div className="title"><h1>Title</h1></div>
            <div className="content"><p>Content</p></div>
        </div>
    );
}

export default Card;