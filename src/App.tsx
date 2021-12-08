import React from 'react';
import './App.css';
import CocktailsList from "./components/CocktailsList";
import cocktails from "./domain/cocktails";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <CocktailsList cocktails={cocktails}/>
            </header>
        </div>
    );
}

export default App;
