import React from "react";

import imgMix_dry_shake from "../icons/steps/mix_dry_shake.png";
import imgMix_wet_shake from "../icons/steps/mix_wet_shake.png";
import imgSingle_strain from "../icons/steps/strain_single.png";
import imgMix_build from "../icons/steps/mix_build.png";
import imgMix_stir from "../icons/steps/mix_stir.png";
import imgOpen_pour from "../icons/steps/pour.png";
import imgFine_strain from "../icons/steps/strain_fine.png";
import imgEmpty from "../icons/steps/empty.png";
import imgMuddle from "../icons/steps/muddle.png";

const picturesMap: any = {
    DRY_SHAKE: imgMix_dry_shake,
    WET_SHAKE: imgMix_wet_shake,
    BUILD: imgMix_build,
    STIR: imgMix_stir,
    OPEN_POUR: imgOpen_pour,
    FINE_STRAIN: imgFine_strain,
    SINGLE_STRAIN: imgSingle_strain,
    MUDDLE: imgMuddle
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
        return imgEmpty;
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
          <div style={{paddingLeft: '5px'}}>{findInLabelsMap(step)}</div>
        </div>
    )}
  </div>;