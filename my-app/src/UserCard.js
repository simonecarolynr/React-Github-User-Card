import React from 'react';

export default class UserCard extends React.Component (props) {

    render() {
        let { name, imgSrc, followers, following } = this.props;
        return ( 
            <div>
                <h1>{name}</h1>
                <img src={imgSrc} />
                <h3>{followers}</h3>
                <h3>{following}</h3>
            </div>
        )
    }
}