import React, {useState} from 'react';
import './App.css';
import CocktailsList from "./components/CocktailsList";
import cocktails from "./domain/cocktails";

function App() {
    const [filter, setFilter] = useState<string | null>(null);


    const onUserInputChange = (newValue: string) => {
        setFilter(newValue);
    }

    const filteredCocktails = cocktails.filter(cocktail => filter === null || cocktail.name.includes(filter));

    return (
        <div className="App">
            <header className="App-header">
                <CocktailsList onUserInputChange={onUserInputChange} cocktails={filteredCocktails}/>
            </header>
        </div>
    );
}

export default App;
