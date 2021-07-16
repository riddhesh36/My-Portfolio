import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePosts from "./components/SinglePost";
import Post from "./components/Post";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return(
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route component={Home} path= '/' exact />
        <Route component={About} path= '/about' />
        <Route component={SinglePosts} path= '/post/:slug' />
        <Route component={Post} path= '/post' />
        <Route component={Projects} path= '/projects' />
      </Switch>
    </BrowserRouter>
  ) 
}
export default App;
