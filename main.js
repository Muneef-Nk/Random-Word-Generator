let btn = document.getElementById('btn');

btn.addEventListener('click', function(){

 let word = [
 "car",
 "bus",
 "laptop",
 "devil-may-care",
 "application ",
 "approach",
 "aviation",
 "billy",
 "browser ",
 "capable ",
 "candy ",
 "characters",
 "charlie",
 "command ",
 "concept",
 "consideration ",
 "converted",
 "convicted ",
 "damaged",
 "default",
 "federal",
 "feedback",
 "tomatoes",
 "tonight",
 "unions",
 "vegetables",
 "vegetarian",
 "vegetation",
 "vehicle",
 "vehicles",
 "velocity",
 "velvet",
 "vendor",
 "vendors",
 "venezuel",
 "venice",
 "venture",
 "ventures",
 "where",
 "whereas",
 "wherever",
 "whether",
 "which",
 "while",
 "whilst",
 "white",
 "who",
 "whole",
 "wholesale",
 "whom",
 "whore",
 "whose",
 "why",
"absent",
"sudden",
"knot",
"smile",
"rotten",
"suggest",
"mice",
"clip",
"fact",
"eight",
"box",
"system",
"handsomely",
"fill",
"calculator",
"nervous",
"equable",
"grotesque",
"correct",
"aloof",
"provide",
"better",
"pull",
"iron",
"tremble",
"colour",
"locket",
"announce",
"unadvised",
"throne",
"nutritious",
"well",
"signal",
"route",
"delirious",
"lovely",
"spell",
"earthy",
"adjustment",
"imminent",
"claim",
"wait",
"nerve",
"square",
"impress",
"wasteful",
"worm",
"tramp",
"pickle",
"nondescript",
"anxious",
"pin",
"broad",
"pump",
"bat",
"penitent",
"smiling",
"ossified",
"strip",
"kneel",
"divergent",
"scene",
"anxious",
"step",
"vague",
];

 let result = document.querySelector('h1');

 result.innerHTML = word[Math.floor(Math.random()*word.length)];
})