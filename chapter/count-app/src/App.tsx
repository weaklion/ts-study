import React from 'react';
import Counter from './components/Counter';
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <Profile name='name' job='job'/>
      <Counter/>      
    </div>
  );
}

export default App;
