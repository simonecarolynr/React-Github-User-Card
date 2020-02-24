import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profilePic: '',
      name: '',
      followers: '',
      following: '',
    }
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/simonecarolynr')
    .then(response => {
      let user = response.data; 
      console.log(user)
    })
    .catch(error => {
      console.log(error)
    });

    this.setState({
      profilePic: user.avatar_url,
      name: user.name,
      followers: user.followers,
      following: user.following,
    });
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
      </div>
    );
  }
}

export default App;
