const hero = {name: "nomeHeroi", xp: 11000};
let rank;

switch(true){
    case hero.xp <= 1000:
    rank = "Ferro"
    break   

    case hero.xp >= 1001 && hero.xp <= 2000:
    rank = "Bronze"
    break

    case hero.xp >= 2001 && hero.xp <= 5000:
    rank = "Prata"
    break

    case hero.xp >= 5001 && hero.xp <= 7000:
    rank = "Ouro"
    break

    case hero.xp >= 7001 && hero.xp <= 8000:
    rank = "Platina"
    break

    case hero.xp >= 8001 && hero.xp <= 9000:
    rank = "Ascendente"
    break

    case hero.xp >= 9001 && hero.xp <= 10000:
    rank = "Imortal"
    break

    case  hero.xp >= 10001:
    rank = "Radiante"
    break

    default:
    rank = ("Unranked")
    break
}

console.log(`O heroi de nome ${hero.name} está no nível ${rank}`)