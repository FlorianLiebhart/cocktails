import React from "react";
import mix_dry_shake from "../icons/steps/mix_dry_shake.png";
import mix_wet_shake from "../icons/steps/mix_wet_shake.png";
import single_strain from "../icons/steps/strain_single.png";
import mix_build from "../icons/steps/mix_stir.png";
import mix_stir from "../icons/steps/mix_stir.png";
import open_pour from "../icons/steps/pour.png";
import fine_strain from "../icons/steps/strain_fine.png";
import empty_image from "../icons/steps/empty.png";
import muddle from "../icons/steps/muddle.png";

const picturesMap: any = {
    DRY_SHAKE: mix_dry_shake,
    WET_SHAKE: mix_wet_shake,
    BUILD: mix_build,
    STIR: mix_stir,
    OPEN_POUR: open_pour,
    FINE_STRAIN: fine_strain,
    SINGLE_STRAIN: single_strain,
    MUDDLE: muddle
}

const labelsMap: any = {
    DRY_SHAKE: 'Dry shake',
    WET_SHAKE: 'Wet shake',
    BUILD: 'Build',
    STIR: "Stir",
    OPEN_POUR: 'Open pour',
    FINE_STRAIN: 'Fine strain',
    SINGLE_STRAIN: 'Single strain',
    MUDDLE: 'Muddle'
}

function findInLabelsMap(step: any): any {
    if(labelsMap[step] == null)
        return step;
    else 
        return labelsMap[step];
}

function findInPicturesMap(step: any): any {
    if(picturesMap[step] == null)
        return empty_image;
    else 
        return picturesMap[step];
}

// @ts-ignore
export const PreparationStepList = ({preparationSteps}) => 
  <div>
    {
      preparationSteps.map((step: any) =>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{height: 48, width: 48, padding: 5}}>
            <img alt={findInLabelsMap(step)} style={{maxWidth: 48, maxHeight: 48, padding: 5}} src={findInPicturesMap(step)}/>
          </div>
          <div>&nbsp;{findInLabelsMap(step)}</div>
        </div>
    )}
  </div>;