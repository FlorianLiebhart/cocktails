import React, {useState} from 'react';
import './App.css';
import {CocktailList} from "./components/CocktailList";
import {GuestCocktailList} from "./components/GuestCocktailList";
import cocktails from "./domain/cocktails";
import cocktailbarImg from "./domain/images/cocktailbar.jpg";
import styled from "styled-components";

function App() {
    const [filter, setFilter] = useState<string | null>(null);

    var guestMode = false;


    const filterCocktails = (cocktail: any) => {
        if (filter === null) {
            return true;
        }
        
        // if (filter == "guest") {
        //   guestMode = true;
        //   const thisCocktail = (document.getElementById(cocktail.id) as HTMLInputElement);

        //   if (thisCocktail != null) {
        //     console.log(thisCocktail)

        //     thisCocktail.classList.add("hello")
        //   }
        // }

        // if (filter == "barkeeper" && cocktail != null) {
        //   guestMode = false;
        //   const thisCocktail = (document.getElementById(cocktail.id) as HTMLInputElement);

        //   if (thisCocktail != null) {
        //     console.log(thisCocktail)
        //     thisCocktail.classList.remove("hello")
        //   }
        // }

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
                !searchOnlyTags && cocktail.ingredientsGuest.join(" ").toLowerCase().includes(filter) ||
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

    // const handleButton = ( ) => {
    //   return ;
    // }

    // const Button = styled.button`
    //   color: palevioletred;
    //   font-size: 1em;
    //   margin: 1em;
    //   padding: 0.25em 1em;
    //   border: 2px solid palevioletred;
    //   border-radius: 3px;
    //   background: ${props => props.active ? 'darkred' : 'limegreen'}

    // `;



    // const Button = styled.button`
    //   display: inline-block;
    //   color: palevioletred;
    //   font-size: 1em;
    //   margin: 1em;
    //   padding: 0.25em 1em;
    //   border: 2px solid palevioletred;
    //   border-radius: 3px;
    //   display: block;
    // `;

    // const Input = styled.input`
    //   padding: 0.5em;
    //   margin: 0.5em;
    //   color: ${props => props.inputColor || "palevioletred"};
    //   background: papayawhip;
    //   border: none;
    //   border-radius: 3px;
    // `;

            // <Button active="true" onClick={handleButton}></Button>



    return (

      // Render a styled text input with the standard input color, and one with a custom input color
        
        <div id="pic" className="App" title="lol" style={{margin: '0px 30px'}}>
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
            {
              guestMode?<GuestCocktailList cocktails={cocktails.filter(filterCocktails)}/>:<CocktailList cocktails={cocktails.filter(filterCocktails)}/>
            }
            
        </div>
    );
}

export default App;
