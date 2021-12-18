import React from "react";
import {PreparationStepList} from "./PreparationStepList";
import {GlassList} from "./GlassList";
import {TagList} from "./TagList";


const PictureComponentItem: React.FC<any> = ({cocktail}) => 
    <div title="cocktail picture" style={{height: '150px', minWidth:'150px', maxWidth:'150px'}}>
        <img src={cocktail.picture} alt={cocktail.name} style={{height: '150px', width:'150px'}}/>
    </div>
           

// @ts-ignore
export const PictureComponent: React.FC<any> = ({cocktails}) => 
        
      {
        cocktails.map(
          (cocktail: any) => <PictureComponentItem cocktail={cocktail}/>
        )
      }

