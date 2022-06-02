import React from "react";
import './App.css';

import Home from "./pages/home/Home";
import TopMenu from "./components/topmenu/Topmenu";
import {Route, Switch} from "react-router";
import Subreddit from "./pages/subreddit/Subreddit";


function App() {

    // const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
    <>

            <TopMenu/>
            <Switch>

               <Route exact path = "/">
                   <Home />
               </Route>



            <Route exact path = "/Subreddit/:id">
                <Subreddit />
            </Route>

        </Switch>

<p>this is IT

2. maak de routing voor de pagina's
3. homepagina (data ophalen en weergeven
        GET https://www.reddit.com/hot.json?limit=15
4. Subreddit pagina (data ophalen en weergeven)
        GET https://www.reddit.com/r/{"SUBREDDIT-HIER"}/about.json
5. styling
6. bonus opdracht
9 (kleine) componenten
    post, header, fouter etc
9,1 helper functies voor de cijfers met punten
</p>


    </>
  );
}

export default App;
