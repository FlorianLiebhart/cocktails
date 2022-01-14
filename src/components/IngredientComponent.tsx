import React from "react";

// @ts-ignore
export const IngredientComponent: React.FC<any> = ({cocktail, ingredients}) => 
    <div title="ingredients" style={{width: '350px', maxWidth: '400px'}}>
        <ul>
            {ingredients.map((ingredient: any) => 
              <li>
                {ingredient}
              </li>
            )}
        </ul>
    </div>
