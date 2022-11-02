
function getAchievements() {
    //get all acheivements from achievements.json
    //return acheivements

    fetch('achievement/achievements.json')
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
        fetch('achievement/achievements.json')
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

    //create box
    let achBox = document.createElement("div");
    achBox.id = "achBox";
    achBox.style.position = "absolute";
    achBox.style.top = "0px";
    achBox.style.left = "0px";
    achBox.style.width = "300px";
    achBox.style.height = "100px";
    achBox.style.backgroundColor = "#555555";
    achBox.style.border = "1px solid black";
    achBox.style.borderRadius = "5px";
    achBox.style.padding = "10px";
    achBox.style.boxShadow = "0px 0px 5px 0px black";
    achBox.style.zIndex = "1000";

    //create title
    let achTitle = document.createElement("h3");
    achTitle.innerHTML = achJSON.name;
    achTitle.style.margin = "0px";
    achTitle.style.padding = "0px";

    //create description
    let achDesc = document.createElement("p");
    achDesc.innerHTML = achJSON.description;
    achDesc.style.margin = "0px";
    achDesc.style.padding = "0px";

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