const paintWall = function (color) {
    console.log("The wall has been painted " + color);
};

const mainColor = "green";
const secondColor = "red";

paintWall(mainColor);
paintWall(secondColor);

const paintWhichWall = function (location, color) {
    console.log("The " + location + " has been painted " + color)
};

const thirdColor = "orange";
const fourthColor = "grey";

const locationA = "North wall";
const locationB = "South East wall"

paintWhichWall (locationA, thirdColor);
paintWhichWall (locationB, fourthColor);
