import {
    DRY_SHAKE,
    WET_SHAKE,
    BUILD,
    STIR,
    OPEN_POUR,
    FINE_STRAIN,
    SINGLE_STRAIN
} from "./preparationSteps";

import {
    LOWBALL_GLASS,
    NICKANDNORA_GLASS,
    TIKI_GLASS
} from "./glasses";

import whiskySourImg from './images/whiskysour.png';
import negroniImg from './images/negroni.png';


const whiskySour = {
    name: "Whisky Sour",
    picture: whiskySourImg,
    ingredients: [
        "6cl Whisky (4cl Bourbon, zB. Bulleit, 2cl LaPhroaigh)",
        "2cl Lemon Juice",
        "1,5cl sugar sirup",
        "15ml egg white",
        "1-2 dashes bitters"
    ],
    preparationSteps: [
        DRY_SHAKE,
        WET_SHAKE,
        FINE_STRAIN
    ],
    garnishes: [
        "Lemon Zeste",
        "2 Maraschino cherries",
    ],
    glasses: [
        NICKANDNORA_GLASS,
        LOWBALL_GLASS
    ],
    tags: [
        "sour",
        "favorite",
        "amazing",
        "sweet",
        "Whisky"
    ]
};


const negroni = {
    name: "Negroni",
    picture: negroniImg,
    ingredients: [
        "4cl Gin (Tanqueray, Needle)",
        "4cl Sweet red Vermouth",
        "2cl Campari",
        "2-3 dashes orange bitters"
    ],
    preparationSteps: [
        SINGLE_STRAIN,
        "Light it on Fire!! :))"
    ],
    garnishes: [
        "Orange zeste"
    ],
    glasses: [
        LOWBALL_GLASS
    ],
    tags: [
        "bitter"
    ]
};


const cocktails = [whiskySour, negroni];


export default cocktails;