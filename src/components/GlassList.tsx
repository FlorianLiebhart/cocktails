import React from "react";

import tiki from "../icons/glasses/tiki.png";
import champagne from "../icons/glasses/champagne.png";
import coop from "../icons/glasses/coop.png";
import highball from "../icons/glasses/highball.png";
import lowball from "../icons/glasses/lowball.png";
import margarita from "../icons/glasses/margarita.png";
import martini from "../icons/glasses/martini.png";
import mule from "../icons/glasses/mule.png";
import nickandnora from "../icons/glasses/nickandnora.png";
import redwine from "../icons/glasses/redwine.png";
import shot from "../icons/glasses/shot.png";



const glassesMap: any = {
  GLASS_TIKI: tiki,
  GLASS_CHAMPAGNE: champagne,
  GLASS_COOP: coop,
  GLASS_HIGHBALL: highball,
  GLASS_LOWBALL: lowball,
  GLASS_MARGARITA: margarita,
  GLASS_MARTINI: martini,
  GLASS_MULE: mule,
  GLASS_NICKANDNORA: nickandnora,
  GLASS_REDWINE: redwine,
  GLASS_SHOT: shot
}
// @ts-ignore
export const GlassList = ({glasses}) => 
  <div>
      {
        glasses.map((glass: any) => 
          <div style={{display: 'flex', alignItems: 'center', marginLeft: '10px', marginBottom: '10px'}}>
            <img alt={glass} style={{width: 48, height: 48, padding: 0}} src={glassesMap[glass]}/>
          </div>
        )
      }
  </div>;