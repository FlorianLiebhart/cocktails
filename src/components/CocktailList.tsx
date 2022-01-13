import React, {CSSProperties} from "react";
import {PreparationStepList} from "./PreparationStepList";
import {GlassList} from "./GlassList";
import {TagList} from "./TagList";

import newTagImg from "../domain/images/new.png";
import recommendationImg from "../domain/images/recommendation.png";
import recommendationSimoneImg from "../domain/images/recommendationsimone.png";
import recommendationFloraImg from "../domain/images/recommendationflora.png";
import recommendationChristianImg from "../domain/images/recommendationchristian.png";
import recommendationSabrinaImg from "../domain/images/recommendationsabrina.png";
import floraheavydisapprove from "../domain/images/floraheavydisapprove.png";


// Howto: Best style: https://www.sitepoint.com/react-components-styling-options/
// Inline style, like I am using, is the worst of all...
const recommendationStyle: CSSProperties = {
    maxHeight: '65px',
    maxWidth: '65px',
    position: 'relative',
    left: '10px',
    top: '10px'
};


// class Ingredient extends React.Component {
//   render() {
//      return <div>
//         {"5-10ml (Demarara) Sugar Sirup \n (orig".split("\n")
//           .map(t => <span>{t}</span>)
//           .reduce((prev, curr) => [prev, <br/>, curr])}
//      </div>
//   }
// }


// const Ingredient: React.FC<any> = ({ingredient}) => {

//     return ReactDom.render(<ReactMarkdown># Hello, *world*!</ReactMarkdown>, document.body)


// //     const result = regexifyString({
// //         pattern: /\[.*?\]/gim,
// //         decorator: (match, index) => {
// //             return <span>{match}</span>;
// //         },
// //         input: 'some [text] with simple example',
// //     });
// //     return result;
// // //   // return ingredient.split("\n").join(<br/>);
// }


const CocktailListItem: React.FC<any> = ({cocktail, onClick}) =>
    <div id={cocktail.id} title="cocktail">
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
                cocktail.tags.includes("favorite") ? <img src={recommendationImg} style={recommendationStyle}/> : <div/>
            }
            {
                cocktail.tags.includes("simoneapproved") ?
                    <img src={recommendationSimoneImg} style={recommendationStyle}/> : <div/>
            }
            {
                cocktail.tags.includes("christianapproved") ?
                    <img src={recommendationChristianImg} style={recommendationStyle}/> : <div/>
            }
            {
                cocktail.tags.includes("floraapproved") ?
                    <img src={recommendationFloraImg} style={recommendationStyle}/> : <div/>
            }
            {
                cocktail.tags.includes("sabrinaapproved") ?
                    <img src={recommendationSabrinaImg} style={recommendationStyle}/> : <div/>
            }
            {
                cocktail.tags.includes("floraheavydisapprove") ?
                    <img src={floraheavydisapprove} style={recommendationStyle}/> : <div/>
            }
        </div>
        <div title="cocktail content" style={{
            display: 'flex',
            alignItems: 'flex-start',
            textAlign: 'left'
        }}>
            <div className="pic" title="cocktail picture"

                 style={{minHeight: '150px', maxHeight: '150px', minWidth: '150px', maxWidth: '150px'}}>
                <img onClick={onClick} src={cocktail.picture} alt={cocktail.name} style={{maxHeight: '150px', maxWidth: '150px'}}/>
            </div>
            <div title="ingredients" style={{width: '350px', maxWidth: '400px'}}>
                <ul>
                    {cocktail.ingredients.map((ingredient: any) => <li>
                        {
                            ingredient
                            // <Ingredient ingredient={ingredient}/>
                        }
                    </li>)}
                </ul>
            </div>
            <div title="preparation steps" style={{width: '200px', minWidth: '160px', maxWidth: '200px'}}>
                <PreparationStepList preparationSteps={cocktail.preparationSteps}/>
            </div>
            <div title="garnishes" style={{width: '250px', maxWidth: '250px'}}>
                <ul>
                    {cocktail.garnishes.map((garnish: any) => <li>
                        {garnish}
                    </li>)}
                </ul>
            </div>
            <div title="glasses" style={{minWidth: '80px', maxWidth: '80px'}}>
                <GlassList glasses={cocktail.glasses}/>
            </div>
            <div title="tags" style={{marginLeft: '10px', width: '200px'}}>
                <TagList tags={cocktail.tags}/>
            </div>
        </div>
        <hr style={{marginBlockStart: '20px'}}/>
    </div>;

// @ts-ignore
export const CocktailList: React.FC<any> = ({cocktails, onCocktailClicked}) =>
    <div title="cocktails" style={{paddingBottom: '20px'}}>
        <div style={{display: 'flex', marginTop: '5px', marginLeft: '5px'}}>{cocktails.length} cocktails</div>
        {
            cocktails.map(
                (cocktail: any) => <CocktailListItem onClick={() => onCocktailClicked(cocktail)} cocktail={cocktail}/>
            )
        }
    </div>;

