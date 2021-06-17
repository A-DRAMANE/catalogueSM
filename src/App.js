import React, { useEffect, useState } from 'react'
import Banner from './components/Banner'
import Profil from './components/Profil'
import ListProduct from './components/ListProduct'
import Categorie from './components/Categorie'
import LogIn from './components/LogIn'
import Menu from './components/Menu'
import Detail from './components/Detail'
import Ajouter from './components/Ajouter'
import Search from './components/Search'
import {getName} from './localStorage/getData'
import Inscription from './components/Inscription'
import { BrowserRouter as Router,Switch, Route  } from "react-router-dom";
import {DataProvider} from './Context'
import './App.css'

function App() {
    const [Name, setName] = useState('')
    useEffect(() => {
        if (getName()) {
            setName(getName())
        }
    }, [Name])
    
  return (
    <Router>
    <DataProvider>
    <div className="App">
        <Banner/>
        
        <div className="main">
          <Menu/>
        <Switch>
            <Route exact path='/'>
                <LogIn/>
            </Route>

            <Route exact path='/list'>
                <ListProduct/>
            </Route>

            <Route  path='/profil'>
                <Profil/>
            </Route>

            <Route  path='/categuorie'>
                <Categorie/>
            </Route>

            <Route  path='/detail'>
                <Detail/>
            </Route>

            <Route  path='/search'>
                <Search/>
            </Route>

            <Route  path='/ajouter'>
                <Ajouter/>
            </Route>

            <Route  path='/inscription'>
                <Inscription/>
            </Route>
        </Switch>
        </div>
        
    </div>
    </DataProvider>
</Router>
  )
}

export default App