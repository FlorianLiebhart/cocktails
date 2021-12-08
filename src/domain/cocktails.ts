import {DRY_SHAKE, FINE_STRAIN, WET_SHAKE} from "./preparationSteps";
import {NICKANDNORA_GLASS, TUMBLER_GLASS} from "./glasses";


const whiskySour = {
    name: "whisky sour",
    picture: "...",
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
        TUMBLER_GLASS
    ]
};


const cocktails = [whiskySour];


export default cocktails;