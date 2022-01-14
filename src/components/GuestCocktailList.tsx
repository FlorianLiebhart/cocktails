import React, {CSSProperties} from "react";
import {PreparationStepList} from "./PreparationStepList";
import {GlassList} from "./GlassList";
import {PictureComponent} from "./PictureComponent";
import {IngredientComponent} from "./IngredientComponent";
import {TagsComponent} from "./TagsComponent";
import {TitleComponent} from "./TitleComponent";

import newTagImg from "../domain/images/new.png";
import recommendationImg from "../domain/images/recommendation.png";
import recommendationSimoneImg from "../domain/images/recommendationsimone.png";
import recommendationFloraImg from "../domain/images/recommendationflora.png";
import recommendationChristianImg from "../domain/images/recommendationchristian.png";
import recommendationSabrinaImg from "../domain/images/recommendationsabrina.png";
import floraheavydisapproveImg from "../domain/images/floraheavydisapprove.png";
import recommendationDanielImg from "../domain/images/recommendationdaniel.png";


const GuestCocktailListItem: React.FC<any> = ({cocktail, onClick}) => 
    <div id={cocktail.id} title="cocktail">
        <TitleComponent cocktail={cocktail}/>
        <div title="cocktail content" style={{
            display: 'flex',
            alignItems: 'flex-start',
            textAlign: 'left'
        }}>
            <PictureComponent cocktail={cocktail} onClick={onClick}/>
            <IngredientComponent cocktail={cocktail} ingredients={cocktail.ingredientsGuest}/>
            <TagsComponent cocktail={cocktail}/>
        </div>
        <hr style={{marginBlockStart: '20px'}}/>
    </div>;

// @ts-ignore
export const GuestCocktailList: React.FC<any> = ({cocktails, onCocktailClicked}) =>
    <div title="cocktails" style={{paddingBottom: '20px'}}>
        <div style={{display: 'flex', marginTop: '5px', marginLeft: '5px'}}>{cocktails.length} cocktails</div>
        {
            cocktails.map(
                (cocktail: any) => <GuestCocktailListItem onClick={() => onCocktailClicked(cocktail)} cocktail={cocktail}/>
            )
        }
    </div>;

