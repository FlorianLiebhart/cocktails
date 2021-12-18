import React from "react";

const IngredientListItem: React.FC<any> = ({ingredient}) => 
    <div title="ingredient">
        <div title="ingredient title" style={{
            display: 'flex',
            alignItems: 'flex-start'
        }}>
            <h1>
                {ingredient.name}
            </h1>
        </div>
        <div title="inigredient content" style={{
            display: 'flex',
            alignItems: 'flex-start',
            textAlign: 'left'
        }}>
            <div className="pic" title="ingredient picture" style={{minHeight: '150px', maxHeight: '150px', minWidth:'150px', maxWidth:'150px'}}>
                <img src={ingredient.picture} alt={ingredient.name} style={{maxHeight: '150px', maxWidth:'150px'}}/>
            </div>
            <div title="ingredient description" style={{width: '350px', maxWidth: '400px'}}>
                <div>
                    {ingredient.description}
                </div>
            </div>
            <div title="ingredient aka" style={{width: '350px', maxWidth: '400px'}}>
                <ul>
                    {ingredient.aka.map((aka: any) => <li>
                        {aka}
                    </li>)}
                </ul>
            </div>
            <div title="ingredient category" style={{width: '350px', maxWidth: '400px'}}>
                <div>
                    {ingredient.category}
                </div>
            </div>
        </div>
        <hr style={{marginBlockStart: '20px'}}/>
    </div>;

// @ts-ignore
export const IngredientList: React.FC<any> = ({ingredients}) => 
    <div title="ingredients" style={{paddingBottom: '20px'}}>
    <div style={{display: 'flex', marginTop: '5px', marginLeft: '5px'}}>{ingredients.length} ingredients</div>
        
      {
        ingredients.map(
          (ingredient: any) => <IngredientListItem ingredient={ingredient}/>
        )
      }
    </div>;

