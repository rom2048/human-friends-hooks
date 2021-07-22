import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';

function App() {
  // constructor() {
  //   super()
  //   this.state = {
  //     humans: [],
  //     searchfield: ''
  //   }
  // }
  const [humans, setHumans] = useState([])
  const [searchfield, setSearchfield] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setHumans(users))
  }, [count]) 

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const filtredHumans = humans.filter(human => {
    return human.name.toLowerCase().includes(searchfield.toLowerCase());
  })
  console.log(humans, searchfield);
  return !humans.length ? 
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>Humans</h1>
        <div className='flex justify-center flex-wrap'>
          <button className='f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-blue ma2' onClick={() => setCount(count + 1)}>Click me!</button>
          <p className="tc f1-l fw1red">{count}</p>
        </div>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <CardList humans={filtredHumans}/>
        </Scroll>
      </div>    
    );
  
}

export default App;