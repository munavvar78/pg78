import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
// import AnimatedCursor from "react-animated-cursor"
import Blog from "./pages/Blog";
import Food from "./pages/Food";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pg from "./pages/Pg";
import Register from "./pages/Register";
import PgInsert from "./pages/PgInsert";
import PgDetail from "./pages/PgDetail";
import ThemeContextProvider from "./contexts/ThemeContext";
import NotAuthHome from "./pages/NotAuthHome";
// in this usestate hooks we can pass the data from one componenets to the other components
const App = () => {
  // let { id } = useParams();

  const [user,setLoginUser]=useState([])
  return (
    <div>
      {/* <AnimatedCursor/> */}
      <ThemeContextProvider>
              <Router>
        <Switch>
          <Route path="/" exact>
          <Home user={user}/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">{
            user && user._id ?<About user={user}/>:<Login setLoginUser={setLoginUser}/>}
          </Route>
          <Route path="/pg" exact>
          {
            user && user._id ?<Pg user={user}/>:<Login setLoginUser={setLoginUser}/>}
          </Route>
          <Route path='/pg/:id'>
          {
            user && user._id ?<PgDetail user={user}/>:<Login setLoginUser={setLoginUser}/>}
          </Route>
          <Route path="/blog">
          {
            user && user._id ?<About user={user}/>:<Login setLoginUser={setLoginUser}/>}
          </Route>
          <Route path="/food">
            <Food />
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path='/pginsert'>
            <PgInsert/>
          </Route>
        </Switch>
      </Router>
      </ThemeContextProvider>

    </div>
  );
};

export default App;