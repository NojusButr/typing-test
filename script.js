const words = [
    "apple", "giraffe", "quasar", "butterfly", "nebula", "penguin", "volcano", "galaxy",
    "harmony", "jigsaw", "xylophone", "paradox", "zephyr", "sunbeam", "rainbow", "yonder",
    "whisper", "treetop", "umbrella", "violet", "snowflake", "tornado", "lightning",
    "harvest", "moonlight", "evergreen", "infinity", "glimmer", "starlight", "melody",
    "lullaby", "whirlpool", "epiphany", "serenade", "wanderlust", "dandelion", "lantern",
    "compass", "rhapsody", "solstice", "crescendo", "odyssey", "mystique", "eclipse",
    "aura", "ember", "fable", "aurora", "mirage", "nocturne", "horizon", "labyrinth",
    "oasis", "paragon", "zenith", "haven", "realm", "twilight", "serenity", "cascade",
    "meadow", "thunder", "prairie", "voyage", "summit", "echo", "frost", "crystal",
    "sepia", "silhouette", "solace", "aurum", "vortex", "nirvana", "zen", "terra",
    "jungle", "grove", "breeze", "ocean", "tundra", "valley", "canyon", "hollow",
    "bliss", "nectar", "zephyr", "caravan", "rift", "summit", "haven", "tranquil",
    "azure", "delight", "ripple", "lilac", "iris", "lotus", "cherry", "echo", "wave",
    "sapphire", "obsidian", "jade", "pearl", "granite", "silver", "amber", "topaz",
    "onyx", "gemstone", "platinum", "quartz", "ruby", "diamond", "moonstone", "opal",
    "garnet", "turquoise", "tiger", "panther", "eagle", "owl", "dolphin", "whale",
    "shark", "seal", "otter", "mole", "rat", "mouse", "beetle", "firefly", "dragonfly",
    "wings", "feathers", "talon", "scale", "fin", "mane", "hooves", "horn", "snout",
    "trunk", "root", "branch", "petal", "thorn", "stem", "bark", "leaf", "seed", "sprout",
    "glow", "flare", "comet", "asteroid", "meteor", "cloud", "fog", "mist", "dusk",
    "dawn", "shadow", "phantom", "specter", "chimera", "griffin", "phoenix", "pegasus",
    "unicorn", "dragon", "sphinx", "cyclone", "hurricane", "storm", "wind", "breeze",
    "tide", "current", "shore", "reef", "lagoon", "archipelago", "fjord", "glacier",
    "iceberg", "cove", "bay", "inlet", "gulf", "savanna", "steppe", "plateau", "mesa",
    "desert", "dune", "oasis", "rainforest", "marsh", "swamp", "bog", "mire", "fen",
    "woodland", "forest", "grove", "thicket", "copse", "clearing", "meadow", "glade",
    "prairie", "steppe", "heath", "moor", "tundra", "taiga", "arctic", "antarctic",
    "equator", "tropic", "meridian", "horizon", "zenith", "nadir", "apex", "pinnacle",
    "summit", "peak", "crest", "ridge", "slope", "hill", "mountain", "cliff", "escarpment",
    "gorge", "valley", "ravine", "canyon", "chasm", "abyss", "sinkhole", "cave", "grotto",
    "cavern", "tunnel", "passage", "channel", "strait", "island", "continent", "terrain",
    "landscape", "scenery", "vista", "panorama", "prospect", "outlook", "view", "horizon",
    "expanse", "stretch", "reach", "scope", "range", "breadth", "extent", "area", "region",
    "zone", "belt", "range", "band", "path", "trail", "route", "track", "road", "way",
    "lane", "alley", "street", "avenue", "boulevard", "drive", "terrace", "court", "place",
    "circle", "crescent", "loop", "arc", "curve", "bend", "corner", "turn", "angle",
    "point", "tip", "edge", "rim", "margin", "border", "boundary", "limit", "perimeter",
    "circumference", "diameter", "radius", "chord", "arc", "segment", "sector", "zone",
    "ring", "band", "halo", "aura", "glow", "shine", "sparkle", "gleam", "glimmer",
    "glint", "flash", "flare", "burst", "beam", "ray", "streak", "stream", "trail",
    "comet", "meteor", "star", "sun", "planet", "moon", "satellite", "asteroid", "orbit",
    "ellipse", "sphere", "circle", "arc", "curve", "line", "angle", "shape", "form",
    "figure", "pattern", "design", "motive", "theme", "style", "mode", "genre", "category",
    "class", "type", "sort", "kind", "variety", "species", "breed", "race", "stock",
    "strain", "lineage", "heritage", "ancestry", "origin", "source", "root", "basis",
    "foundation", "core", "heart", "center", "nucleus", "focus", "hub", "pivot", "axis",
    "pole", "rod", "beam", "shaft", "column", "pillar", "post", "stake", "peg", "pin",
    "needle", "thread", "fiber", "strand", "rope", "cord", "line", "chain", "link",
    "knot", "tie", "bow", "loop", "coil", "curl", "twist", "spiral", "swirl", "eddy",
    "whirl", "vortex", "cyclone", "tornado", "storm", "tempest", "gale", "breeze", "wind",
    "draft", "gust", "blast", "rush", "stream", "flow", "flood", "deluge", "cascade",
    "waterfall", "torrent", "rapids", "eddy", "pool", "pond", "lake", "reservoir", "tank",
    "zealous", "mirth", "wanderer", "seraph", "emberglow", "thistle", "camellia", "citrine", 
    "amethyst", "clover", "willow", "basilisk", "glade", "brook", "halcyon", "raven", 
    "onyx", "phoenix", "wisteria", "gossamer", "spire", "harbinger", "silken", "petunia", 
    "acorn", "cobblestone", "elm", "saffron", "pavilion", "meander", "honeydew", "zest", 
    "lyric", "euphony", "arcane", "sequoia", "aether", "lore", "pinnacle", "cascade", 
    "myrtle", "echidna", "fen", "harlequin", "solarium", "tawny", "periwinkle", "lapis", 
    "marigold", "verdant", "bramble", "carob", "safflower", "zebra", "azureth", "cobalt", "pyre", "galvanize", 
    "emberleaf", "willowshade", "frostvine", "coral", "seafoam", "barnacle", "kelp", 
    "anchor", "rudder", "mast", "sails", "harpoon", "prow", "stern", "cabin", "buoy", 
    "lagoonshade", "nautilus", "mariner", "currant", "elderwood", "fennel", "mulberry", 
    "nectarine", "pebble", "shoreline", "tidal", "mangrove", "bayou", "conch", "amberglow", 
    "obsidianflame", "pyrite", "quartzite", "gypsum", "granule", "terrace", "butte", 
    "ravinewood", "prairieshadow", "shale", "limestone", "basalt", "tuff", "pumice", 
    "crater", "vent", "fumarole", "geyser", "ashfall", "cinder", "emberwood", "hearth", 
    "kindling", "blazing", "solacewood", "fir", "ash", "oakwood", "pinecone", "cedar", 
    "larch", "spruce", "walnut", "hazel", "birchwood", "cherryblossom", "hawthorn", "mapleleaf", 
    "rowan", "sycamore", "elmshade", "cypress", "cottonwood", "mulch", "thatch", "peat", 
    "soot", "charcoal", "emberstone", "smolder", "kindleflame", "sparrow", "falcon", "parrot", 
    "finch", "osprey", "albatross", "puffin", "warbler", "starling", "kingfisher", "wren", 
    "lark", "heron"
];

const textContainer = document.getElementById('text-container');
const timerElement = document.getElementById('timer');
const tryAgainButton = document.getElementById('try-again');
const finalScoreElement = document.getElementById('final-score');

let totalTyped = '';
let currentCharIndex = 0;
let errors = 0;
let longText = generateLongText();

let timeLeft = 60;
let timerInterval;
let typingStarted = false;

// Shuffle the words
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//Combine shuffled words into one long string with spaces
function generateLongText() {
    const shuffledWords = shuffleArray([...words]);
    return shuffledWords.join(' ');
}

//Start countdown timer
function startTimer(){
    if (!typingStarted){
        typingStarted = true;
        timerInterval = setInterval(() => {
            timeLeft--;
            timerElement.textContent = `Time left: ${timeLeft}s`;
            if(timeLeft <= 0){
                clearInterval(timerInterval);
                endTest();
            }
        }, 1000);
    }
}

//End the test and display the final score
function endTest(){
    timerElement.textContent = `Time's up!`;
    finalScoreElement.textContent = `Final WPM: ${CalculateWPM()}`;
    textContainer.style.display = 'none';
    tryAgainButton.style.display = 'block';
}

// Calculate words per minute with error adjusment
function CalculateWPM(){
    const wordsTyped = totalTyped.trim().split(/\s+/).length;
    const baseWPM = Math.round((wordsTyped / 60) * 60);
    const adjustedWPM = Math.max(baseWPM - errors, 0);
    return adjustedWPM;
}

document.addEventListener('keydown', (e) =>{

    startTimer();

    if(e.key === 'Backspace'){
        if (totalTyped.length > 0){
            currentCharIndex = Math.max(currentCharIndex - 1, 0);
            totalTyped = totalTyped.slice(0, -1);
        }
    }
    else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey){
        totalTyped += e.key;
        currentCharIndex ++;
    }

    const textArray = longText.split('');
    textContainer.innerText = '';

    errors = 0;

    for(let i = 0; i < textArray.length; i++){
        const span = document.createElement('span');

        if(i < totalTyped.length){
            if(totalTyped[i] === textArray[i]){
                span.classList.add('correct');
            } else{
                span.classList.add('error');
                errors++;
            }
        }

        span.textContent = textArray[i];
        textContainer.appendChild(span);
    }

    //Scroll the container only after 20 chars
    if (totalTyped.length >= 20){
        const scrollAmount = (totalTyped.length - 20) * 14;
        textContainer.scrollLeft = scrollAmount;
    }
});


// Reset the test
function resetTest(){
    clearInterval(timerInterval);
    timeLeft = 60;
    timerElement.textContent = `Time left: ${timeLeft}s`;
    finalScoreElement.textContent = '';
    textContainer.style.display = 'block';
    tryAgainButton.style.display = 'none';
    totalTyped = '';
    typingStarted = false;
    currentCharIndex = 0;
    errors = 0;
    textContainer.scrollLeft = 0;
    longText = generateLongText();
    init();
}

// Initialize the test
function init(){
    if(isMobileDevice()){
        showMobileMessage();
    }
    else {
        textContainer.innerText = longText;
        timerElement.textContent = `Time left: ${timeLeft}s`;
    }
    
}

// try again button listener
tryAgainButton.addEventListener('click', resetTest);

// Detect if user is mobile
function isMobileDevice(){
    return /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 800;
}

function showMobileMessage(){
    textContainer.textContent = 'This typing test is designed for desktop use only';
}

// Startup
init();