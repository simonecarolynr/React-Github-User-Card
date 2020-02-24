import React from 'react';

export default class UserCard extends React.Component (props) {

    render() {
        return ( 
            <div>
                <h1>{props.name}</h1>
                <img src={props.imgSrc} />
                <h3>{props.followers}</h3>
                <h3>{props.following}</h3>
            </div>
        )
    }
}