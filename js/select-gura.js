var today = new Date();
var month = today.getMonth() + 1; // Por defecto Enero==0, así que le sumamos 1

const gura_cat = "../img/gura/gura_cat.png";
const gura_gawr = "../img/gura/gura_gawr.png";
const gura_normal = "../img/gura/gura_normal.png";
const gura_school = "../img/gura/gura_school.png";
const gura_summer = "../img/gura/gura_summer.png";

// console.log(month);

if (month >= 6 && month <= 8)
{
    document.getElementById("gura-icon").src = gura_summer;
}

if ((month >= 9 && month <= 12) || (month >= 1 && month <= 5))
{
    document.getElementById("gura-icon").src = gura_school; 
}

var chance = getRndInteger(0, 21);
switch (chance)
{
    case 0:
        document.getElementById("gura-icon").src = gura_gawr;
        break;

    case 10:
        document.getElementById("gura-icon").src = gura_normal;
        break;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}