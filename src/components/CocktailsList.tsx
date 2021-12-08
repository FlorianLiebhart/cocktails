import React from "react";
import {PreparationStepsList} from "./PreparationStepsList";


const glassesMap={

}


const CocktailListItem: React.FC<any> = ({cocktail}) => <div
    style={{
        padding: '20px'
    }}
>
    <div style={{
        display: 'flex',
        alignItems: 'flex-start'
    }}>
        <h1>
            {cocktail.name}
        </h1>
    </div>
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    }}>
        <div>
            <img src={cocktail.picture} alt={cocktail.name} style={{height: '200px'}}/>
        </div>
        <div>
            <ul>
                {cocktail.ingredients.map((ingredient: any) => <li>
                    {ingredient}
                </li>)}
            </ul>
        </div>
        <div>

            <PreparationStepsList preparationSteps={cocktail.preparationSteps}/>
        </div>
        <div>
            <ul>
                {cocktail.garnishes.map((ingredient: any) => <li>
                    {ingredient}
                </li>)}
            </ul>
        </div>
        <div>
            <ul>
                {cocktail.glasses.map((ingredient: any) => <li>
                    {ingredient}
                </li>)}
            </ul>
        </div>
    </div>
</div>;


const CocktailsList: React.FC<any> = ({cocktails}) => <>

    {cocktails.map((cocktail: any) => <CocktailListItem cocktail={cocktail}/>)}
</>;


export default CocktailsList;
