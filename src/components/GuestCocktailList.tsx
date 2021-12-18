import React from "react";
import {PreparationStepList} from "./PreparationStepList";
import {GlassList} from "./GlassList";
import {TagList} from "./TagList";


const GuestCocktailListItem: React.FC<any> = ({cocktail}) => 
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
            <div title="ingredients" style={{width: '350px', maxWidth: '400px'}}>
                <ul>
                    {cocktail.ingredientsGuest.map((ingredient: any) => <li>
                        {ingredient}
                    </li>)}
                </ul>
            </div>
            <div title="tags" style={{marginLeft: '10px', width: '150px'}}>
                <TagList tags={cocktail.tags}/>
            </div>
        </div>
        <hr style={{marginBlockStart: '20px'}}/>
    </div>;

// @ts-ignore
export const GuestCocktailList: React.FC<any> = ({cocktails}) => 
    <div title="cocktails" style={{paddingBottom: '20px'}}>
    <div style={{display: 'flex', marginTop: '5px', marginLeft: '5px'}}>{cocktails.length} cocktails</div>
        
      {
        cocktails.map(
          (cocktail: any) => <GuestCocktailListItem cocktail={cocktail}/>
        )
      }
    </div>;

