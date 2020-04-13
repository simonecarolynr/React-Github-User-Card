import React from 'react';

export default class FollowerCard extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        let { name, imgSrc } = this.props;
        return ( 
            <div className='card'>
                <img className='img' src={imgSrc} />
                <h3>{name}</h3>
            </div>
        )
    }
}