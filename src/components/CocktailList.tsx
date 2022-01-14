import React from "react";
import {PreparationStepList} from "./PreparationStepList";
import {GlassList} from "./GlassList";
import {TagList} from "./TagList";
import {PictureComponent} from "./PictureComponent";
import {IngredientComponent} from "./IngredientComponent";
import {TagsComponent} from "./TagsComponent";
import {TitleComponent} from "./TitleComponent";


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
        <TitleComponent cocktail={cocktail}/>
        <div title="cocktail content" style={{
            display: 'flex',
            alignItems: 'flex-start',
            textAlign: 'left'
        }}>
            <PictureComponent cocktail={cocktail} onClick={onClick}/>
            <IngredientComponent cocktail={cocktail} ingredients={cocktail.ingredients}/>
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
            <TagsComponent cocktail={cocktail}/>
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

