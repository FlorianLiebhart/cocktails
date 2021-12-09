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
export const GlassList = ({glasses}) => 
  <div>
      {
        glasses.map((glass: any) => 
          <div style={{display: 'flex', alignItems: 'center'}}>
            <img alt={glass} style={{width: 48, height: 48, padding: 0}} src={glassesMap[glass]}/>
          </div>
        )
      }
  </div>;