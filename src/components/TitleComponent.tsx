import React, {CSSProperties} from "react";
import {TagList} from "./TagList";

import recommendationImg from "../domain/images/recommendation.png";
import recommendationSimoneImg from "../domain/images/recommendationsimone.png";
import recommendationFloraImg from "../domain/images/recommendationflora.png";
import recommendationChristianImg from "../domain/images/recommendationchristian.png";
import recommendationSabrinaImg from "../domain/images/recommendationsabrina.png";
import floraheavydisapproveImg from "../domain/images/floraheavydisapprove.png";
import recommendationDanielImg from "../domain/images/recommendationdaniel.png";
import newTagImg from "../domain/images/new.png";


// Howto: Best style: https://www.sitepoint.com/react-components-styling-options/
// Inline style, like I am using, is the worst of all...
const recommendationStyle: CSSProperties = {
    maxHeight: '65px',
    maxWidth: '65px',
    position: 'relative',
    left: '10px',
    top: '10px'
};


// @ts-ignore
export const TitleComponent: React.FC<any> = ({cocktail}) => 
    <div title="cocktail title" style={{
        display: 'flex',
        alignItems: 'flex-start'
    }}>
        <h1>
            {cocktail.name}
        </h1>
        {
            cocktail.tags.includes("new") ? <img src={newTagImg} style={{
                maxHeight: '40px',
                maxWidth: '40px',
                position: 'relative',
                left: '3px',
                top: '30px'
            }}/> : <div/>
        }
        {
            cocktail.tags.includes("favorite") ? <img src={recommendationImg} style={recommendationStyle}/>:<div/>
        }
        {
            cocktail.tags.includes("simoneapproved")?<img src={recommendationSimoneImg} style={recommendationStyle}/>:<div/>
        }
        {
            cocktail.tags.includes("christianapproved")?<img src={recommendationChristianImg} style={recommendationStyle}/>:<div/>
        }
        {
            cocktail.tags.includes("floraapproved")?<img src={recommendationFloraImg} style={recommendationStyle}/>:<div/>
        }
        {
            cocktail.tags.includes("sabrinaapproved")?<img src={recommendationSabrinaImg} style={recommendationStyle}/>:<div/>
        }
        {
            cocktail.tags.includes("floraheavydisapprove")?<img src={floraheavydisapproveImg} style={recommendationStyle}/>:<div/>
        }
        {
            cocktail.tags.includes("danielapproved")?<img src={recommendationDanielImg} style={recommendationStyle}/>:<div/>
        }
    </div>
