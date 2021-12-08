import mix_dry_shake from "../icons/steps/mix_dry_shake.png";
import mix_wet_shake from "../icons/steps/mix_wet_shake.png";
import single_strain from "../icons/steps/mix_wet_shake.png";
import mix_build from "../icons/steps/mix_stir.png";
import mix_stir from "../icons/steps/mix_stir.png";
import open_pour from "../icons/steps/pour.png";
import fine_strain from "../icons/steps/strain_fine.png";
import React from "react";

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
export const PreparationStepsList = ({preparationSteps}) => <div>
    {preparationSteps.map((step: any) =>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <img alt={labelsMap[step]} style={{width: 48, height: 48, padding: 5}} src={picturesMap[step]}/>
            <div>&nbsp;{labelsMap[step]}</div>
        </div>
    )}
</div>;