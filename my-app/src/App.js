import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './UserCard';
import FollowerCard from './FollowerCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profilePic: '',
      name: '',
      followers: '',
      following: '',
      follower: '',
      followerPic: '',
    }
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/simonecarolynr')
    .then(response => {
      let user = response.data; 
      console.log(response)

      this.setState({
        profilePic: user.avatar_url,
        name: user.login,
        followers: user.followers,
        following: user.following,
      });
    })
    .catch(error => {
      console.log(error)
    });

    axios
    .get('https://api.github.com/users/simonecarolynr/followers')
    .then(response => {
      let followers = response.data;
      console.log(followers)

      this.setState({
        follower: followers.login,
        followerPic: followers.imgSrc,
      })
    })
    .catch(error => {
      console.log(error)
    })


    }
  
  render() {
    return (
      <div className="App">
        <UserCard 
          name={this.state.name} 
          imgSrc={this.state.profilePic} 
          followers={this.state.followers} 
          following={this.state.following} 
        />
        {this.followers.map(follower => {
          return <FollowerCard 
            name={this.state.follower} 
            imgSrc={this.state.followerPic} 
          />
        }
        )}
      </div>
    );
  }
}

export default App;
