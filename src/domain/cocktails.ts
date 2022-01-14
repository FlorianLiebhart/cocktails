import {
    PREP_BUILD,
    PREP_DRY_SHAKE,
    PREP_FINE_STRAIN,
    PREP_MUDDLE,
    PREP_OPEN_POUR,
    PREP_SINGLE_STRAIN,
    PREP_STIR,
    PREP_WET_SHAKE
} from "./preparationSteps";

import {GLASS_HIGHBALL, GLASS_LOWBALL, GLASS_MARGARITA, GLASS_NICKANDNORA, GLASS_REDWINE, GLASS_TIKI} from "./glasses";

import imgWhiskySour from './images/cocktails/whiskysour.png';
import imgNegroni from './images/cocktails/negroni.png';
import imgAviation from './images/cocktails/aviation.png';
import imgMaitai from './images/cocktails/maitai.png';
import imgMargarita from './images/cocktails/margarita.png';
import imgRoyalbermudayachtclub from './images/cocktails/royalbermudayachtclub.png';
import imgBloodandsand from './images/cocktails/bloodandsand.png';
import imgManhattan from './images/cocktails/manhattan.png';
import imgPenicillin from './images/cocktails/penicillin.png';
import imgWhiterussian from './images/cocktails/whiterussian.png';
import imgOldfashioned from './images/cocktails/oldfashioned.png';
import imgMrswizzle from './images/cocktails/mrswizzle.png';
import imgBloodymary from './images/cocktails/bloodymary.png';
import imgSexonthebeach from './images/cocktails/sexonthebeach.png';
import imgDaiquiri from './images/cocktails/daiquiri.png';
import imgElpresidente from './images/cocktails/elpresidente.png';
import imgCaipirinha from './images/cocktails/caipirinha.png';
import imgPinacolada from './images/cocktails/pinacolada.png';
import imgTrinidadsour from './images/cocktails/trinidadsour.png';
import imgAperolspritz from './images/cocktails/aperolspritz.png';
import imgSaturn from './images/cocktails/saturn.png';
import imgMojito from './images/cocktails/mojito.png';
import imgAmarettosour from './images/cocktails/amarettosour.png';
import imgAmericano from './images/cocktails/americano.png';
import imgBoulevardier from './images/cocktails/boulevardier.png';
import imgMillionaire from './images/cocktails/millionaire.png';
import imgBillionaire from './images/cocktails/billionaire.png';
import imgCoffeeandcigarettes from './images/cocktails/coffeeandcigarettes.png';
import imgLastword from './images/cocktails/lastword.png';
import imgFinalward from './images/cocktails/finalward.png';
import imgDublinminstrel from './images/cocktails/dublinminstrel.png';
import imgNakedandfamous from './images/cocktails/nakedandfamous.png';
import imgDarknstormy from './images/cocktails/darknstormy.png';
import imgNucleardaiquiri from './images/cocktails/nucleardaiquiri.png';
import imgCorpsereviver from './images/cocktails/corpsereviver.png';
import imgBijou from './images/cocktails/bijou.png';
import imgSazerac from './images/cocktails/sazerac.png';
import imgDelicioussour from './images/cocktails/delicioussour.png';
import imgBeesknees from './images/cocktails/beesknees.png';
import imgCosmopolitan from './images/cocktails/cosmopolitan.png';
import imgMargaritanegra from './images/cocktails/margaritanegra.png';
import imgMrbalihai from './images/cocktails/mrbalihali.png';
import imgColdbrewshakerato from './images/cocktails/coldbrewshakerato.png';
import imgZombie from './images/cocktails/zombie.png';
import imgMercilessvirgin from './images/cocktails/mercilessvirgin.png';
import imgMomisette from './images/cocktails/momisette.png';
import imgArtichokehold from './images/cocktails/artichokehold.png';
import imgEastside from './images/cocktails/eastside.png';
import imgGordonsbreakfast from './images/cocktails/gordonsbreakfast.png';
import imgRamosginfizz from './images/cocktails/ramosginfizz.png';

const whiskysour = {
    id: "whiskysour",
    name: "Whisky Sour (Boston)",
    picture: imgWhiskySour,
    ingredients: [
        "6cl Whisky (4cl Bourbon, zB. Bulleit, 2cl LaPhroaigh)",
        "2cl Lemon Juice",
        "1,5cl Sugar Sirup",
        "15ml Egg White",
        "1-2 Dashes Bitters (or heart drops in egg white foam :))",
        "Lemon twist"
    ],
    ingredientsGuest: [
        "Bourbon Whisky",
        "Smoky Islay Single Malt Whisky",
        "Fresh Lemon Juice",
        "Sugar",
        "Egg White",
        "Bitters"
    ],
    preparationSteps: [
        PREP_DRY_SHAKE,
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN
    ],
    garnishes: [
        "Lemon Zeste",
        "2 Maraschino Cherries"
    ],
    glasses: [
        GLASS_NICKANDNORA,
        GLASS_LOWBALL
    ],
    tags: [
        "sour",
        "favorite"
    ],
    history: [],
    notes: []
};


const negroni = {
    id: "negroni",
    name: "Negroni",
    picture: imgNegroni,
    ingredients: [
        "4cl Gin (Tanqueray, Needle)",
        "4cl Sweet Red Vermouth",
        "2cl Campari",
        "optional: 2 Dashes Orange Bitters",
        "Orange Twist"
    ],
    ingredientsGuest: [
        "Gin",
        "Sweet Red Vermouth",
        "Campari",
        "Orange Bitters",
        "Orange Twist"
    ],
    preparationSteps: [
        PREP_STIR,
        PREP_SINGLE_STRAIN
    ],
    garnishes: [
        "Orange zeste"
    ],
    glasses: [
        GLASS_LOWBALL
    ],
    tags: [
        "bitter",
        "favorite",
        "like a stronger, more bitter version of Aperol Spritz"
    ],
    history: [],
    notes: []
};

const aviation = {
    id: "aviation",
    name: "Aviation",
    picture: imgAviation,
    ingredients: [
        "45ml Gin (Tanqueray, or Illusionist :)))",
        "15ml Maraschino Liqueur",
        "10ml Lemon Juice",
        "5ml Violet Liqueur (10 dashes)",
        "Lemon twist"
    ],
    ingredientsGuest: [
        "Gin",
        "Maraschino Liqueur",
        "Fresh Lemon Juice",
        "Violet Liqueur",
        "Lemon Twist"
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
    history: [],
    notes: []
};

const maitai = {
    id: "maitai",
    name: "Mai Tai",
    picture: imgMaitai,
    ingredients: [
        "2cl Smith and Cross",
        "2cl Demarara Rum (e.g. El Dorado 8 year",
        "2cl Abuelo",
        "3cl Lime juice",
        "22ml Orgeat",
        "15ml Cointreau/Dry Curacao"
    ],
    ingredientsGuest: [
        "Jamaican Rum",
        "Demarara Rum",
        "Blended Aged Rum",
        "Fresh Lime Juice",
        "Orgeat",
        "Orange Liqueur"
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
        "tiki",
        "favorite",
        "strong",
        "rum",
        "fancy",
        "Trader Vic",
        "simoneapproved",
        "christianapproved",
        "floraapproved"
    ],
    history: [
        "1944 by Trader Vic (aka Victor Bergeron)",
        "Erickson: https://www.youtube.com/watch?v=gYJsPE1demY&t=197s",
        "Behind the bar: https://www.youtube.com/watch?v=VQZ2pxn4rwo",
        "How to drink (I took this one): https://www.youtube.com/watch?v=_O_TCeL_gV0&t=769s"


    ],
    notes: []
};

const margarita = {
    id: "margarita",
    name: "Margarita",
    picture: imgMargarita,
    ingredients: [
        "5cl Silver Tequila (e.g. Don Julio Blanco) Mezcal",
        "2,5cl lime juice",
        "1,5cl Cointreau/Curacao"
    ],
    ingredientsGuest: [
        "Silver Tequila",
        "Fresh Lime Juice",
        "Orange Liqueur"
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
        "sour",
        "salty",
        "favorite"
    ],
    history: [],
    notes: []
};

const royalbermudayachtclub = {
    id: "royalbermudayachtclub",
    name: "Royal Bermuda Yacht Club",
    picture: imgRoyalbermudayachtclub,
    ingredients: [
        "5cl Rum (e.g. El Dorado 5, Appleton Estate, Abuelo, El Dorado 8)",
        "2cl lime juice",
        "15ml Falernum",
        "5ml Curacao"
    ],
    ingredientsGuest: [
        "Aged Demarara Rum",
        "Fresh Lime Juice",
        "Falernum",
        "Orange Liqueur"
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
        "tiki",
        "sour",
        "refreshing",
        "Trader Vic"
    ],
    history: [],
    notes: []
};

const bloodandsand = {
    id: "bloodandsand",
    name: "Blood and Sand",
    picture: imgBloodandsand,
    ingredients: [
        "4,5cl Scotch Whisky (3cl normal + 1,5cl smoky; e.g. Monkey Shoulder + LaPhroaigh)",
        "2cl (blood) orange juice",
        "1cl Lemon Juice",
        "1,5cl Vermouth",
        "1,5l Cherry (e.g. Heering)",
        "1cl Cointreau Blood Orange",
        "1 dash Angostura Orange Bitters"
    ],
    ingredientsGuest: [
        "Blend of Scotch Whisky",
        "Islay Scotch Whisky",
        "Fresh (Blood) Orange Juice",
        "Fresh Lemon Juice",
        "Sweet Red Vermouth",
        "Cherry",
        "Blood Orange Liqueur",
        "Orange Bitters"
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
        "fruity",
        "sweet",
        "refreshing",
        "christianapproved"
    ],
    history: [],
    notes: []
};

const manhattan = {
    id: "manhattan",
    name: "Manhattan",
    picture: imgManhattan,
    ingredients: [
        "6cl Rye Whisky (Rittenhouse) (or Bourbon. Also good with Scotch though!)",
        "3cl Sweet Red Vermouth",
        "2 good dashes Anogstura Bitters",
        "1 dash of Angostura Orange Bitters",
        "Lemon twist"
    ],
    ingredientsGuest: [
        "Rye Whisky",
        "Sweet Red Vermouth",
        "Bitters",
        "Orange Bitters",
        "Lemon Twist"
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
    history: [],
    notes: [
        "A 'Perfect Manhattan' is a Manhattan with half sweet and half dry Vermouth",
        "One of the best Manhattan is with Rittenhouse, acc. to How to drink (Episode that tried to kill me: https://www.youtube.com/watch?v=_QsCrcLG6Mo)"
    ]
};

const penicillin = {
    id: "penicillin",
    name: "Penicillin",
    picture: imgPenicillin,
    ingredients: [
        "4 coin slices of ginger (muddle in Shaker)",
        "6cl Blended Scotch Whisky (Monkey Shoulder), mild, smooth",
        "7,5ml LaPhroaigh Whisky 10y (big peaty flavor, smoky",
        "22,5ml Lemon Juice",
        "22,5ml 3:1 honey sirup"
    ],
    ingredientsGuest: [
        "Fresh Ginger",
        "Blended Scotch Whisky",
        "Smoky Islay Single Malt Whisky",
        "Fresh Lemon Juice",
        "Honey"
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
        "refreshing",
        "smoky"
    ],
    history: [],
    notes: []
};

const whiterussian = {
    id: "whiterussian",
    name: "White Russian",
    picture: imgWhiterussian,
    ingredients: [
        "4cl Vodka",
        "4cl Coffee Liqueur (Mr. Black)",
        "Splash of Heavy Whip Cream",
        "possibly a little (<1cl) Sugar Sirup or Amaretto"
    ],
    ingredientsGuest: [
        "Vodka",
        "Coffee Liqueur",
        "Splash of Heavy Whip Cream",
        "optional: Sugar or Amaretto"
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
    history: [],
    notes: []
};

const oldfashioned = {
    id: "oldfashioned",
    name: "Old-Fashioned",
    picture: imgOldfashioned,
    ingredients: [
        "6cl Bourbon Whisky (Woodford Reserve or 4 Roses. Also works with Scotch (Tagavulin))",
        "8ml Demarara Sirup",
        "2 good dashes of Angostura Bitters",
        "Orange zeste twist"
    ],
    ingredientsGuest: [
        "Bourbon Whisky",
        "Brown Sugar",
        "Bitters",
        "Orange Twist"
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
    history: [],
    notes: []
};

const mrswizzle = {
    id: "mrswizzle",
    name: "Mr Swizzle",
    picture: imgMrswizzle,
    ingredients: [
        "4,5cl Demerara Rum (zB. El Dorado)",
        "22,5ml Mr. Black Coffee Liqueur",
        "1,5cl Falernum",
        "1,5cl Honey Sirup",
        "1,5cl Lemon Juice",
        "2 dashes Orange bitters"
    ],
    ingredientsGuest: [
        "Aged Demerara Rum",
        "Coffee Liqueur",
        "Falernum",
        "Fresh Lemon Juice",
        "Honey",
        "Orange Bitters"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_OPEN_POUR,
        "Extremely hard wet shake, open pour in collins glass, fill with ice, serve with a straw"
    ],
    garnishes: [
        "lemon garnish (e.g. with channel knive)"
    ],
    glasses: [
        GLASS_HIGHBALL
    ],
    tags: [
        "coffee",
        "refreshing"
    ],
    history: [],
    notes: [
        "Kaffeenote kommt schön, aber nicht aufdringlich zur Geltung. So wie die Zitrone. Erfrischend, sommerlich, gut!"
    ]
};

const bloodymary = {
    id: "bloodymary",
    name: "Bloody Mary",
    picture: imgBloodymary,
    ingredients: [
        "half a celery stem (muddle)",
        "100ml tomato juice",
        "5cl Vodka",
        "10-15 ml Lemon Juice",
        "6 dashes worcetershire",
        "6 dashes tabasco",
        "1 barspoon of honey sirup",
        "1 punch (celer) salt & pepper"
    ],
    ingredientsGuest: [
        "Tomato Juice",
        "Vodka",
        "Fresh Lemon Juice",
        "Hot Sauce",
        "Celery",
        "Honey",
        "Spices"
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
        "fancy",
        "simoneapproved"
    ],
    history: [],
    notes: [
        "Source: https://www.youtube.com/watch?v=9bvEJx4PsUM"
    ]
};

const sexonthebeach = {
    id: "sexonthebeach",
    name: "Sex on the Beach",
    picture: imgSexonthebeach,
    ingredients: [
        "3cl Vodka",
        "3cl Orange juice",
        "3cl Cranberry juice",
        "1,5cl Peach liqueur"
    ],
    ingredientsGuest: [
        "Vodka",
        "Fresh Orange Juice",
        "Cranberry Juice",
        "Peach Liqueur"
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
        "sweet",
        "fruity",
        "light"
    ],
    history: [],
    notes: [
        "Source: https://www.youtube.com/watch?v=xufc7RzP-W8"
    ]
};

const daiquiri = {
    id: "daiquiri",
    name: "Daiquiri",
    picture: imgDaiquiri,
    ingredients: [
        "6cl white rum",
        "2cl lime juice",
        "1cl sugar sirup",
        "i probably should go 2:1:0,5 instead, but gotta check out..",
        "1 lime zeste into shaker"
    ],
    ingredientsGuest: [
        "White Rum",
        "Fresh Lime Juice",
        "Sugar",
        "Lime Twist"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN,
        "wet shake very hard and a bit longer than you should! Dillution is important here!"
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
    history: [],
    notes: []
};

const elpresidente = {
    id: "elpresidente",
    name: "El Presidente",
    picture: imgElpresidente,
    ingredients: [
        "4,5cl Lillet Blanc (or Blanc Vermouth)",
        "4,5cl Cuban Rum (or Demarara or Plantation 5 or Abuelo or El Dorado or white)",
        "7ml Dry Curacao",
        "1 barspoon Grenadine",
        "Orange Twist"
    ],
    ingredientsGuest: [
        "Lillet Blanc",
        "Aged Demarara Rum",
        "Orange Liqueur",
        "Grenadine",
        "Orange Twist"
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
    history: [],
    notes: [
        "Source: How to drink: https://www.youtube.com/watch?v=_O_TCeL_gV0&t=769s"
    ]
};

const caipirinha = {
    id: "caipirinha",
    name: "Caipirinha",
    picture: imgCaipirinha,
    ingredients: [
        "1 lime",
        "15ml Sugar Sirup",
        "5-6cl Cachaca (best: Novo Fogo Silver)"
    ],
    ingredientsGuest: [
        "Cachaca",
        "Fresh Lime",
        "Sugar"
    ],
    preparationSteps: [
        PREP_BUILD,
        PREP_MUDDLE,
        PREP_WET_SHAKE,
        "cut lime in eighths; remove white, muddle very hard in glass, esp. the peel. Fill with ice and heavy shake in glass (or shaker)"

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
    history: [],
    notes: []
};

const pinacolada = {
    id: "pinacolada",
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
    ingredientsGuest: [
        "Pinapple Juice",
        "Rum",
        "Coconut Cream",
        "Fresh Lime Juice",
        "Orgeat",
        "Falernum"
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
        "umbrella",
        "simoneapproved"
    ],
    glasses: [
        GLASS_TIKI,
        GLASS_HIGHBALL
    ],
    tags: [
        "sweet",
        "refreshing",
        "tiki",
        "simoneapproved"
    ],
    history: [],
    notes: []
};

const trinidadsour = {
    id: "trinidadsour",
    name: "Trinidad Sour",
    picture: imgTrinidadsour,
    ingredients: [
        "30ml Orgeat",
        "30ml Angostura Bitters",
        "15ml 100 Proof Rye Whisky (e.g. Rittenhouse)",
        "22,5ml Lemon Juice"
    ],
    ingredientsGuest: [
        "Angostura Bitters",
        "Orgeat",
        "Fresh Lemon Juice",
        "Rye Whisky"
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
        "sour",
        "sweet, bitter, and sour wrestle for attention!",
        "Battle of the Gods",
        "sabrinaapproved"
    ],
    history: [],
    notes: [
        "https://www.youtube.com/watch?v=_BEaYWQjSu0",
        "could try with an egg white, like how to drink did",
        "Sweet, sour, and bitter wrestle for attention!"
    ]
};

const aperolspritz = {
    id: "aperolspritz",
    name: "Aperol Spritz",
    picture: imgAperolspritz,
    ingredients: [
        "Ice",
        "4cl Aperol",
        "8cl Prosecco (just fill it up)"
    ],
    ingredientsGuest: [
        "Prosecco",
        "Aperol",
        "Orange"
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
    history: [],
    notes: []
};

const saturn = {
    id: "saturn",
    name: "Saturn",
    picture: imgSaturn,
    ingredients: [
        "75ml London Dry Gin (Tanqueray)",
        "30ml Lemon Juice (maybe try with lime instead next time)",
        "15ml Passion Fruit Juice (or puree or liqueur. I bought it at Biowelt Schlessmann)",
        "10ml Sugar Sirup (maybe only 5ml, used to be 15ml, still a bit sweet)",
        "15ml Orgeat",
        "15ml Falernum (John D. Taylor's Velvet)"
    ],
    ingredientsGuest: [
        "London Dry Gin",
        "Fresh Lemon Juice",
        "Passion Fruit Juice",
        "Orgeat",
        "Falernum",
        "Sugar"
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
        "awesome",
        "fruity",
        "sweet",
        "Combination of Gin and Tiki is weird and wonderful",
        "great tiki",
        "favorite",
        "simoneapproved"
    ],
    history: [],
    notes: [
        "How to Drink: https://www.youtube.com/watch?v=rt-foO5u2z8"
    ],
    price: "4,5€ (50+50+50+50+240)"
};

const mojito = {
    id: "mojito",
    name: "Mojito",
    picture: imgMojito,
    ingredients: [
        "~8-10 mint leaves",
        "1 lime",
        "2cl (Demarara) Sugar Sirup (or 2 Tbsp of Sugar (white or brown)",
        "6cl White Rum",
        "60-90ml sparkling water"
    ],
    ingredientsGuest: [
        "White Rum",
        "Fresh Lime Juice",
        "Sugar",
        "Mint"
    ],
    preparationSteps: [
        PREP_BUILD,
        PREP_MUDDLE,
        "cut the lime in edges, remove middle, muddle and swirl with mint, sugar, rum in the glass with a barspoon, gently press it (dont rip apart)",
        "Fill with ice, stir for a long time",
        "top off with sparklingwater; serve with a straw"
    ],
    garnishes: [
        "mint twig"
    ],
    glasses: [
        GLASS_HIGHBALL
    ],
    tags: [
        "refreshing",
        "favorite"
    ],
    history: [],
    notes: [
        "Source: Anders Erickson: https://www.youtube.com/watch?v=KMypSCazyRw&t=54s"
    ]
};

const amarettosour = {
    id: "amarettosour",
    name: "Amaretto Sour",
    picture: imgAmarettosour,
    ingredients: [
        "4,5cl Amaretto",
        "2,5cl Bourbon Whisky. I used Bulleit. But should be higher proof (e.g. Barrel Proof 100), otherwise too sweet",
        "3cl Lemon Juice",
        "8ml sugar sirup (careful, not more, it's already sweet!",
        "15ml Egg White (1/2 egg)"
    ],
    ingredientsGuest: [
        "Amaretto",
        "Bourbon Whisky",
        "Fresh Lemon Juice",
        "Egg White",
        "Sugar"
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
        "sweet",
        "sour"
    ],
    history: [],
    notes: []
};

const americano = {
    id: "americano",
    name: "Americano",
    picture: imgAmericano,
    ingredients: [
        "4-5cl Sweet Red Vermouth (e.g. Cocchi)",
        "4-5cl Campari",
        "80ml soda water"
    ],
    ingredientsGuest: [
        "Sweet Red Vermouth",
        "Campari",
        "Soda Water"
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
    history: [],
    notes: [
        "https://www.youtube.com/watch?v=lgy6vEX_hQg&t=362s"
    ]
};

const boulevardier = {
    id: "boulevardier",
    name: "Boulevardier",
    picture: imgBoulevardier,
    ingredients: [
        "4cl Bourbon Whisky",
        "4cl Sweet Red Vermouth",
        "2cl Campari"
    ],
    ingredientsGuest: [
        "Bourbon Whisky",
        "Sweet Red Vermouth",
        "Campari"
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
    history: [],
    notes: []
};

const millionaire = {
    id: "millionaire",
    name: "Millionaire",
    picture: imgMillionaire,
    ingredients: [
        "6cl Bourbon Whisky",
        "15ml Lemon Juice",
        "22ml Grand Marnier (or Curacao or Cointreau)",
        "8ml Absinth",
        "15ml Grenadine (use less. I think this is why it was so disgusting. Maybe just 5ml)",
        "15ml egg white"
    ],
    ingredientsGuest: [
        "Bourbon Whisky",
        "Orange Liqueur",
        "Fresh Lemon Juice",
        "Grenadine",
        "Egg White",
        "Absinth"
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
        "bad",
        "furry",
        "a little girl's bubble gum",
        "too sweet",
        "stays on your tongue forever",
        "worst drink I've had so far",
        "nutmeg totally unnecessary",
        "rm -rf millionare",
        "floraheavydisapprove"
    ],
    history: [],
    notes: [
        "Source: Steve the Bartender: https://www.youtube.com/watch?v=8J8Sw_HseWQ"
    ]
};

const billionaire = {
    id: "billionaire",
    name: "Billionaire",
    picture: imgBillionaire,
    ingredients: [
        "6cl Bourbon Whisky (high proof). e.g. Bulleit",
        "3cl Lemon Juice",
        "15ml Campari",
        "15ml Sugar Sirup",
        "8ml Absinthe bitters (or just Absinthe+maybe Angostura+Chocolate Bitters)"
    ],
    ingredientsGuest: [
        "Bourbon Whisky",
        "Fresh Lemon Juice",
        "Campari",
        "Sugar",
        "Absinthe"
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
        "sour",
        "favorite"
    ],
    history: [],
    notes: [
        "https://www.youtube.com/watch?v=rt-foO5u2z8"
    ]
};

const coffeeandcigarettes = {
    id: "coffeeandcigarettes",
    name: "Coffee and Cigarettes",
    picture: imgCoffeeandcigarettes,
    ingredients: [
        "6cl Scotch Islay Whisky (Caol Ila 12y, Bowmore, Talisker, Lagavulin,..) just a bit of smoke",
        "15ml Coffee Liqueur",
        "5ml Sweet Red Vermouth",
        "2 dashes of Chocolate Bitters"
    ],
    ingredientsGuest: [
        "Scotch Islay Whisky",
        "Coffee Liqueur",
        "Sweet Red Vermouth",
        "Chocolate Bitters"
    ],
    preparationSteps: [
        PREP_STIR,
        PREP_SINGLE_STRAIN
    ],
    garnishes: [],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "new"
    ],
    history: [],
    notes: [
        "Source: Steve the Bartender: https://www.youtube.com/watch?v=crVAp5WIgXo"
    ]
};

const lastword = {
    id: "lastword",
    name: "Last Word",
    picture: imgLastword,
    ingredients: [
        "2cl Dry Gin (e.g. Botanist, for me, maybe Needle)",
        "2cl Green Chartreuse",
        "2cl Maraschino Liqueur (e.g. Luxardo)",
        "2cl Lime Juice"
    ],
    ingredientsGuest: [
        "Dry Gin",
        "Green Chartreuse",
        "Maraschino LIqueur",
        "Fresh Lime Juice"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN
    ],
    garnishes: [
        "Maraschino Cherry"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "new",
        "1925"
    ],
    history: [],
    notes: [
        "Source: Anders Erickson: https://www.youtube.com/watch?v=jRcApnG9Hck",
        "also, How to drink: https://www.youtube.com/watch?v=WaZb_BSy4dI&t=179s"
    ]
};

const finalward = {
    id: "finalward",
    name: "Final Ward",
    picture: imgFinalward,
    ingredients: [
        "2cl Rye Whisky",
        "2cl Green Chartreuse",
        "2cl Maraschino Liqueur (e.g. Luxardo)",
        "2cl Lemon Juice",
        "you can substitue rye with irish whisky, and lemon with lime, and you get a 'Dublin Minstrel'"
    ],
    ingredientsGuest: [
        "Rye Whisky",
        "Green Chartreuse",
        "Maraschino Liqueur",
        "Fresh Lemon Juice"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN
    ],
    garnishes: [
        "Maraschino Cherry"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "new"
    ],
    history: [],
    notes: [
        "from legendary barman Phil Ward of NYC’s ancient and venerated Pegu Club"
    ]
};

const nakedandfamous = {
    id: "nakedandfamous",
    name: "Naked & Famous",
    picture: imgNakedandfamous,
    ingredients: [
        "2cl Mezcal",
        "2cl Yellow Chartreuse (if only green: maybe 1/3 less and replace by honey sirup",
        "2cl Aperol",
        "2cl Lime Juice",
        "it's low quantity for a nick n nora. Maybe use iceball"
    ],
    ingredientsGuest: [
        "Mezcal",
        "Yellow Chartreuse",
        "Aperol",
        "Fresh Lime Juice"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN
    ],
    garnishes: [
        "nothing, or dried lime wheel"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "favorite",
        "sour",
        "perfectly balanced lime",
        "tequila tastes not too priminent but well noticable",
        "just the right amount of sweet",
        "refreshing",
        "pretty pink color",
        "nicely, lightly tart",
        "floraapproved"
    ],
    history: [],
    notes: []
};

const darknstormy = {
    id: "darknstormy",
    name: "Dark 'n Stormy",
    picture: imgDarknstormy,
    ingredients: [
        "120-150ml Ginger Beer",
        "5cl Gosling's Black Seal Rum",
        "10ml lime juice (may be bottled)",
        "lime wedge"
    ],
    ingredientsGuest: [
        "Ginger Beer",
        "Black Rum",
        "Lime"
    ],
    preparationSteps: [
        PREP_BUILD,
        "fill collins glass with ice, fill 4/5 with ginger beer, fill in lime juice, put rum on top and add a lime wedge"
    ],
    garnishes: [
        "Lime wedge"
    ],
    glasses: [
        GLASS_HIGHBALL
    ],
    tags: [
        "refreshing",
        "sweet",
        "light"
    ],
    history: [],
    notes: []
};

const nucleardaiquiri = {
    id: "nucleardaiquiri",
    name: "Nuclear Daiquiri",
    picture: imgNucleardaiquiri,
    ingredients: [
        "30ml Overproof White Rum ('Wray & Nephew Overproof'; or half half smith n cross and Anogstura white rum)",
        "22,5ml Green Chartreuse",
        "30ml Lime Juice",
        "7,5ml Falernum",
        "really needs the stronger rum",
        "I tried with ~10ml Falernum and 3cl lime, but I think I can stick to the original recipe"

    ],
    ingredientsGuest: [
        "Overproof White Rum",
        "Green Chartreuse",
        "Fresh Lime Juice",
        "Falernum"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN
    ],
    garnishes: [
        "No garnish can withstand the awesome power of the Nuclear Daiquiri."
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "sour",
        "very tart",
        "very strong",
        "very good, tastes like herbs",
        "2005, Gregor De Gruyther",
        "favorite"
    ],
    history: [],
    notes: [
        "Educated Barfly: https://www.youtube.com/watch?v=Q1N3Y1ATjS8",
        "very good discussion about proportions: https://cocktailnerds.de/t/nuclear-daiquiri-diskussion/596/25"
    ]
};


const corpsereviver = {
    id: "corpsereviver",
    name: "Corpse Reviver No. 2",
    picture: imgCorpsereviver,
    ingredients: [
        "22,5ml Dry Gin (e.g. Botanist)",
        "22,5ml Lillet Blanc (but best with Cocchi Americano)",
        "22,5ml Orange Liqueur (best Grand Manier (cuz fruitier), or Curacao) ",
        "22,5ml Lemon Juice",
        "2 Dashes Absinth",
        "optional: a barspoon of Maraschino Liqueur"

    ],
    ingredientsGuest: [
        "Dry Gin",
        "Lillet Blanc",
        "Orange Liqueur",
        "Fresh Lemon Juice",
        "Absinthe Rinse"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN
    ],
    garnishes: [
        "Maybe Spray of Absinth",
        "maybe Maraschino Cherry"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "classic",
        "pretty sweet",
        "fruity",
        "orange",
        "cherry (esp with Luxardo),"
    ],
    history: [],
    notes: [
        "Anders Erickson: https://www.youtube.com/watch?v=bGxOcLRCBWk"
    ]
};

const bijou = {
    id: "bijou",
    name: "Bijou",
    picture: imgBijou,
    ingredients: [
        "30ml Gin (possibly Needle)",
        "30ml Sweet Red Vermouth",
        "22,5ml Green Chartreuse",
        "2 Dashes Orange Bitters",
        "it's low quantity for a nick n nora"
    ],
    ingredientsGuest: [
        "Gin",
        "Sweet Red Vermouth",
        "Green Chartreuse",
        "Orange Bitters"
    ],
    preparationSteps: [
        PREP_STIR,
        PREP_SINGLE_STRAIN,
        "stir for a long time :)"
    ],
    garnishes: [
        "One Marachino Cherry (needs the cherry!)"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "beautiful clear color",
        "spirit-forward, but just a touch",
        "slighty tart",
        "slight hints of honey (due to the Vermouth)",
        "smooth"
    ],
    history: [],
    notes: [
        "Jamie Gordon",
        "In French, menans 'Jewel', because of the colors the different liquors: Seethrough: Diamand, Green: Emerald, Red: Ruby"
    ]
};

const sazerac = {
    id: "sazerac",
    name: "Sazerac",
    picture: imgSazerac,
    ingredients: [
        "45ml Rye Whisky (or 60ml if I dont have Cognac)",
        "15ml Cognac (possibly also just all-rye)",
        "7,5ml Sugar Sirup",
        "4 dashes of Peychaud's Bitters",
        "1 dash of Angostura Bitters",
        "1-2 dashes (rinse) of Absinthe (make sure not to use too much - pretty prominent)",
        "lemon twist"
    ],
    ingredientsGuest: [
        "Rye Whisky",
        "Cognac (optional)",
        "Bitters",
        "Sugar",
        "Absinthe"
    ],
    preparationSteps: [
        PREP_STIR,
        PREP_SINGLE_STRAIN,
        "just pour in a lowball glass until ~1/3 full. No ice."
    ],
    garnishes: [
        "Lemon Zeste inside"
    ],
    glasses: [
        GLASS_LOWBALL
    ],
    tags: [
        "spirit-forward",
        "classic",
        "absithne very prominent",
        "is not bad. Similar to old-fashioned, but not quite as good"
    ],
    history: [],
    notes: [
        "Jamie Gordon",
        "In French, menans 'Jewel', because of the colors the different liquors: Seethrough: Diamand, Green: Emerald, Red: Ruby",
        "How to drink: https://www.youtube.com/watch?v=2Sgek_isG88"
    ]
};

const delicioussour = {
    id: "delicioussour",
    name: "Delicious Sour",
    picture: imgDelicioussour,
    ingredients: [
        "5 cl Apple Brandy (Calvados Papidoux V.S.O.P. or Laird's Applejack)",
        "3 cl Lemon Juice",
        "1,5 cl Peach Liqueur (don't use more!. It was really tastable already)",
        "1,5 cl sugar sirup (maybe a little bit less sweet (maybe 1cl sugar sirup))",
        "half an egg white",
        "Lemon Twist",
        "Mabye a dash of bitters"
    ],
    ingredientsGuest: [
        "Apple Brandy",
        "Peach Liqueur",
        "Fresh Lemon Juice",
        "Sugar",
        "Egg White",
        "Lemon"
    ],
    preparationSteps: [
        PREP_DRY_SHAKE,
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN,
        "prepare like a whisky sour"
    ],
    garnishes: [
        "Maraschino Cherry",
        "Lemon Zeste"
    ],
    glasses: [
        GLASS_LOWBALL,
        GLASS_NICKANDNORA
    ],
    tags: [
        "sour",
        "sweet",
        "fruity",
        "delicious",
        "favorite",
        "tastes like apple, peach pretty prominent as well",
        "christianapproved"
    ],
    history: [],
    notes: [
        "source: https://mixology.eu/delicious-sour-cocktail-calvados/"
    ]
};

const beesknees = {
    id: "beesknees",
    name: "Bee's Knees",
    picture: imgBeesknees,
    ingredients: [
        "6cl Gin",
        "3cl Honey Sirup",
        "1,5cl Lemon Juice"
    ],
    ingredientsGuest: [
        "Gin",
        "Honey",
        "Fresh Lemon Juice"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN
    ],
    garnishes: [
        "Lemon Wheel"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "new"
    ],
    history: [],
    notes: [
        "source: https://mixology.eu/delicious-sour-cocktail-calvados/"
    ]
};

const cosmopolitan = {
    id: "cosmopolitan",
    name: "Cosmopolitan",
    picture: imgCosmopolitan,
    ingredients: [
        "60 ml Citrus Vodka",
        "15 ml Lime Juice",
        "30 ml Orange Liqueur (Curacao)",
        "30 ml Cranberry Juice (if you use pure juice, maybe: just 15ml juice; and total of 15ml simple sirup, shake a bit longer for more dillution)",
        "8 ml Simple Sirup (15ml if pure cranberry juice)",
        "Optional: Barspoon of Maraschino Liqueur (Luxardo) ",
        "Garnish with a Lime Wheel"
    ],
    ingredientsGuest: [
        "Vodka",
        "Orange Liqueur ",
        "Cranberry Juice",
        "Fresh Lime Juice",
        "Sugar",
        "Maraschino Liqueur"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN
    ],
    garnishes: [
        "Lemon Wheel"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "pretty sweet",
        "girly",
        "fruity",
        "chewing gum",
        "1990s"
    ],
    history: [],
    notes: [
        "source: https://www.youtube.com/watch?v=vKv8cnh2ocU&t=333s"
    ]
};

const dublinminstrel = {
    id: "dublinminstrel",
    name: "Dublin Minstrel",
    picture: imgDublinminstrel,
    ingredients: [
        "2cl Irish Whisky",
        "2cl Green Chartreuse",
        "2cl Maraschino Liqueur (e.g. Luxardo)",
        "2cl Lime Juice",
        "(variation of Final Ward)"
    ],
    ingredientsGuest: [
        "Irish Whisky",
        "Green Chartreuse",
        "Maraschino Liqueur",
        "Fresh Lime Juice"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN
    ],
    garnishes: [
        "Lime zeste"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "new"
    ],
    history: [],
    notes: [
        "from legendary barman Phil Ward of NYC’s ancient and venerated Pegu Club"
    ]
};

const margaritanegra = {
    id: "margaritanegra",
    name: "Margarita Negra",
    picture: imgMargaritanegra,
    ingredients: [
        "12 ml Agave Syrup (or Simple Sirup if non-existnet)",
        "30 ml Lime Juice",
        "30 ml Tequila Blanco (e.g. Casamigos, but really any will work) Mezcal",
        "30 ml Mr. Black Coffee Liquor",
        "tajin and salt (if no Tajin, maybe use a few drops of tabasco run around the rim)",
        "benefits from a light dash of chocolate bitters :-)"
    ],
    ingredientsGuest: [
        "Tequila Blanco",
        "Coffee Liquor",
        "Agave Syrup",
        "Fresh Lime Juice"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN,
        "in double rocks glass on one big ice cube"
    ],
    garnishes: [,
        "Rim glass with salt or/and Tajin spice mix",
        "Lime Wheel"
    ],
    glasses: [
        GLASS_LOWBALL
    ],
    tags: [
        "favorite",
        "tastes great with the salt and spicy chily",
        "salty",
        "citrussy",
        "refreshing",
        "coffee",
        "summer",
        "great balance",
        "light",
        "exciting"
    ],
    history: [],
    notes: [
        "source: how to drink: https://www.youtube.com/watch?v=KRzlsE9Y6NU"
    ]
};

const mrbalihai = {
    id: "mrbalihai",
    name: "Mr. Bali Hai",
    picture: imgMrbalihai,
    ingredients: [
        "15ml (Demarara) Sugar Sirup",
        "20ml Lemon Juice (original recipe: 30ml, 15ml sugar. So I think 20ml and 5-10ml is fine)",
        "45ml Pineapple Juice",
        "22ml Coffee Liqueur",
        "45ml Dark/Aged Rum (non-funky) (e.g. El Dorado 8, Plantation 5, Appleton Estate, Abuelo, Gosling",
        "15ml Funky (White) Rum (e.g. Wray & Nephew, Smith and Cross, Appleton; or just other white rum)",
        "benefits from a dash of chocolate bitters"
    ],
    ingredientsGuest: [
        "Dark Rum",
        "White Rum",
        "Pineapple Juice",
        "Coffee Liqueur",
        "Fresh Lemon Juice",
        "Sugar"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_OPEN_POUR
    ],
    garnishes: [,
        "Umbrella, sticked in Orange wedge or Pineapple"
    ],
    glasses: [
        GLASS_TIKI
    ],
    tags: [
        "tiki",
        "mainly rum and coffee, hitns of pineapple",
        "light",
        "not too exciting. If you like coffee + rum -> great"
    ],
    history: [
        "Jeff 'Beachbum' Berry"
    ],
    notes: [
        "source: behind the bar: https://www.youtube.com/watch?v=peneCjz0-Ec",
        "source: how to drink: https://www.youtube.com/watch?v=KRzlsE9Y6NU"
    ]
};

const coldbrewshakerato = {
    id: "coldbrewshakerato",
    name: "Cold Brew Shakerato",
    picture: imgColdbrewshakerato,
    ingredients: [
        "it's like a 'shaken Negroni'",
        "30 ml Fresh Orange Juice",
        "30 ml Campari (maybe use less?, as I also use less in Negroni)",
        "30 ml London Dry Gin (e.g. Tanqueray)",
        "30 ml Mr Black Coffee Liquor",
        "Orange twist"
    ],
    ingredientsGuest: [
        "London Dry Gin",
        "Campari",
        "Coffee Liqueur",
        "Fresh Orange Juice"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN
    ],
    garnishes: [,
        "Orange Zeste"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "pretty dry",
        "coffee",
        "slightly bitter orange coffee aperatif",
        "bright, refreshing",
        "good",
        "definately interesting",
        "like a dark chocolate with orange notes"
    ],
    history: [],
    notes: [
        "source: how to drink: https://www.youtube.com/watch?v=KRzlsE9Y6NU"
    ]
};


const zombie = {
    id: "zombie",
    name: "Zombie",
    picture: imgZombie,
    ingredients: [
        "45ml blended aged rum: Abuelo",
        "45ml Appleton estate/Goslings/Plantation 5",
        "30ml Overproof rum: e.g. Lemon Hart or Hamilton 151 Demarara Rum; or Plantaiton 151 or Smith and Cross, also Wray & Nephew Overproof",
        "15ml Falernum",
        "22ml Fresh Lime Juice",
        "8ml Grapefruit Juice",
        "7ml Cinnamon Sirup",
        "5ml (2 barspoon) Grenadine",
        "1 barspoon Absinthe (careful!)",
        "2 dashes bitters Peychaud's or Angostura"
    ],
    ingredientsGuest: [
        "Aged Rums",
        "Overproof Rum",
        "Falernum",
        "Fresh Lime Juice",
        "Fresh Grapefruit Juice",
        "Cinnamon Sirup",
        "Grenadine",
        "Absinthe",
        "Bitters"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_OPEN_POUR,
        "hard wet shake"
    ],
    garnishes: [,
        "Fresh mint and an Umbrella (maybe grapefruit/lime wedge), cherry, whatever lies around,... Go Crazy. It's a tiki :)"
    ],
    glasses: [
        GLASS_TIKI
    ],
    tags: [
        "new",
        "tiki",
        "ultra strong"
    ],
    history: [],
    notes: [
        "1934 Don the Beachcomber",
        "Jeff 'Beachbum' Berry",
        "source: Anders Erickson: https://www.youtube.com/watch?v=_eCla7H-TA0",
        "source: how to drink: https://www.youtube.com/watch?v=69OEP-kW5aI&t=190s",
        "source: Steve the Bartender: https://www.youtube.com/watch?v=eUy-K0p6sLA"
    ]
};

const mercilessvirgin = {
    id: "mercilessvirgin",
    name: "Merciless Virgin",
    picture: imgMercilessvirgin,
    ingredients: [
        "45ml Blened lightly Aged Rum (maybe Appleton Estate 12y)",
        "15ml Cherry (Heering)",
        "15ml Falernum ",
        "8ml Orange Liqueur (Curacao)",
        "22,5ml Lemon juice",
        "15ml Sparkling water (pour in glass)",
        "a dash of bitters",
        "lemon twist"
    ],
    ingredientsGuest: [
        "Aged Rum",
        "Cherry",
        "Falernum",
        "Orange Liqueur",
        "Fresh Lemon Juice",
        "Bitters"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_OPEN_POUR,
        "hard wet shake"
    ],
    garnishes: [,
        "Maraschino Cherries, Lemon Zeste"
    ],
    glasses: [
        GLASS_TIKI
    ],
    tags: [
        "new",
        "tiki"
    ],
    history: [],
    notes: [
        "Smuggler's Cove",
        "source: cocktailpartyapp; someone did it here: https://www.youtube.com/watch?v=laT5nxxCeKs&t=64s"
    ]
};

const momisette = {
    id: "momisette",
    name: "Momisette",
    picture: imgMomisette,
    ingredients: [
        "45 ml Absinthe",
        "22.5 ml Orgeat",
        "15 ml Lemon Juice",
        "90 ml Sparkling Mineral Water"
    ],
    ingredientsGuest: [
        "Absinthe",
        "Orgeat",
        "Fresh Lemon Juice",
        "Sparkling Mineral Water"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        "Wet shake everything but the water",
        PREP_FINE_STRAIN,
        "Pour cocktail and water on a huge long ice that covers the collins, otherwise the glass will be only 3/4 full",
        "Serve with straw"
    ],
    garnishes: [,
        "Not necessary to garnish mummies. Maybe mint or lemon zeste"
    ],
    glasses: [
        GLASS_HIGHBALL
    ],
    tags: [
        "Momisette = 'little mummy'",
        "tast a lot like anis with a little sweetness in the middle from the orgeat",
        "refreshing",
        "the sparkling water is a must",
        "light",
        "a bit one-dimensional, like non-sweet ouzo",
        "don't like it all that much"
    ],
    history: [],
    notes: [
        "Start making my own Orgeat: https://youtu.be/CvEDhkR6K14",
        "source: Anders Erickson: https://www.youtube.com/watch?v=ABntm6FL8wc"
    ]
};

const artichokehold = {
    id: "artichokehold",
    name: "Artichoke Hold",
    picture: imgArtichokehold,
    ingredients: [
        "15ml Orgeat",
        "15ml Elderflower Sirup",
        "22.5ml Lime Juice",
        "22.5ml Cynar",
        "22.5ml Overproof Jamaican Rum (Smith and Cross, please don't use anything else)",
        "Mint Sprig Garnish"
    ],
    ingredientsGuest: [
        "Overproof Jamaican Rum",
        "Cynar",
        "Elderflower Sirup",
        "Orgeat",
        "Fresh Lime Juice",
        "Mint"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_OPEN_POUR,
        "Shake the living hell out of this drink, into a slush, and open pour in tumbler"
    ],
    garnishes: [,
        "Mint sprig"
    ],
    glasses: [
        GLASS_LOWBALL,
        GLASS_TIKI
    ],
    tags: [
        "fuck yes",
        "wow",
        "favorite",
        "divine",
        "sour",
        "savory",
        "bitter level is just perfect, covers your whole mouth",
        "Oh father, thy light has shone upon me",
        "amazing with the heavily crushed ice in the shaker",
        "mint goes perfectly with it to give it a fresh note",
        "an amazing drink",
        "smith and cross - MUST",
        "perfection.",
        "light",
        "extremely refreshing",
        "I wanted to continue my tasting notes, but it's already all gone now.. :-(",
        "it has already been gone for 10 minutes. But it is still there...",
        "I feel dirty after drinking this",
        "simoneapproved",
        "sabrinaapproved",
        "danielapproved"
    ],
    history: [],
    notes: [
        "source: educated barlfy: https://www.youtube.com/watch?v=Ja3FPq3f9fE"
    ]
};

const eastside = {
    id: "eastside",
    name: "Eastside",
    picture: imgEastside,
    ingredients: [
        "8 Mint leaves",
        "3-4 slices of cucumber",
        "2cl Sugar Sirup",
        "3cl Lime Juice",
        "6cl Gin (Tanqueray or Needle, both fine :))",
        "sweet-sour balance very important, 30ml lime and 20ml sugar should be fine, but I need to play around with it more; maybe less sugar (15ml?) and maybe even less lime",
        "for myself, I'd wanna try 6cl Gin, 25ml Lime, 15ml Sugar Sirup"
    ],
    ingredientsGuest: [
        "Gin",
        "Fresh Lime Juice",
        "Sugar",
        "Cucumber",
        "Mint"
    ],
    preparationSteps: [
        PREP_MUDDLE,
        PREP_WET_SHAKE,
        PREP_FINE_STRAIN,
        "Mint on bottom of shaker, cucumber slices and other stuff on top, lightly muddle, then wet shake + fine strain into Coop; maybe on big Ice"
    ],
    garnishes: [,
        "Cucumber Scroll on a pick"
    ],
    glasses: [
        GLASS_NICKANDNORA
    ],
    tags: [
        "good",
        "sour",
        "cucumber very nice",
        "lightly minty",
        "refreshing"
    ],
    history: [],
    notes: [
        "Sources: Steve the Bartender, Behind the bar, und Educated Barfly: https://www.youtube.com/watch?v=7Co6K-J1Xiw"
    ]
};


const gordonsbreakfast = {
    id: "gordonsbreakfast",
    name: "Gordon's Breakfast",
    picture: imgGordonsbreakfast,
    ingredients: [
        "1 Lime cut into 6 wedges",
        "4-5 Pieces of Cucumber",
        "2cl Simple Syrup",
        "6cl Gin (e.g. Tanqueray or Needle, both fine)",
        "4 dashes Tabasco (but this will be already fiery :)",
        "3 dashes Worcestershire Sauce",
        "bit of salt and pepper"
    ],
    ingredientsGuest: [
        "Gin",
        "Lime",
        "Sugar",
        "Tabasco",
        "Spices",
    ],
    preparationSteps: [
        PREP_MUDDLE,
        PREP_WET_SHAKE,
        PREP_OPEN_POUR,
        "Cut lime into 6 wedges, remove whites",
        "muddle with the other ingredients, wet shake, and open pour (ice crisps are actually nice)"

    ],
    garnishes: [,
        "Fresh Cucumber slices inside"
    ],
    glasses: [
        GLASS_LOWBALL
    ],
    tags: [
        "pretty hot and spicy",
        "savory",
        "sour",
        "extremely refreshing",
        "light",
        "I like it very much!",
        "favorite",
        "favorite for cucumber and spicy cocktail",
        "simoneapproved"
    ],
    history: [],
    notes: [
        "Cocktailpartyapp and Educated Barfly: https://www.youtube.com/watch?v=_Y7WkOuy0Wk"
    ]
};

const ramosginfizz = {
    id: "ramosginfizz",
    name: "Ramos Gin Fizz",
    picture: imgRamosginfizz,
    ingredients: [
        "15 ml Simple Sirup",
        "15 ml Lemon Juice",
        "15 ml Lime Juice",
        "2-3 dashes Orange Blossom Water",
        "30 ml heavy Cream",
        "1 Egg White",
        "60 ml Gin (e.g. dry, Tanqueray, Illusionist (I used it, + 15 dashes of violet), could try Brockmans for once!",
        "few drops of Vanilla extract or fresh vanilla (possibly vanilla flavoured sugar sirup)",
        "50 ml (very cold) carbonated water (add later)"
    ],
    ingredientsGuest: [
        "Gin",
        "Fresh Lemon and Lime Juice",
        "Cream",
        "Egg White",
        "Sugar",
        "Orange Blossom Water",
        "Vanilla"
    ],
    preparationSteps: [
        PREP_WET_SHAKE,
        PREP_OPEN_POUR,
        "Chill all ingredients!",
        "Shake (without the water) with 3 ice cubes the HELL out of it until full dissolve (e.g. 3 minutes), and keep going (maybe even with blender ball)",
        "Fill into highball (no ice); put in freezer for around 10 mins.",
        "make a whole with straw, add a few drops of orange flower water and fill in the water, until the froth sticks out of the glass",
        "serve with straw",
        "can also be blended"
    ],
    garnishes: [,
        "few drops of orange flower water for the scent"
    ],
    glasses: [
        GLASS_HIGHBALL
    ],
    tags: [
        "perfect citrus-cream balance",
        "refreshing",
        "milk-shaky",
        "creamy",
        "sparkly",
        "fizzy",
        "wonderful liquid cloud",
        "citrus from the gin",
        "great texture",
        "boozy ice cream :-)",
        "favorite",
        "sabrinaapproved"
    ],
    history: [],
    notes: [
        "How To drink heavy recommendation: https://www.youtube.com/watch?v=jvf-0xpZ1VM&t=635s"
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
    amarettosour,
    americano,
    boulevardier,
    millionaire,
    billionaire,
    coffeeandcigarettes,
    lastword,
    finalward,
    dublinminstrel,
    nakedandfamous,
    darknstormy,
    nucleardaiquiri,
    corpsereviver,
    bijou,
    sazerac,
    delicioussour,
    beesknees,
    cosmopolitan,
    margaritanegra,
    mrbalihai,
    coldbrewshakerato,
    zombie,
    mercilessvirgin,
    momisette,
    mojito,
    artichokehold,
    eastside,
    gordonsbreakfast,
    ramosginfizz
]//.sort((a, b) => a.name.localeCompare(b.name))

const cocktailsMap: any = {}
cocktails.forEach(cocktail => {
    cocktailsMap[cocktail.id] = cocktail;
});


export default cocktails;

export const getCocktail = (cocktailId: string) => {
    return cocktailsMap[cocktailId];
}


