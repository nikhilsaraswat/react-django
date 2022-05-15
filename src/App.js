import './App.css';
import restaurant from "./restaurant.jpg"
function Header(props){
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}
function Main(props){
  return(
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img src={restaurant} height = {200} alt='paintings and chairs inside the restaurant.'/>
      {/* <img src = "https://github.com/nikhil.png"/> */}
      <ul style={{textAlign:"left"}}> 
        {props.dishes.map(dish=>(
          <li  key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  )
}
function Footer(props){
  return(
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}
const dishes = [
  "Cheese Maggi",
  "Noodles",
  "Tofu with Vegetables"
]
const dishObjects = dishes.map((dish,i)=>({id: i, title:dish})) //rendering as an object
// dishes.map((dish)=>console.log(dish)); // rendering as an element
function App() {
  return (
    <div className="App">
      <Header name="Horacio"/>
      <Main adjective='amazing' dishes={dishObjects}/>
      <Footer year = {new Date().getFullYear()}/>
    </div>
  );
}

export default App;
