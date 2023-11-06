const rankingsBody = $("#rankings");
const searchBar = $("#search-leaderboard");
const tableBody = $("#tableBody");
let allUsers;
const countDownDiv = $("#countDownClock");

let countDownClock = () => {
    let currentMonth = dayjs().month();
    let currentUnix = dayjs().unix();
    let monthEndUnix = dayjs().month(currentMonth + 1).startOf("month").unix();
    let timeUntilMonthEndUnix = monthEndUnix - currentUnix;
    let formattedTimeUntilMonthEnd = dayjs.duration(timeUntilMonthEndUnix, "seconds").format("DD:HH:mm:ss")
  
    // Update the content of the element with id "countdown-display" using jQuery
    $("#countDownClock").text(formattedTimeUntilMonthEnd);
  }
  
setInterval(countDownClock,1);


const loadAllUsers = async () => {
    await fetch("/leaders?showAll=true")
    .then((response) => 
        response.json()
    )
    .then((data) => {
        allUsers = data;
    });

}


const filterRankings = async () => {

    await loadAllUsers();

    let searchTerm = searchBar.val().toLowerCase();

    if (!searchTerm) {
        let tableBodyRows = tableBody.children();
        for (let i = 0; i < tableBodyRows.length; i++) {
            for (let j = 0; j < 3; j ++) { //3 because there are three entries per row
                tableBodyRows.eq(i).children().eq(j).remove();
            }
            $(tableBodyRows[i]).remove();
            
        }
        for (let i = 0; i < 10; i++) {
            let newRow = $("<tr>").attr("onclick", "window.location.href='profile/" + allUsers[i].id + "';");

            let rankCell = $("<td>");


            rankCell.text(allUsers[i].rank + "th");
            rankCell.css({
            "font-size":"30px"
            });
            
            if (allUsers[i].rank === 1) {
                rankCell.text("");
                let topThreeMedals = $("<img>");
                topThreeMedals.attr("src", "./images/1stPlace.png");
                topThreeMedals.attr("width", "45px");
                topThreeMedals.attr("height", "45px");
                rankCell.append(topThreeMedals);
            }
            if (allUsers[i].rank === 2) {
                rankCell.text("");
                let topThreeMedals = $("<img>");
                topThreeMedals.attr("src", "./images/2ndPlace.png");
                topThreeMedals.attr("width", "45px");
                topThreeMedals.attr("height", "45px");
                rankCell.append(topThreeMedals);
            }
            if (allUsers[i].rank === 3) {
                rankCell.text("");
                let topThreeMedals = $("<img>");
                topThreeMedals.attr("src", "./images/3rdPlace.png");
                topThreeMedals.attr("width", "45px");
                topThreeMedals.attr("height", "45px");
                rankCell.append(topThreeMedals);
            }

            newRow.append(rankCell);

            let nameCell = $("<td>");
            nameCell.text(allUsers[i].username);
            newRow.append(nameCell);

            let stepCountCell = $("<td>");
            stepCountCell.text(allUsers[i].totalSteps.toLocaleString());

            let stepsImage = $("<img>");
            stepsImage.attr("src", "/images/footsteps.png");
            stepsImage.attr("width", "30px");
            stepsImage.attr("height", "30px");
            stepsImage.css("margin-right", "30px");
            
            stepCountCell.append(stepsImage);
            newRow.append(stepCountCell);

            tableBody.append(newRow);
        }
    }
    else {
        let matchingUsers = allUsers.filter((thisUser) => thisUser.username.indexOf(searchTerm) == 0);
        //if it does equal 0, then the string matches so far and will be added
        displayResults(matchingUsers);
    }
}

const displayResults = (matchingUsers) => {
    //all of the table rows that belong to the body
    let tableBodyRows = tableBody.children();
    for (let i = 0; i < tableBodyRows.length; i++) {
        for (let j = 0; j < 3; j ++) { //3 because there are three entries per row
            tableBodyRows.eq(i).children().eq(j).remove();
        }
        $(tableBodyRows[i]).remove();
    }

    matchingUsers.forEach((user) => {
        let newRow = $("<tr>").attr("onclick", "window.location.href='profile/" + user.id + "';");

        let rankCell = $("<td>");

        let rankString = user.rank.toString();
        let rankLength = rankString.length;
        let lastNumber = rankString.substring(rankLength-1);
        if (user.rank > 20 && lastNumber == 1) {
            rankCell.text(user.rank + "st");
        }
        else if (user.rank > 20 && lastNumber == 2) {
            rankCell.text(user.rank + "nd");
        }
        else if (user.rank > 20 && lastNumber == 3) {
            rankCell.text(user.rank + "rd");
        }
        else {
            rankCell.text(user.rank + "th");
        }

        rankCell.css({
            "font-size":"30px"
        });

        newRow.append(rankCell);

        let nameCell = $("<td>");
        nameCell.text(user.username);
        newRow.append(nameCell);

        let stepCountCell = $("<td>");
        stepCountCell.text(user.totalSteps.toLocaleString());

        let stepsImage = $("<img>");
        stepsImage.attr("src", "/images/footsteps.png");
        stepsImage.attr("width", "30px");
        stepsImage.attr("height", "30px");
        stepsImage.css("margin-right", "30px");
        stepCountCell.append(stepsImage);

        newRow.append(stepCountCell);

        tableBody.append(newRow);
    }) 
}

searchBar.on("keyup", async () => {
    await filterRankings();
});

document.getElementById('bug').style.color = 'goldenrod';

let count = 0;
const countdown = $(".ladder-title");
let linebreak;

let mediaquery = () => {
    if ($(window).width() < 590) {
        if (count === 0) {
            linebreak = $("<div>").addClass("linebreak");
            countdown.after(linebreak);
            count = 1;
        }
    } else if (count === 1) {
        linebreak.remove();
        count = 0;
    }
}

setInterval(mediaquery, 10);
