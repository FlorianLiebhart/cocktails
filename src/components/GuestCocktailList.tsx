import React from "react";
import {PreparationStepList} from "./PreparationStepList";
import {GlassList} from "./GlassList";
import {TagList} from "./TagList";

import newTagImg from "../domain/images/new.png";
import recommendationImg from "../domain/images/recommendation.png";
import recommendationSimoneImg from "../domain/images/recommendationsimone.png";
import recommendationFloraImg from "../domain/images/recommendationflora.png";
import recommendationChristianImg from "../domain/images/recommendationchristian.png";

const GuestCocktailListItem: React.FC<any> = ({cocktail}) => 
    <div title="cocktail">
        <div title="cocktail title" style={{
            display: 'flex',
            alignItems: 'flex-start'
        }}>
            <h1>
                {cocktail.name}
            </h1>
            {
               cocktail.tags.includes("new")?<img src={newTagImg} style={{maxHeight: '40px', maxWidth:'40px', position: 'relative', left: '3px', top: '30px'}}/>:<div/>
            }
            {
               cocktail.tags.includes("favorite")?<img src={recommendationImg} style={{
                 maxHeight: '50px', 
                 maxWidth:'50px', 
                 position: 'relative', 
                 left: '10px', 
                 top: '10px',
                 border: '0px',
                 borderColor: 'goldenrod',
                 borderStyle: 'double',
                 borderRadius: '100px'
               }}/>:<div/>                  
            }
            {
               cocktail.tags.includes("simoneapproved")?<img src={recommendationSimoneImg} style={{
                 maxHeight: '50px', 
                 maxWidth:'50px', 
                 position: 'relative', 
                 left: '10px', 
                 top: '10px',
                 border: '0px',
                 borderColor: 'goldenrod',
                 borderStyle: 'double',
                 borderRadius: '100px'
               }}/>:<div/>                  
            }
            {
               cocktail.tags.includes("floraapproved")?<img src={recommendationFloraImg} style={{
                 maxHeight: '50px', 
                 maxWidth:'50px', 
                 position: 'relative', 
                 left: '10px', 
                 top: '10px',
                 border: '0px',
                 borderColor: 'goldenrod',
                 borderStyle: 'double',
                 borderRadius: '100px'
               }}/>:<div/>                  
            }
            {
               cocktail.tags.includes("christianapproved")?<img src={recommendationChristianImg} style={{
                 maxHeight: '50px', 
                 maxWidth:'50px', 
                 position: 'relative', 
                 left: '10px', 
                 top: '10px',
                 border: '0px',
                 borderColor: 'goldenrod',
                 borderStyle: 'double',
                 borderRadius: '100px'
               }}/>:<div/>                  
            }
        </div>
        <div id={cocktail.id} title="cocktail content" style={{
            display: 'flex',
            alignItems: 'flex-start',
            textAlign: 'left'
        }}>
            <div className="pic" title="cocktail picture" style={{minHeight: '150px', maxHeight: '150px', minWidth:'150px', maxWidth:'150px'}}>
                <img src={cocktail.picture} alt={cocktail.name} style={{maxHeight: '150px', maxWidth:'150px'}}/>
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

