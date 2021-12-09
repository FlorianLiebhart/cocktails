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
import aviationImg from './images/aviation.png';
import maitaiImg from './images/maitai.png';


const whiskySour = {
    name: "Whisky Sour",
    picture: whiskySourImg,
    ingredients: [
        "6cl Whisky (4cl Bourbon, zB. Bulleit, 2cl LaPhroaigh)",
        "2cl Lemon Juice",
        "1,5cl sugar sirup",
        "15ml egg white",
        "1-2 dashes bitters",
        "Lemon twist"
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
        "favorite"
    ]
};


const negroni = {
    name: "Negroni",
    picture: negroniImg,
    ingredients: [
        "4cl Gin (Tanqueray, Needle)",
        "4cl Sweet red Vermouth",
        "2cl Campari",
        "2-3 dashes orange bitters",
        "Orange twist"
    ],
    preparationSteps: [
        SINGLE_STRAIN
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

const aviation = {
    name: "Aviation",
    picture: aviationImg,
    ingredients: [
        "45ml Gin (Tanqueray)",
        "10ml Lemon juice",
        "15ml Maraschino Liqueur",
        "5ml Violet Liqueur",
        "Lemon twist"
    ],
    preparationSteps: [
        STIR
    ],
    garnishes: [
        "1 Maraschino on bottom of glass"
    ],
    glasses: [
        NICKANDNORA_GLASS
    ],
    tags: [
        "bitter",
        "sour",
        "favorite",
    ]
};

const maitai = {
    name: "Mai tai",
    picture: maitaiImg,
    ingredients: [
        "2cl Smith n Cross",
        "2cl Demarara Rum (e.g. El Dorado 8 year",
        "2cl Abuelo",
        "3cl Lime juice",
        "22ml Orgeat",
        "15ml Dry Curaçau"
    ],
    preparationSteps: [
        WET_SHAKE,
        OPEN_POUR
    ],
    garnishes: [
        "Lime boat with 2 Maraschino cherries inside",
        "Mint"
    ],
    glasses: [
        TIKI_GLASS
    ],
    tags: [
        "favorite",
        "strong",
        "rum", 
        "fancy",
        "tiki"
    ]
};


const cocktails = [whiskySour, negroni, aviation, maitai];


export default cocktails;