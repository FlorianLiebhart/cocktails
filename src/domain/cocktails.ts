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
import imgNakedandfamous from './images/cocktails/nakedandfamous.png';
import imgDarknstormy from './images/cocktails/darknstormy.png';
import imgNucleardaiquiri from './images/cocktails/nucleardaiquiri.png';
import imgCorpsereviver from './images/cocktails/corpsereviver.png';
import imgBijou from './images/cocktails/bijou.png';
import imgSazerac from './images/cocktails/sazerac.png';

const whiskysour = {
    id: "cocktail1",
    name: "Whisky (Boston) Sour",
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
        "2 Maraschino Cherries",
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
    id: "cocktail2",
    name: "Negroni",
    picture: imgNegroni,
    ingredients: [
        "Gin (Tanqueray, Needle)",
        "4cl Sweet Red Vermouth",
        "2cl Campari",
        "2-3 Dashes Orange Bitters",
        "Orange Twist"
    ],
    ingredientsGuest: [
        "Gin",
        "Sweet Red Vermouth",
        "Campari",
        "Bitters",
        "Orange Twist"
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
    id: "cocktail3",
    name: "Aviation",
    picture: imgAviation,
    ingredients: [
        "45ml Gin (Tanqueray)",
        "10ml Lemon Juice",
        "15ml Maraschino Liqueur",
        "5ml Violet Liqueur",
        "Lemon twist"
    ],
    ingredientsGuest: [
        "Gin",
        "Fresh Lemon Juice",
        "Maraschino Liqueur",
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
    history: [
    ],
    notes: [
    ]
};

const maitai = {
    id: "cocktail4",
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
        "Trader Vic"
    ],
    history: [
    ],
    notes: [
    ]
};

const margarita = {
    id: "cocktail5",
    name: "Margarita",
    picture: imgMargarita,
    ingredients: [
        "5cl silver tequila (e.g. Don Julio Blanco)",
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
    id: "cocktail6",
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
    history: [
    ],
    notes: [
    ]
};

const bloodandsand = {
    id: "cocktail7",
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
        "refreshing"
    ],
    history: [
    ],
    notes: [
    ]
};

const manhattan = {
    id: "cocktail8",
    name: "Manhattan",
    picture: imgManhattan,
    ingredients: [
        "6cl Rye Whisky (or Bourbon. Also good with Scotch though!)",
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
    history: [
    ],
    notes: [
        "A 'Perfect Manhattan' is a Manhattan with half sweet and half dry Vermouth"
    ]
};

const penicillin = {
    id: "cocktail9",
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
        "refreshing"
    ],
    history: [
    ],
    notes: [
    ]
};

const whiterussian = {
    id: "cocktail10",
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
    history: [
    ],
    notes: [
    ]
};

const oldfashioned = {
    id: "cocktail11",
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
    history: [
    ],
    notes: [
    ]
};

const mrswizzle = {
    id: "cocktail12",
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
    history: [
    ],
    notes: [
        "Kaffeenote kommt schön, aber nicht aufdringlich zur Geltung. So wie die Zitrone. Erfrischend, sommerlich, gut!"
    ]
};

const bloodymary = {
    id: "cocktail13",
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
        "fancy"
    ],
    history: [
    ],
    notes: [
        "Source: https://www.youtube.com/watch?v=9bvEJx4PsUM"
    ]
};

const sexonthebeach = {
    id: "cocktail14",
    name: "Sex on the Beach",
    picture: imgSexonthebeach,
    ingredients: [
        "3cl Orange juice",
        "1,5cl Peach liqueur",
        "3cl Vodka",
        "3cl Cranberry juice"
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
        "sweet"
    ],
    history: [
    ],
    notes: [
        "Source: https://www.youtube.com/watch?v=xufc7RzP-W8"
    ]
};

const daiquiri = {
    id: "cocktail15",
    name: "Daiquiri",
    picture: imgDaiquiri,
    ingredients: [
        "6cl white rum",
        "2cl lime juice",
        "1cl sugar sirup",
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
    id: "cocktail16",
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
    history: [
    ],
    notes: [
        "Source: How to drink: https://www.youtube.com/watch?v=_O_TCeL_gV0&t=769s"
    ]
};

const caipirinha = {
    id: "cocktail17",
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
    history: [
    ],
    notes: [
    ]
};

const pinacolada = {
    id: "cocktail18",
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
    id: "cocktail19",
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
        "Schlacht der Götter"
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
    id: "cocktail20",
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
    history: [
    ],
    notes: [
    ]
};

const saturn = {
    id: "cocktail21",
    name: "Saturn",
    picture: imgSaturn,
    ingredients: [
        "30ml Lemon Juice",
        "15ml Passion Fruit Juice (or puree or liqueur)",
        "15ml Sugar Sirup",
        "15ml Orget",
        "15ml Falernum (John D. Taylor's Velvet)",
        "75ml London Dry Gin (Tanqueray)"
    ],
    ingredientsGuest: [
        "London Dry Gin",
        "Fresh Lemon Juice",
        "Passion Fruit Juice",
        "Orget",
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
    id: "cocktail22",
    name: "Mojito",
    picture: imgMojito,
    ingredients: [
        "???"
    ],
    ingredientsGuest: [
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
    id: "cocktail23",
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
        "sweet"
    ],
    history: [
    ],
    notes: [
    ]
};

const americano = {
    id: "cocktail24",
    name: "Americano",
    picture: imgAmericano,
    ingredients: [
        "4-5cl Campari",
        "4-5cl Sweet Red Vermouth (e.g. Cocchi)",
        "80ml soda water"
    ],
    ingredientsGuest: [
        "Campari",
        "Sweet Red Vermouth",
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
    history: [
    ],
    notes: [
        "https://www.youtube.com/watch?v=lgy6vEX_hQg&t=362s"
    ]
};

const boulevardier = {
    id: "cocktail25",
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
    history: [
    ],
    notes: [
    ]
};

const millionaire = {
    id: "cocktail26",
    name: "Millionaire",
    picture: imgMillionaire,
    ingredients: [
        "6cl Bourbon Whisky",
        "15ml Lemon Juice",
        "22ml Grand Marnier (or Curacao or Cointreau)",
        "8ml Absinth",
        "15ml Grenadine",
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
        "rm -rf millionare"
    ],
    history: [
    ],
    notes: [
        "Source: Steve the Bartender: https://www.youtube.com/watch?v=8J8Sw_HseWQ"
    ]
};

const billionaire = {
    id: "cocktail27",
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
        "sour"
    ],
    history: [
    ],
    notes: [
        "https://www.youtube.com/watch?v=rt-foO5u2z8"
    ]
};

const coffeeandcigarettes = {
    id: "cocktail28",
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

const lastword = {
    id: "cocktail29",
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
    history: [
    ],
    notes: [
        "Source: Anders Erickson: https://www.youtube.com/watch?v=jRcApnG9Hck",
        "also, How to drink: https://www.youtube.com/watch?v=WaZb_BSy4dI&t=179s"
    ]
};

const finalward = {
    id: "cocktail30",
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
        "Maraschino LIqueur",
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
    history: [
    ],
    notes: [
        "from legendary barman Phil Ward of NYC’s ancient and venerated Pegu Club"
    ]
};

const nakedandfamous = {
    id: "cocktail31",
    name: "Naked & Famous",
    picture: imgNakedandfamous,
    ingredients: [
        "2cl Mezcal",
        "2cl Yellow Chartreuse (if only green: maybe 1/3 less and replace by honey sirup",
        "2cl Aperol",
        "2cl Lime Juice",
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
        "new"
    ],
    history: [
    ],
    notes: [
    ]
};

const darknstormy = {
    id: "cocktail32",
    name: "Dark n' Stormy",
    picture: imgDarknstormy,
    ingredients: [
        "120-150ml Ginger Beer",
        "45ml Gosling's Black Seal Rum",
        "5-10ml Lime Juice (a wedge)"
    ],
    ingredientsGuest: [
        "Ginger Beer",
        "Black Rum",
        "Lime"
    ],
    preparationSteps: [
        PREP_BUILD,
        "fill collins glass with ice, fill with ginger beer, put rum on top and add a lime wedge"
    ],
    garnishes: [
        "Lime wedge or wheel (depending if lemon juice is already inside)"
    ],
    glasses: [
        GLASS_HIGHBALL
    ],
    tags: [
        "new",
        "refreshing"
    ],
    history: [
    ],
    notes: [
    ]
};

const nucleardaiquiri = {
    id: "cocktail33",
    name: "Nuclear Daiquiri",
    picture: imgNucleardaiquiri,
    ingredients: [
        "30ml Overproof White Rum ('Wray & Nephew Overproof', but maybe I can use Smith n Cross instead, cuz I need high proof, or just my Angostura white rum)",
        "22,5ml Green Chartreuse",
        "30ml Lime Juice",
        "7,5ml Falernum (vllt ja auch 10ml)",
        "tendentiell: vllt ein kleines bissl weniger Lime, und ein bisschen mehr Falernum, zB. 25ml Lime. 10ml Falernum",
        "Variation: 22,5ml, 22,5ml, 22,5ml und 10ml (Falernum). Also try with different rums"

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
        "new",
        "very tart",
        "very strong",
        "2005, Gregor De Gruyther"
    ],
    history: [
    ],
    notes: [
        "Educated Barfly: https://www.youtube.com/watch?v=Q1N3Y1ATjS8",
        "very good discussion about proportions: https://cocktailnerds.de/t/nuclear-daiquiri-diskussion/596/25"
    ]
};


const corpsereviver = {
    id: "cocktail34",
    name: "Corpse Reviver No. 2",
    picture: imgCorpsereviver,
    ingredients: [
        "22,5ml Dry Gin (e.g. Botanist)",
        "22,5ml Lillet Blanc (but best with Cocchi Americano)",
        "22,5ml Cointreau",
        "22,5ml Lemon Juice",
        "2 Dashes Absinth"

    ],
    ingredientsGuest: [
        "Dry Gin",
        "Lillet Blanc",
        "Orange Liquer",
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
        "new",
        "classic"
    ],
    history: [
    ],
    notes: [
        "Anders Erickson: https://www.youtube.com/watch?v=bGxOcLRCBWk"
    ]
};

const bijou = {
    id: "cocktail35",
    name: "Bijou",
    picture: imgBijou,
    ingredients: [
        "30ml Gin (possibly Needle)",
        "30ml Sweet Red Vermouth",
        "22,5ml Green Chartreuse",
        "2 Dashes Orange Bitters"
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
        "One Marachino Cherry"
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
        "Jamie Gordon",
        "In French, menans 'Jewel', because of the colors the different liquors: Seethrough: Diamand, Green: Emerald, Red: Ruby"
    ]
};

const sazerac = {
    id: "cocktail36",
    name: "Sazerac",
    picture: imgSazerac,
    ingredients: [
        "45ml Rye Whisky (or 60ml if I dont have Cognac)",
        "15ml Cognac (possibly also just all-rye)",
        "7,5ml Sugar Sirup",
        "4 dashes of Peychaud's Bitters",
        "1 dash of Angostura Bitters",
        "1-2 dashes (rinse) of Absinthe",
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
        "new"
    ],
    history: [
    ],
    notes: [
        "Jamie Gordon",
        "In French, menans 'Jewel', because of the colors the different liquors: Seethrough: Diamand, Green: Emerald, Red: Ruby",

        "How to drink: https://www.youtube.com/watch?v=2Sgek_isG88"
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
    coffeeandcigarettes,
    lastword,
    finalward,
    nakedandfamous,
    darknstormy,
    nucleardaiquiri,
    corpsereviver,
    bijou,
    sazerac
]//.sort((a, b) => a.name.localeCompare(b.name))



export default cocktails;