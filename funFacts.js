var count = 0;

var quotes = ["Quand Google ne trouve pas quelque chose, il demande à Chuck Norris.", "Jesus Christ est né en 1940 avant Chuck Norris.", "Chuck Norris ne se mouille pas, c'est l'eau qui se Chuck Norris.", "Chuck Norris peut supprimer la corbeille.", "Chuck Norris ne vit pas sur Terre, la Terre vit sous Chuck Norris.", "Quand un moustique pique Chuck Norris, c'est le moustique qui se gratte.", "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.", "Si Chuck Norris attaque l'Empire, l'Empire ne contre attaque pas.", "Chuck Norris a fini son forfait illimité.", "Un film de Bruce Lee montre Chuck Norris se faire battre par Bruce Lee. C'est là l'effet spécial le plus cher de toute l'histoire du cinéma."]
var fact = document.getElementById("fact");
/* setInterval(changeFact, 3000); */
function changeFact() {

    count++;
    if (count >= quotes.length) {
        count = 0;
    }
    fact.style.opacity = 0;
    fact.style.height = "40px";

    setTimeout(() => {
        fact.style.height = "40px";
        fact.innerHTML = quotes[count];
        var heightOfP = (fact.scrollHeight) + "px";
        fact.style.height = heightOfP;
        fact.style.opacity = 1;
    }, 500);
}