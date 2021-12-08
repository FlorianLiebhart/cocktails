import React from "react";


const CocktailListItem: React.FC<any> = ({cocktail}) => <div style={{
    display: 'flex',
}}>
    <div>
        <h1>
            {cocktail.name}
        </h1>
    </div>
    <div>
        <ul>
            {cocktail.ingredients.map((ingredient: any) => <li>
                {ingredient}
            </li>)}
        </ul>
    </div>
    <div>
        <ul>
            {cocktail.preparationSteps.map((ingredient: any) => <li>
                {ingredient}
            </li>)}
        </ul>
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
</div>;


const CocktailsList: React.FC<any> = ({cocktails}) => <>

    {cocktails.map((cocktail: any) => <CocktailListItem cocktail={cocktail}/>)}
</>;


export default CocktailsList;
