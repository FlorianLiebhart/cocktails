import React from "react";
import {PreparationStepList} from "./PreparationStepList";
import {GlassList} from "./GlassList";
import {TagList} from "./TagList";


const CocktailListItem: React.FC<any> = ({cocktail}) => 
    <div title="cocktail">
        <div title="cocktail title" style={{
            display: 'flex',
            alignItems: 'flex-start'
        }}>
            <h1>
                {cocktail.name}
            </h1>
        </div>
        <div title="cocktail content" style={{
            display: 'flex',
            alignItems: 'flex-start',
            textAlign: 'left'
        }}>
            <div title="cocktail picture" style={{height: '150px', minWidth:'150px', maxWidth:'150px'}}>
                <img src={cocktail.picture} alt={cocktail.name} style={{height: '150px', width:'150px'}}/>
            </div>
            <div title="ingredients" style={{width: '350px', maxWidth: '350px'}}>
                <ul>
                    {cocktail.ingredients.map((ingredient: any) => <li>
                        {ingredient}
                    </li>)}
                </ul>
            </div>
            <div title="preparation steps" style={{width: '200px', minWidth: '160px', maxWidth: '200px'}}>
                <PreparationStepList preparationSteps={cocktail.preparationSteps}/>
            </div>
            <div title="garnishes" style={{width: '250px', maxWidth: '250px'}}>
                <ul>
                    {cocktail.garnishes.map((ingredient: any) => <li>
                        {ingredient}
                    </li>)}
                </ul>
            </div>
            <div title="glasses" style={{minWidth: '80px', maxWidth: '80px'}}>
                <GlassList glasses={cocktail.glasses}/>
            </div>
            <div title="tags" style={{marginLeft: '10px'}}>
                <TagList tags={cocktail.tags}/>
            </div>
        </div>
        <hr style={{marginBlockStart: '20px'}}/>
    </div>;

// @ts-ignore
export const CocktailList: React.FC<any> = ({cocktails}) => 
    <div title="cocktails" style={{paddingBottom: '20px'}}>
      {
        cocktails.map(
          (cocktail: any) => <CocktailListItem cocktail={cocktail}/>
        )
      }
    </div>;

