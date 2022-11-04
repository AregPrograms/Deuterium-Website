//when page loads add achievements.css to the page
window.addEventListener("load", function() {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://www.getdeuterium.win/achievement/achievements.css";
    document.head.appendChild(link);
});

function getAchievements() {
    //get all acheivements from achievements.json
    //return acheivements

    fetch('https://www.getdeuterium.win/achievement/achievements.json')
        .then(response => response.json())
        .then(data => {
            this.acheivements = data;
        }
    );

    return this.acheivements;
}

function getAchievement(id = undefined) {
    //get specific acheivement from achievements.json

    if (id == undefined) {
        return null;
    } else {
        fetch('https://www.getdeuterium.win/achievement/achievements.json')
            .then(response => response.json())
            .then(data => {
                this.acheivements = data;
            }
        );

        return this.acheivements[id];
    }
}

function displayAchievements(achID = 0) {
    //this will show a little box that pops up at the top left corner of the screen
    //it will show the acheivements that the user has unlocked

    let achJSON = getAchievement(achID);

    //if achID is invalid, set it to 0
    if (achJSON == null) {
        achJSON = getAchievement(0);
    }

    //create box
    let achBox = document.createElement("div");
    achBox.id = "achBox";

    //create title
    let achTitle = document.createElement("h3");
    achTitle.id = "achTitle";
    achTitle.innerHTML = achJSON.name;

    //create description
    let achDesc = document.createElement("p");
    achDesc.id = "achDesc";
    achDesc.innerHTML = achJSON.description;

    //add title and description to box
    achBox.appendChild(achTitle);
    achBox.appendChild(achDesc);

    //append box to body
    document.body.appendChild(achBox);

    //remove box after 5 seconds
    setTimeout(function() {
        document.body.removeChild(achBox);
    }, 5000);
}