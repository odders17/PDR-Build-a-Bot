import Home from "./pages/Home";
import Menu from "./components/Navbar";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
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

function App() {
  return (
    <ApolloProvider client>
      <Menu />
      <Home />
    </ApolloProvider>
  );
}

export default App;
v;
