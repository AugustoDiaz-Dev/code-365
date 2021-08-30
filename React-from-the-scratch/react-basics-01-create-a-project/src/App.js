import './App.css';

function App() {

  {/* Variables */}
  
  const title = "Welcome to ReactJS";
  const likes = 50;
  const interests = ['ReactJS', 'AngularJS', 'VueJS'];
  const person = { name: 'Augusto', age: 38 };
  const link = 'https://www.w3schools.com';

  return (
    <div className="App">
     <div className="content">

       {/* Content to be rendered */}

       <h1>{ title }</h1>
       <p>Liked { likes } times</p>
       <p>My name is { person.name }</p>

       <p>I am { person.age } years old</p>
       <p>I am interested in { interests[0] }, { interests[1] } and { interests[2] }.</p>

       <p>{ 10 }</p>
      <p>{ "You can also write code directly inside of a curly braces."}</p>
      <p>{ ['1- The same ', '2- with an array ', '3- of values.']}</p>
      <p>{ Math.floor(Math.random()* 10)}</p>
      
      <a href={ link }></a>

    {/* This is the way you can write comments in ReactJS */}

     </div>
    </div>
  );
}

export default App;