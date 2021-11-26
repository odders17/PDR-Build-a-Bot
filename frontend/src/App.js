import "./App.css"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
// going to need a Navbar
// going to need a Sidedraw
// going to need a backdrop
// going to need to have a homescreen 
// going to need a product screen
// going to need a cartscreen


function App() {
  return (
   <div className="app">
   {/* Navbar */}
   {/* SideDrawer */}
   {/* Backdrop */}
   <main>
     <Switch>
       <Route exact path="/" component={HomeScreen}/>
       <Route exact path="/product/:id" component={ProductScreen}/>
       <Route exact path="/cart" component={CartScreen}/>
     </Switch>
   </main>
   {/* HomeScreen */}
   {/* ProductScreen */}
   {/* CartScreen */}
   </div>
  );
}

export default App;
