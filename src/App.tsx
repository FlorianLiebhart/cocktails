import React, {useState} from 'react';
import './App.css';
import {CocktailList} from "./components/CocktailList";
import cocktails from "./domain/cocktails";
import cocktailbarImg from "./domain/images/cocktailbar.jpg";

function App() {
    const [filter, setFilter] = useState<string | null>(null);


    const filterCocktails = (cocktail: any) => {
        if (filter === null) {
            return true;
        }

        var filters = filter.toLowerCase().split(",").map(x => x.trim());

        return filters.every(function(filter) { 

            if (filter.startsWith("-")) {
              var negativeFilter=filter.substring(1);
              return !(
                cocktail.name.toLowerCase().includes(negativeFilter) || 
                cocktail.ingredients.join(" ").toLowerCase().includes(negativeFilter) ||
                cocktail.preparationSteps.join(" ").toLowerCase().includes(negativeFilter) ||
                cocktail.garnishes.join(" ").toLowerCase().includes(negativeFilter) ||
                cocktail.glasses.join(" ").toLowerCase().includes(negativeFilter) ||
                cocktail.tags.join(" ").toLowerCase().includes(negativeFilter)
              )
            }
            else {
              return cocktail.name.toLowerCase().includes(filter) || 
              cocktail.ingredients.join(" ").toLowerCase().includes(filter) ||
              cocktail.preparationSteps.join(" ").toLowerCase().includes(filter) ||
              cocktail.garnishes.join(" ").toLowerCase().includes(filter) ||
              cocktail.glasses.join(" ").toLowerCase().includes(filter) ||
              cocktail.tags.join(" ").toLowerCase().includes(filter)
            }
        })
    }

    return (
        <div className="App" style={{margin: '0px 30px'}}>
          <img src={cocktailbarImg} style={{height: '250px', marginBottom: '2px'}}/>
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
