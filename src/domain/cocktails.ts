import {
    PREP_DRY_SHAKE,
    PREP_WET_SHAKE,
    PREP_BUILD,
    PREP_STIR,
    PREP_OPEN_POUR,
    PREP_FINE_STRAIN,
    PREP_SINGLE_STRAIN,
    PREP_MUDDLE
} from "./preparationSteps";

import {
    GLASS_TIKI,
    GLASS_CHAMPAGNE,
    GLASS_COOP,
    GLASS_HIGHBALL,
    GLASS_LOWBALL,
    GLASS_MARGARITA,
    GLASS_MARTINI,
    GLASS_MULE,
    GLASS_NICKANDNORA,
    GLASS_REDWINE,
    GLASS_SHOT
} from "./glasses";

import imgWhiskySour from './images/whiskysour.png';
import imgNegroni from './images/negroni.png';
import imgAviation from './images/aviation.png';
import imgMaitai from './images/maitai.png';
import imgMargarita from './images/margarita.png';
import imgRoyalbermudayachtclub from './images/royalbermudayachtclub.png';
import imgBloodandsand from './images/bloodandsand.png';
import imgManhattan from './images/manhattan.png';
import imgPenicillin from './images/penicillin.png';

const whiskysour = {
    name: "Whisky (Boston) Sour",
    picture: imgWhiskySour,
    ingredients: [
        "6cl Whisky (4cl Bourbon, zB. Bulleit, 2cl LaPhroaigh)",
        "2cl Lemon Juice",
        "1,5cl sugar sirup",
        "15ml egg white",
        "1-2 dashes bitters",
        "Lemon twist"
    ],
    preparationSteps: [
        PREP_DRY_SHAKE,
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN
    ],
    garnishes: [
        "Lemon Zeste",
        "2 Maraschino cherries",
    ],
    glasses: [
        GLASS_NICKANDNORA,
        GLASS_LOWBALL
    ],
    tags: [
        "sour",
        "favorite"
    ]
};


const negroni = {
    name: "Negroni",
    picture: imgNegroni,
    ingredients: [
        "4cl Gin (Tanqueray, Needle)",
        "4cl Sweet red Vermouth",
        "2cl Campari",
        "2-3 dashes orange bitters",
        "Orange twist"
    ],
    preparationSteps: [
        PREP_SINGLE_STRAIN
    ],
    garnishes: [
        "Orange zeste"
    ],
    glasses: [
        GLASS_LOWBALL
    ],
    tags: [
        "bitter"
    ]
};

const aviation = {
    name: "Aviation",
    picture: imgAviation,
    ingredients: [
        "45ml Gin (Tanqueray)",
        "10ml Lemon juice",
        "15ml Maraschino Liqueur",
        "5ml Violet Liqueur",
        "Lemon twist"
    ],
    preparationSteps: [
        PREP_STIR
    ],
    garnishes: [
        "1 Maraschino on bottom of glass"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "bitter",
        "sour",
        "favorite",
    ]
};

const maitai = {
    name: "Mai tai",
    picture: imgMaitai,
    ingredients: [
        "2cl Smith n Cross",
        "2cl Demarara Rum (e.g. El Dorado 8 year",
        "2cl Abuelo",
        "3cl Lime juice",
        "22ml Orgeat",
        "15ml Cointreau/Dry Curaçao"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_OPEN_POUR
    ],
    garnishes: [
        "Lime boat with 2 Maraschino cherries inside",
        "Mint"
    ],
    glasses: [
        GLASS_TIKI
    ],
    tags: [
        "favorite",
        "strong",
        "rum", 
        "fancy",
        "tiki"
    ]
};

const margarita = {
    name: "Margarita",
    picture: imgMargarita,
    ingredients: [
        "5cl silver tequila (e.g. Don Julio Blanco)",
        "2,5cl lime juice",
        "1,5cl Cointreau/Curaçao"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN
    ],
    garnishes: [
        "dried lime wheel",
        "salt rim"
    ],
    glasses: [
        GLASS_MARGARITA,
        GLASS_NICKANDNORA
    ],
    tags: [
        "mezcal",
        "tequila",
        "sour"
    ]
};

const royalbermudayachtclub = {
    name: "Royal Bermuda Yacht Club",
    picture: imgRoyalbermudayachtclub,
    ingredients: [
        "5cl Rum (e.g. El Dorado 5, Appleton Estate, Abuelo, El Dorado 8)",
        "2cl lime juice",
        "15ml Falernum",
        "5ml Curaçao"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN
    ],
    garnishes: [
        "dried lime wheel"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "sour",
        "refreshing",
        "Trader Vic"
    ]
};

const bloodandsand = {
    name: "Blood and Sand",
    picture: imgBloodandsand,
    ingredients: [
        "4,5cl Scotch Whisky (3cl normal + 1,5cl smoky; e.g. Monkey Shoulder + LaPhroaigh)",
        "2cl (blood) orange juice",
        "1cl lemon juice",
        "1,5cl Vermouth",
        "1,5l Cherry (e.g. Heering)",
        "1cl Cointreau Blood Orange",
        "1 dash Angostura Orange Bitters"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN
    ],
    garnishes: [
        "nothing",
        "possibly a orange/lemon zeste and maraschino cherries"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "sour",
        "refreshing"
    ]
};

const manhattan = {
    name: "Manhattan",
    picture: imgManhattan,
    ingredients: [
        "6cl Rye Whisky (or Bourbon. Also good with Scotch though!)",
        "3cl sweet red Vermouth",
        "2 good dashes Anogstura Bitters",
        "1 dash of Angostura Orange Bitters",
        "twist of lemon zeste"
    ],
    preparationSteps: [
        PREP_STIR,
        PREP_SINGLE_STRAIN
    ],
    garnishes: [
        "3 Maraschino cherries on a pick inside glass"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "classic",
        "strong",
        "solid",
        "spirit-forward",
        "love it"
    ],
    note: [
        "A 'Perfect Manhattan' is a Manhattan with half sweet and half dry Vermouth"
    ]
};

const penicillin = {
    name: "Penicillin",
    picture: imgPenicillin,
    ingredients: [
        "4 coin slices of ginger (muddle in Shaker)",
        "6cl blended Scotch Whisky (Monkey Shoulder), mild, smooth",
        "7,5ml LaPhroaigh Whisky 10y (big peaty flavor, smoky",
        "22,5ml Lemon juice",
        "22,5ml 3:1 honey sirup"
    ],
    preparationSteps: [
        PREP_MUDDLE,
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN,
        "On big Ice ball in Nick and Nora glass; or in Tumbler"
    ],
    garnishes: [
        "Candied ginger"
    ],
    glasses: [
        GLASS_NICKANDNORA,
        GLASS_LOWBALL
    ],
    tags: [
        "sour",
        "spicy",
        "hot",
        "amazing",
        "favorite",
        "modern classic 2005",
        "refreshing"
    ]
};


// whiterussian.png
// oldfashioned.png
// mrswizzle.png
// bloodymary.png
// sexonthebeach.png
// daiquiri.png
// elpresidente.png
// caipirinha.png
// pinacolada.png
// trinidadsour.png
// aperolspritz.png
// saturn.png
// mojito.png


const cocktails = [
    whiskysour, 
    negroni, 
    aviation, 
    maitai, 
    margarita, 
    royalbermudayachtclub, 
    bloodandsand,
    manhattan, 
    penicillin
];


export default cocktails;