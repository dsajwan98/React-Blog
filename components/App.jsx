import React from 'react';
import Posts from './Posts';
import Post from './Post';

function App(props){
    return(
      <div className='app-container'>
        <h1>
           <Post />
        </h1>
      </div>
    )
  }

export default App;