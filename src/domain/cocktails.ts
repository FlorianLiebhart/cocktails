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
import imgWhiterussian from './images/whiterussian.png';
import imgOldfashioned from './images/oldfashioned.png';
import imgMrswizzle from './images/mrswizzle.png';
import imgBloodymary from './images/bloodymary.png';
import imgSexonthebeach from './images/sexonthebeach.png';
import imgDaiquiri from './images/daiquiri.png';
import imgElpresidente from './images/elpresidente.png';
import imgCaipirinha from './images/caipirinha.png';
import imgPinacolada from './images/pinacolada.png';
import imgTrinidadsour from './images/trinidadsour.png';
import imgAperolspritz from './images/aperolspritz.png';
import imgSaturn from './images/saturn.png';
import imgMojito from './images/mojito.png';
import imgAmarettosour from './images/amarettosour.png';
import imgAmericano from './images/americano.png';
import imgBoulevardier from './images/boulevardier.png';
import imgMillionaire from './images/millionaire.png';
import imgBillionaire from './images/billionaire.png';
import imgCoffeeandcigarettes from './images/coffeeandcigarettes.png';


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
    ingredients_guest: [
        "Bourbon/Scotch Whisky",
        "Lemon",
        "Egg white",
        "bitters"
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
    ],
    history: [
    ],
    notes: [
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
    ],
    history: [
    ],
    notes: [
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
        "1 Maraschino cherry on bottom of glass",
        "lemon zeste spiral (channel knife)"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "bitter",
        "sour",
        "favorite",
    ],
    history: [
    ],
    notes: [
    ]
};

const maitai = {
    name: "Mai Tai",
    picture: imgMaitai,
    ingredients: [
        "2cl Smith n Cross",
        "2cl Demarara Rum (e.g. El Dorado 8 year",
        "2cl Abuelo",
        "3cl Lime juice",
        "22ml Orgeat",
        "15ml Cointreau/Dry Curacao"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_OPEN_POUR
    ],
    garnishes: [
        "Lime boat with 2 Maraschino cherries inside",
        "Mint",
        "lemon zeste spiral (channel knife)"
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
    ],
    history: [
    ],
    notes: [
    ]
};

const margarita = {
    name: "Margarita",
    picture: imgMargarita,
    ingredients: [
        "5cl silver tequila (e.g. Don Julio Blanco)",
        "2,5cl lime juice",
        "1,5cl Cointreau/Curacao"
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
    ],
    history: [
    ],
    notes: [
    ]
};

const royalbermudayachtclub = {
    name: "Royal Bermuda Yacht Club",
    picture: imgRoyalbermudayachtclub,
    ingredients: [
        "5cl Rum (e.g. El Dorado 5, Appleton Estate, Abuelo, El Dorado 8)",
        "2cl lime juice",
        "15ml Falernum",
        "5ml Curacao"
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
    ],
    history: [
    ],
    notes: [
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
    ],
    history: [
    ],
    notes: [
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
    history: [
    ],
    notes: [
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
    ],
    history: [
    ],
    notes: [
    ]
};

const whiterussian = {
    name: "White Russian",
    picture: imgWhiterussian,
    ingredients: [
        "4cl Vodka",
        "4cl Coffee Liqueur (Mr. Black)",
        "Splash of Heavy Whip Cream",
        "possibly a little (<1cl) Sugar Sirup or Amaretto"
    ],
    preparationSteps: [
        PREP_BUILD,
        "Stir Vodka and Coffee Liqueur on ice in glass until cold",
        "Shake cream until heavy and pour on top",
    ],
    garnishes: [
        "Maraschino Cherries",
        "maybe nutmeg or chocolate on top"

    ],
    glasses: [
        GLASS_LOWBALL
    ],
    tags: [
        "Coffee",
        "creamy"
    ],
    history: [
    ],
    notes: [
    ]
};

const oldfashioned = {
    name: "Old-Fashioned",
    picture: imgOldfashioned,
    ingredients: [
        "8ml Demarara Sirup",
        "6cl Bourbon (Woodford Reserve or 4 Roses. Also works with Scotch (Tagavulin))",
        "2 good dashes of Angostura Bitters",
        "Orange zeste twist"
    ],
    preparationSteps: [
        PREP_BUILD,
        "Build with big ball of ice"
    ],
    garnishes: [
        "Orange zeste"
    ],
    glasses: [
        GLASS_LOWBALL
    ],
    tags: [
        "classic",
        "strong",
        "spirit-forward"
    ],
    history: [
    ],
    notes: [
    ]
};

const mrswizzle = {
    name: "Mr Swizzle",
    picture: imgMrswizzle,
    ingredients: [
        "4,5cl Demerara Rum (zB. El Dorado)",

    ],
    preparationSteps: [
        PREP_BUILD
    ],
    garnishes: [
        "lemon garnish (channel knife?)"
    ],
    glasses: [
        GLASS_HIGHBALL
    ],
    tags: [
        "coffee",
        "refreshing"
    ],
    history: [
    ],
    notes: [
        "Kaffeenote kommt schön, aber nicht aufdringlich zur Geltung. So wie die Zitrone. Erfrischend, sommerlich, gut!"
    ]
};

const bloodymary = {
    name: "Bloody Mary",
    picture: imgBloodymary,
    ingredients: [
        "half a celery stem (muddle)",
        "100ml tomato juice",
        "5cl Vodka",
        "10-15 ml lemon juice",
        "6 dashes worcetershire",
        "6 dashes tabasco",
        "1 barspoon of honey sirup",
        "1 punch (celer) salt & pepper"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        "Carefully pour back and forth in shaker on ice for it not to get foamy"
    ],
    garnishes: [
        "Celery",
        "Rosmary/Thume branch",
        "Olive",
        "fried bacon",
        "Tomate",
        "possibly mini-burger or sandwich :)"
    ],
    glasses: [
        GLASS_HIGHBALL
    ],
    tags: [
        "savory",
        "salty",
        "spicy",
        "fancy"
    ],
    history: [
    ],
    notes: [
        "Source: https://www.youtube.com/watch?v=9bvEJx4PsUM"
    ]
};

const sexonthebeach = {
    name: "Sex on the Beach",
    picture: imgSexonthebeach,
    ingredients: [
        "3cl Orange juice",
        "1,5cl Peach liqueur",
        "3cl Vodka",
        "3cl Cranberry juice"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_BUILD,
        "shake or build; cranberry juice last"
    ],
    garnishes: [
        "Orange wedge",
        "Maraschino Cherry",
        "Maybe umbrella"
    ],
    glasses: [
        GLASS_HIGHBALL
    ],
    tags: [
        "new",
        "refreshing",
        "sweet"
    ],
    history: [
    ],
    notes: [
        "Source: https://www.youtube.com/watch?v=xufc7RzP-W8"
    ]
};

const daiquiri = {
    name: "Daiquiri",
    picture: imgDaiquiri,
    ingredients: [
        "6cl white rum",
        "2cl lime juice",
        "1cl sugar sirup",
        "1 lime zeste into shaker"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN,
        "wet short very hard and a bit longer than you should! Dillution is important here!"
    ],
    garnishes: [
        "lime wheel or garnish"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "new"
    ],
    history: [
    ],
    notes: [
    ]
};

const elpresidente = {
    name: "El Presidente",
    picture: imgElpresidente,
    ingredients: [
        "4,5cl Lillet Blanc (or Blanc Vermouth)",
        "4,5cl Cuban Rum (or Demarara or Plantation 5 or Abuelo or El Dorado or white)",
        "7ml Dry Curacao",
        "1 barspoon Grenadine",
        "Orange twist"
    ],
    preparationSteps: [
        PREP_STIR,
        PREP_SINGLE_STRAIN
    ],
    garnishes: [
        "long Orange zeste (channel knife)",
        "Maraschino Cherry"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "a bit like manhattan",
        "strong",
        "solid",
        "spirit-forward",
        "showcases the rum"
    ],
    history: [
    ],
    notes: [
        "Source: How to drink: https://www.youtube.com/watch?v=_O_TCeL_gV0&t=769s"
    ]
};

const caipirinha = {
    name: "Caipirinha",
    picture: imgCaipirinha,
    ingredients: [
        "1 lime",
        "15ml Sugar Sirup",
        "5-6cl Cachaca (best: Novo Fogo Silver)"
    ],
    preparationSteps: [
        PREP_BUILD,
        PREP_MUDDLE,
        "cut lime in eighths; remove white, muddle very hard in glass, esp. the peel",
        "fill with ice and heavy shake in glass (or shaker)",
        PREP_WET_SHAKE

    ],
    garnishes: [
        "Mint or basil"
    ],
    glasses: [
        GLASS_LOWBALL
    ],
    tags: [
        "refreshing",
        "sour"
    ],
    history: [
    ],
    notes: [
    ]
};

const pinacolada = {
    name: "Pina Colada",
    picture: imgPinacolada,
    ingredients: [
        "70ml Pinapple juice",
        "30g Coconut cream (70% Fruchtfleisch (so pretty thick) from Edeka",
        "15ml lime juice (so that it's not so creamy but fresher",
        "1cl Orgeat",
        "1cl Falernum",
        "5cl Rum (any)"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        "crushingly hard wet shake",
        "can be served in real pineapple :-)"
    ],
    garnishes: [
        "pineapple",
        "mint",
        "coconut rim",
        "umbrella"
    ],
    glasses: [
        GLASS_TIKI,
        GLASS_HIGHBALL
    ],
    tags: [
        "sweet",
        "refreshing",
        "tiki"
    ],
    history: [
    ],
    notes: [
    ]
};

const trinidadsour = {
    name: "Trinidad Sour",
    picture: imgTrinidadsour,
    ingredients: [
        "30ml Orgeat",
        "30ml Angostura Bitters",
        "15ml 100 Proof Rye Whisky (e.g. Rittenhouse)",
        "22,5ml Lemon juice"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN
    ],
    garnishes: [
        "nothing",
        "maybe Mint or lemon zeste"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "wow",
        "divine",
        "amazing",
        "favorite",
        "sweet",
        "bitter",
        "sour"
    ],
    history: [
    ],
    notes: [
        "https://www.youtube.com/watch?v=_BEaYWQjSu0",
        "could try with an egg white, like how to drink did",
        "Sweet, sour, and bitter wrestle for attention!"
    ]
};

const aperolspritz = {
    name: "Aperol Spritz",
    picture: imgAperolspritz,
    ingredients: [
        "Ice",
        "4cl Aperol",
        "8cl Prosecco (just fill it up)"
    ],
    preparationSteps: [
        PREP_BUILD
    ],
    garnishes: [
        "Orange wheel",
        "maybe mint or rosemary"
    ],
    glasses: [
        GLASS_REDWINE
    ],
    tags: [
        "refreshing",
        "slightly bitter"
    ],
    history: [
    ],
    notes: [
    ]
};

const saturn = {
    name: "Saturn",
    picture: imgSaturn,
    ingredients: [
        "30ml Lemon Juice",
        "15ml Passion Fruit Juice (or puree or liqueur)",
        "15ml Simple Sirup",
        "15ml Orget",
        "15ml Falernum (John D. Taylor's Velvet)",
        "75ml London Dry Gin (Tanqueray)"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_OPEN_POUR,
        "Heavy wet shake and open pour"

    ],
    garnishes: [
        "Lemon peel wrapped around a Maraschino Cherry (like a Saturn)"
    ],
    glasses: [
        GLASS_TIKI,
        GLASS_LOWBALL, 
        GLASS_HIGHBALL
    ],
    tags: [
        "new",
        "tiki"
    ],
    history: [
    ],
    notes: [
        "How to Drink: https://www.youtube.com/watch?v=rt-foO5u2z8"
    ]
};

const mojito = {
    name: "Mojito",
    picture: imgMojito,
    ingredients: [
        "???"
    ],
    preparationSteps: [
        "???"
    ],
    garnishes: [
        "???"
    ],
    glasses: [
        GLASS_HIGHBALL
    ],
    tags: [
        "new",
        "???"
    ],
    history: [
    ],
    notes: [
    ]
};

const amarettosour = {
    name: "Amaretto Sour",
    picture: imgAmarettosour,
    ingredients: [
        "4,5cl Amaretto",
        "2,5cl Bourbon. I used Bulleit. But should be higher proof (e.g. Barrel Proof 100), otherwise too sweet",
        "3cl Lemon juice",
        "8ml sugar sirup (careful, not more, it's already sweet!",
        "15ml egg white (1/2 egg)"
    ],
    preparationSteps: [
        PREP_DRY_SHAKE,
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN
    ],
    garnishes: [
        "1 Maraschino Cherry on stick in drink",
        "with Angostura Bitters Hearts in circle around"
    ],
    glasses: [
        GLASS_NICKANDNORA,
        GLASS_LOWBALL
    ],
    tags: [
        "good, but a bit too sweet. I prefer original Whisky Sour",
        "sweet"
    ],
    history: [
    ],
    notes: [
    ]
};

const americano = {
    name: "Americano",
    picture: imgAmericano,
    ingredients: [
        "4-5cl Campari",
        "4-5cl sweet red Vermouth (e.g. Cocchi)",
        "80ml soda water"
    ],
    preparationSteps: [
        PREP_BUILD,
        "pour Campari and Vermouth on ice in collins for it to get cold, fill up with water"
    ],
    garnishes: [
        "Orange wheel"
    ],
    glasses: [
        GLASS_HIGHBALL,
        GLASS_LOWBALL
    ],
    tags: [
        "new",
        "light",
        "low-proof"
    ],
    history: [
    ],
    notes: [
        "https://www.youtube.com/watch?v=lgy6vEX_hQg&t=362s"
    ]
};

const boulevardier = {
    name: "Boulevardier",
    picture: imgBoulevardier,
    ingredients: [
        "4cl Bourbon",
        "4cl sweet red Vermouth",
        "2cl Campari"
    ],
    preparationSteps: [
        PREP_BUILD
    ],
    garnishes: [
        "Orange zeste"
    ],
    glasses: [
        GLASS_LOWBALL
    ],
    tags: [
        "new"
    ],
    history: [
    ],
    notes: [
    ]
};

const millionaire = {
    name: "Millionaire",
    picture: imgMillionaire,
    ingredients: [
        "6cl Bourbon",
        "15ml Lemon juice",
        "22ml Grand Marnier (or Curacao or Cointreau)",
        "8ml Absinth",
        "15ml Grenadine",
        "15ml egg white"
    ],
    preparationSteps: [
        PREP_DRY_SHAKE,
        PREP_WET_SHAKE
    ],
    garnishes: [
        "grated nutmeg on top of foam"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "new"
    ],
    history: [
    ],
    notes: [
        "Source: Steve the Bartender: https://www.youtube.com/watch?v=8J8Sw_HseWQ"
    ]
};

const billionaire = {
    name: "Billionaire",
    picture: imgBillionaire,
    ingredients: [
        "6cl Bourbon (high proof). e.g. Bulleit",
        "3cl Lemon juice",
        "15ml Campari",
        "15ml Simple Sirup",
        "8ml Absinthe bitters (or just Absinthe+maybe Angostura+Chocolate Bitters)"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN
    ],
    garnishes: [
        "Lemon wheel at border of glass"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "love it",
        "liquorice",
        "very dry bitter",
        "tart",
        "dark",
        "earthy",
        "dry",
        "sour"
    ],
    history: [
    ],
    notes: [
        "https://www.youtube.com/watch?v=rt-foO5u2z8"
    ]
};

const coffeeandcigarettes = {
    name: "Coffee and Cigarettes",
    picture: imgCoffeeandcigarettes,
    ingredients: [
        "6cl Scotch Islay Whisky (Caol Ila 12y, Bowmore, Talisker, Lagavulin,..) just a bit of smoke",
        "15ml Coffee Liqueur",
        "5ml sweet red Vermouth",
        "2 dashes of Chocolate Bitters"
    ],
    preparationSteps: [
        PREP_STIR,
        PREP_SINGLE_STRAIN
    ],
    garnishes: [
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "new"
    ],
    history: [
    ],
    notes: [
        "Source: Steve the Bartender: https://www.youtube.com/watch?v=crVAp5WIgXo"
    ]
};




const cocktails = [
    whiskysour, 
    negroni, 
    aviation, 
    maitai, 
    margarita, 
    royalbermudayachtclub, 
    bloodandsand,
    manhattan, 
    penicillin,
    whiterussian,
    oldfashioned,
    mrswizzle,
    bloodymary,
    sexonthebeach,
    daiquiri,
    elpresidente,
    caipirinha,
    pinacolada,
    trinidadsour,
    aperolspritz,
    saturn,
    //mojito,
    amarettosour,
    americano,
    boulevardier,
    millionaire,
    billionaire,
    coffeeandcigarettes
].sort((a, b) => a.name.localeCompare(b.name))



export default cocktails;