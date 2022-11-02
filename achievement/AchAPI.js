
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