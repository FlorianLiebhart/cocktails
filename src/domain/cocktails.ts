import {DRY_SHAKE, FINE_STRAIN, WET_SHAKE} from "./preparationSteps";
import {NICKANDNORA_GLASS, LOWBALL_GLASS} from "./glasses";

import whiskySourSrc from './images/whiskysour.png';


const whiskySour = {
    name: "Whisky Sour",
    picture: whiskySourSrc,
    ingredients: [
        "whisky 6cl",
        "...",
    ],
    preparationSteps: [
        DRY_SHAKE,
        WET_SHAKE,
        FINE_STRAIN
    ],
    garnishes: [
        "lemon zeste",
        "...",
    ],
    glasses: [
        NICKANDNORA_GLASS,
        LOWBALL_GLASS
    ]
};


const negroni = {
    name: "Negroni",
    picture: whiskySourSrc,
    ingredients: [
        "gim 6cl",
        "...",
    ],
    preparationSteps: [
        DRY_SHAKE,
        WET_SHAKE,
        FINE_STRAIN
    ],
    garnishes: [
        "orange",
        "...",
    ],
    glasses: [
        NICKANDNORA_GLASS,
        LOWBALL_GLASS
    ]
};


const cocktails = [whiskySour, negroni];


export default cocktails;