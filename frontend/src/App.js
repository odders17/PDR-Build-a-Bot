import Home from "./pages/Home";
import Menu from "./components/Navbar";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// going to need a Navbar
// going to need a Sidedraw
// going to need a backdrop
// going to need to have a homescreen
// going to need a product screen
// going to need a cartscreen

const client = new ApolloClient({
  //link for api
  uri: "/graphql",
  cache: new InMemoryCache(),
});
//Screens

import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";

// function App() {
//   return (
//     <>
//       <Menu />
//       <Home />
//     </>
//   );
//   }

function app() {
  return (
    <>
      <ApolloProvider client>
        <Menu />
        <Home />
      </ApolloProvider>
      <router>
        {/*Navbar*/}
        {/*SideDrawer*/}
        {/* Backdrop*/}
        <main>
          <switch>
            <Route exact path="/" components={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" componenent={CartScreen} />
          </switch>
        </main>
      </router>
    </>
  );
}

export default App;
