import React from 'react';

export default class UserCard extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        let { name, imgSrc, followers, following } = this.props;
        return ( 
            <div className='card'>
                <img className='img' src={imgSrc} />
                <h3>{name}</h3>
                <h3>{followers}</h3>
                <h3>{following}</h3>
            </div>
        )
    }
}