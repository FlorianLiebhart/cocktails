import React from "react";

import mix_dry_shake from '../icons/steps/mix_dry_shake.png';
import mix_wet_shake from '../icons/steps/mix_wet_shake.png';
import single_strain from '../icons/steps/mix_wet_shake.png';
import mix_build from '../icons/steps/mix_stir.png';
import mix_stir from '../icons/steps/mix_stir.png';
import open_pour from '../icons/steps/pour.png';
import fine_strain from '../icons/steps/strain_fine.png';

const picturesMap: any = {
    DRY_SHAKE: mix_dry_shake,
    WET_SHAKE: mix_wet_shake,
    BUILD: mix_build,
    STIR: mix_stir,
    OPEN_POUR: open_pour,
    FINE_STRAIN: fine_strain,
    SINGLE_STRAIN: single_strain
}

const labelsMap: any = {
    DRY_SHAKE: 'Dry shake',
    WET_SHAKE: 'Wet shake',
    BUILD: 'Build',
    STIR: "Stir",
    OPEN_POUR: 'Open pour',
    FINE_STRAIN: 'Fine strain',
    SINGLE_STRAIN: 'Single strain'
}


// @ts-ignore
const PreparationStepsList = ({preparationSteps}) => <div>
    {preparationSteps.map((step: any) =>
        <div style={{display: 'flex', alignItems: 'center'}}>

            <img style={{width: 48, height: 48}} src={picturesMap[step]}/>
            <div>&nbsp;{labelsMap[step]}</div>
        </div>
    )}
</div>;


const CocktailListItem: React.FC<any> = ({cocktail}) => <div>
    <div style={{
        display: 'flex',
        alignItems: 'flex-start'
    }}>
        <h1>
            {cocktail.name}
        </h1>
    </div>
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    }}>
        <div>
            <ul>
                {cocktail.ingredients.map((ingredient: any) => <li>
                    {ingredient}
                </li>)}
            </ul>
        </div>
        <div>

            <PreparationStepsList preparationSteps={cocktail.preparationSteps}/>
        </div>
        <div>
            <ul>
                {cocktail.garnishes.map((ingredient: any) => <li>
                    {ingredient}
                </li>)}
            </ul>
        </div>
        <div>
            <ul>
                {cocktail.glasses.map((ingredient: any) => <li>
                    {ingredient}
                </li>)}
            </ul>
        </div>
    </div>
</div>;


const CocktailsList: React.FC<any> = ({cocktails}) => <>

    {cocktails.map((cocktail: any) => <CocktailListItem cocktail={cocktail}/>)}
</>;


export default CocktailsList;
