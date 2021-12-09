import React, {useState} from 'react';
import './App.css';
import {CocktailList} from "./components/CocktailList";
import cocktails from "./domain/cocktails";

function App() {
    const [filter, setFilter] = useState<string | null>(null);


    const filterCocktails = (cocktail: any) => {
        if (filter === null) {
            return true;
        }

        var lcFilter = filter.toLowerCase();

        return cocktail.name.toLowerCase().includes(lcFilter) || 
          cocktail.ingredients.join(" ").toLowerCase().includes(lcFilter) ||
          cocktail.preparationSteps.join(" ").toLowerCase().includes(lcFilter) ||
          cocktail.garnishes.join(" ").toLowerCase().includes(lcFilter) ||
          cocktail.glasses.join(" ").toLowerCase().includes(lcFilter) ||
          cocktail.tags.join(" ").toLowerCase().includes(lcFilter);
    }

    return (
        <div className="App" style={{margin: '30px'}}>
            <input
                placeholder={"Search for something"}
                style={{
                  display: 'flex',
                  height: '48px', 
                  width: '98%',
                  borderRadius: '10px',
                  borderStyle: 'solid',
                  borderWidth: '1px',
                  paddingLeft: '10px',
                  paddingRight: '10px'
                }}
                onChange={(ev) => {
                    setFilter(ev.target.value);
                }}
            />
            <CocktailList cocktails={cocktails.filter(filterCocktails)}/>
        </div>
    );
}

export default App;
