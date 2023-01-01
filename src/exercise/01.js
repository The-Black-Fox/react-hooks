// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({initialName, ...props}) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [name, setName] = React.useState(initialName)
console.log(initialName)
  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    let typedName = event.target.value
    setName(typedName)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Josh"/>
}

export default App
