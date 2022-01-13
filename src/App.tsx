import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import {CocktailList} from "./components/CocktailList";
import {CartList} from "./components/CartList";
import {IngredientList} from "./components/IngredientList";
import {GuestCocktailList} from "./components/GuestCocktailList";
import cocktails from "./domain/cocktails";
import ingredients from "./domain/ingredients";
import cocktailbarImg from "./domain/images/cocktailbar.jpg";


const loadObject = (key: string) => {
    const item = localStorage.getItem(key);
    if (item === null) {
        return null;
    }
    return JSON.parse(item);
}

const storeObject = (key: string, value: any) => {
    if (value === null) {
        localStorage.removeItem(key);
        return;
    }
    localStorage.setItem(key, JSON.stringify(value));
}

const useStateWithLocalStorage = (localStorageKey: string) => {
    const [cartValue, setCartValueInReactState] = useState<any[]>(loadObject(localStorageKey) || []);

    const setCartValue: (newValue: any[]) => void = (newValue: any[]) => {
        setCartValueInReactState(newValue);
        storeObject(localStorageKey, newValue);
    };

    return {cartValue, setCartValue};
};

function App() {
    const {cartValue, setCartValue} = useStateWithLocalStorage("myPreviousCart");

    const onCartChange = (event: any) => {
        setCartValue([])
    };


    const [filter, setFilter] = useState<string | null>(null);

    const filterCocktails = (cocktail: any) => {
        if (filter === null) {
            return true;
        }


        var filters = filter.toLowerCase().replaceAll("whiskey", "whisky").split(",");

        return filters.every(function (f) {

            var searchOnlyTags = false;
            var searchNegated = false;
            var filter = f;

            // switch (f.substring(0,2)) {
            //   case "*-" || "-*": {
            //     searchOnlyTags = true;
            //     searchNegated = true;
            //   }
            //   case "*":
            //     searchOnlyTags = true;
            //   case "-":
            //     searchNegated = true;
            //   case _:

            // }

            if (f.substring(0, 2).includes("*") && f.substring(0, 2).includes("-")) {
                searchOnlyTags = true;
                searchNegated = true;
                filter = f.substring(2);
            }

            if (f.startsWith("-")) {
                searchNegated = true;
                filter = filter.substring(1);
            }

            if (f.startsWith("*")) {
                searchOnlyTags = true;
                filter = filter.substring(1);
            }

            var result = (
                !searchOnlyTags && cocktail.name.toLowerCase().replaceAll("whiskey", "whisky").includes(filter) ||
                !searchOnlyTags && cocktail.ingredients.join(" ").toLowerCase().replaceAll("whiskey", "whisky").includes(filter) ||
                !searchOnlyTags && cocktail.ingredientsGuest.join(" ").toLowerCase().replaceAll("whiskey", "whisky").includes(filter) ||
                !searchOnlyTags && cocktail.preparationSteps.join(" ").toLowerCase().replaceAll("whiskey", "whisky").includes(filter) ||
                !searchOnlyTags && cocktail.garnishes.join(" ").toLowerCase().replaceAll("whiskey", "whisky").includes(filter) ||
                !searchOnlyTags && cocktail.glasses.join(" ").toLowerCase().replaceAll("whiskey", "whisky").includes(filter) ||
                cocktail.tags.join(" ").toLowerCase().replaceAll("whiskey", "whisky").includes(filter)
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

    const filterIngredients = (ingredient: any) => {
        if (filter === null) {
            return true;
        }

        var filters = filter.toLowerCase().trim().split(",").map(x => x.trim());

        return filters.every(function (f) {

            var searchOnlyTags = false;
            var searchNegated = false;
            var filter = f;

            if (f.startsWith("*")) {
                searchOnlyTags = true;
                filter = f.substring(1);
            }
            if (filter.startsWith("-")) {
                searchNegated = true;
                filter = filter.substring(1);
            }

            var result = (
                !searchOnlyTags && ingredient.name.toLowerCase().includes(filter) ||
                !searchOnlyTags && ingredient.description.toLowerCase().includes(filter) ||
                !searchOnlyTags && ingredient.category.toLowerCase().includes(filter) ||
                !searchOnlyTags && ingredient.aka.join(" ").toLowerCase().includes(filter) ||
                ingredient.tags.join(" ").toLowerCase().includes(filter)
            )

            if (searchNegated)
                return !result;
            else
                return result;
        })
    }


    return (
        <div id="main">
            <div id="pic" className="App" title="Florian's Finest" style={{margin: '0px 30px'}}>
                <a href={window.location.pathname == "/" ? "/bartender" : "/"}><img src={cocktailbarImg} style={{
                    height: '250px',
                    marginBottom: '2px'
                }}/></a>
                <a href="" title="blabla" onClick={onCartChange}><img src={cocktailbarImg} style={{
                    height: '250px',
                    marginBottom: '2px'
                }}/></a>
            </div>
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
            <Router>
                <Route exact path="/">
                    <GuestCocktailList cocktails={cocktails.filter(filterCocktails)}/>
                </Route>
                <Route exact path="/bartender">
                    <CocktailList cocktails={cocktails.filter(filterCocktails)}/>
                </Route>
                <Route exact path="/ingredients">
                    <IngredientList ingredients={ingredients.filter(filterIngredients)}/>
                </Route>
            </Router>
            <div id="cart" style={{
                position: 'fixed',
                left: '0px',
                bottom: '0px',
                height: "70px",
                backgroundColor: "#ebebeb",
                width: "100%"
            }}>
                <CartList cart={cartValue}/>

            </div>
        </div>
    );
}//cart={["#cocktail1", "#cocktail2"]}/>

export default App;
