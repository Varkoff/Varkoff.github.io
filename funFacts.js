var count = 0;

function changeFact() {
    if (count < 9) {
        count = count + 1;
    } else {
        count = 0;
    }
    switch (count) {
        case 0:
            document.getElementById("fact").innerHTML = "Quand Google ne trouve pas quelque chose, il demande à Chuck Norris.";
            break;
        case 1:
            document.getElementById("fact").innerHTML = "Jesus Christ est né en 1940 avant Chuck Norris.";
            break;
        case 2:
            document.getElementById("fact").innerHTML = "Chuck Norris ne se mouille pas, c'est l'eau qui se Chuck Norris.";
            break;
        case 3:
            document.getElementById("fact").innerHTML = "Chuck Norris peut supprimer la corbeille.";
            break;
        case 4:
            document.getElementById("fact").innerHTML = "Chuck Norris ne vit pas sur Terre, la Terre vit sous Chuck Norris.";
            break;
        case 5:
            document.getElementById("fact").innerHTML = "Quand un moustique pique Chuck Norris, c'est le moustique qui se gratte.";
            break;
        case 6:
            document.getElementById("fact").innerHTML = "Chuck Norris a déjà compté jusqu'à l'infini.Deux fois.";
            break;
        case 7:
            document.getElementById("fact").innerHTML = "Si Chuck Norris attaque l'Empire, l'Empire ne contre attaque pas.";
            break;
        case 8:
            document.getElementById("fact").innerHTML = "Chuck Norris a fini son forfait illimité.";
            break;
        case 9:
            document.getElementById("fact").innerHTML = "Un film de Bruce Lee montre Chuck Norris se faire battre par Bruce Lee. C'est là l'effet spécial le plus cher de toute l'histoire du cinéma.";
            break;
        default:
            document.getElementById("fact").text = "error";
            break;

    }
}