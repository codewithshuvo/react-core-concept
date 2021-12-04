import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const countrys = ['bangladesh', 'india', 'nepal', 'vutan', 'usa', 'maldivs']
  const employs = [
    { name: 'shuvo', age: 22, address: 'kushtia', },
    { name: 'Mahin', age: 33, address: 'Rangpur', },
    { name: 'Shoriful', age: 24, address: 'Dhaka', },
    { name: 'Sobnom', age: 25, address: 'Meharpur', },
    { name: 'soddha', age: 21, address: 'CTG', },
    { name: 'Sakib', age: 27, address: 'Mirpur', },
    { name: 'Rakib', age: 28, address: 'kushtia', }
  ]
  return (
    <div className="App">
      <ul>
        {
          countrys.map(country => <li>{country}</li>)
        }
      </ul>
      {
        employs.map(employ => <SHUVO name={employ.name} age={employ.age} address={employ.address}></SHUVO>)
      }

      <CountNumber></CountNumber>
      <Shoriful></Shoriful>

    </div>
  );
}

// This is another function 
function SHUVO(props) {

  return (
    <div className="shuvo">
      <h1>Name: {props.name}</h1>
      <h4>Age:{props.age}</h4>
      <p>Address: {props.address}</p>
    </div>
  )
}

{/* <SHUVO name="Mhuvo" job="Student"></SHUVO>
<SHUVO name="Shoriful" job="Banker"></SHUVO>
<SHUVO name="Shanto" job="Programmer"></SHUVO>
<SHUVO name="Mahin" job="Web Developer"></SHUVO> */}


function CountNumber() {
  const [count, setCount] = useState(0);
  const handlerIncrease = () => setCount(count + 10)
  const handlerDncrease = () => setCount(count - 10)



  return (
    <div>
      <h2>Count Number:{count}</h2>
      <button onClick={handlerIncrease}>Increase</button>
      <button onClick={handlerDncrease}>Decrise</button>
    </div>
  )
}

// This is the another use state part 
function Shoriful() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>This is use state part </h2>
      <h3>Total data{users.length}</h3>

      {
        users.map(user => <Aser name={user.name} email={user.email}></Aser>)
      }

    </div>
  )
}
function Aser(props) {
  return (
    <div className="shuvo">
      <h2>Name: {props.name}</h2>
      <h5>Email: {props.email}</h5>
    </div>
  )
}

export default App;
