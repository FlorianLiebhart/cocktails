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
        

        var filters = filter.toLowerCase().trim().split(",").map(x => x.trim());

        return filters.every(function(f) { 

            var searchOnlyTags = false;
            var searchNegated = false;
            var filter = f;

            if (f.startsWith("*")){
              searchOnlyTags = true;
              filter = f.substring(1);
            }
            if (filter.startsWith("-")) {
              searchNegated = true;
              filter = filter.substring(1);
            }  

            var result = (
                !searchOnlyTags && cocktail.name.toLowerCase().includes(filter) || 
                !searchOnlyTags && cocktail.ingredients.join(" ").toLowerCase().includes(filter) ||
                !searchOnlyTags && cocktail.preparationSteps.join(" ").toLowerCase().includes(filter) ||
                !searchOnlyTags && cocktail.garnishes.join(" ").toLowerCase().includes(filter) ||
                !searchOnlyTags && cocktail.glasses.join(" ").toLowerCase().includes(filter) ||
                cocktail.tags.join(" ").toLowerCase().includes(filter)
              )
            
            if (searchNegated)
              return !result;
            else 
              return result;
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
