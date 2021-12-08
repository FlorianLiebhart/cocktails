import React from "react";
import lowball from "../icons/glasses/lowball.png";
import nickandnora from "../icons/glasses/nickandnora.png";
import tiki from "../icons/glasses/tiki.png";

const glassesMap: any = {
    LOWBALL_GLASS: lowball,
    NICKANDNORA_GLASS: nickandnora,
    TIKI_GLASS: tiki
}
// @ts-ignore
export const GlassesList = ({glasses}) => <div style={{display: 'flex'}}>
    {glasses.map((glass: any) => <img style={{width: 32, height: 32, padding: 4}} src={glassesMap[glass]}/>)}
</div>;