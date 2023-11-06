const updateButton = $("#updateButton");
const submitDailyStepsButton = $("#submitTodayStepsButton");
const checkPastStepsButton = $("#checkPastStepsButton")
const returnButton = $("#returnButton");
let full_name;
let bio;
let profile_picture;
let step_count;
let user_background_color;
const profilePicBackground = $("#bannerWings")
const colorBoard = $("#colorBoard");
const colorOne = $("#colorOne");
const colorTwo = $("#colorTwo");
const colorThree = $("#colorThree");
const colorFour = $("#colorFour");
const colorFive = $("#colorFive");
const addFriendButton = $("#addFriendButton");
const acceptFriendButton = $(".acceptButton");
const declineFriendButton = $(".declineButton");

submitDailyStepsButton.on("click", async (event) => {
    event.preventDefault();
    let inputtedStepValue = $("#todayStepsInput").val();
    const response = await fetch("/api/users/dailySteps", {
        method: "PUT",
        body: JSON.stringify({inputtedStepValue}),
        headers: {
            "Content-Type": "application/json"
        }
    })
    let data = await response.json();
})

checkPastStepsButton.on("click", async (event) => {
    event.preventDefault();
    const date = $("#datepicker").val();
    const todaysDate = dayjs().format("MM/DD/YYYY")
    if (todaysDate == date) {
        $("#datepicker").val("Day Still In Progress");
        return;
    }
    let response = await fetch("/api/users/pastSteps", {
        method: "POST",
        body: JSON.stringify({date}),
        headers: {
            "Content-Type": "application/json"
        }
    })
    let data = await response.json();
    if (data == false) {
        data = `No Steps On ${date}`;
    }
    else {
        data = data.toLocaleString();
    }
    $("#datepicker").val(data);
})

colorBoard.on("click", (event) => {
    let hoveredColor = $(event.target);
    if (hoveredColor.is(colorOne)) {
        profilePicBackground.css("background-color", "orangered");
    }
    if (hoveredColor.is(colorTwo)) {
        profilePicBackground.css("background-color", "#00bfe8");
    }
    if (hoveredColor.is(colorThree)) {
        profilePicBackground.css("background-color", "#f69620");
    }
    if (hoveredColor.is(colorFour)) {
        profilePicBackground.css("background-color", "#5055ca");
    }
    if (hoveredColor.is(colorFive)) {
        profilePicBackground.css("background-color", "#545caa");
    }
})


updateButton.on("click", () => {
    full_name = $(".full_name").val();

    bio = $(".bio").val();

    profile_picture = $(".profile_picture").val();

    user_background_color = profilePicBackground.css("background-color");

    current_steps = $("#todays_steps").val();

    let updatedUserInfo = {
        full_name: full_name,
        bio: bio,
        profile_picture: profile_picture,
        user_background_color: user_background_color,
        current_steps: current_steps,
    }

    const currentURL = "/profile/26";//window.location.pathname;
    //should be /profile/:userid
    fetch("/profile/26", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUserInfo)
    })
    .then((response) => response.json())
    .then((data) => {
        //update the page to have the new data
        (data);
    })
})

returnButton.on("click", () => {
    window.location.pathname = '/leaders';
});

addFriendButton.on("click", async (event) => {
    event.preventDefault();
    let profileID = window.location.pathname;
    profileID = profileID.substring(9);
    profileID = parseInt(profileID);
    const response = await fetch("/api/users/addFriend", {
        method: "POST",
        body: JSON.stringify({profileID}),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json();
})
  

const friendRequestTableBody = $("#tableBodyTwo");
const fillFriendRequestTable = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/users/friendRequest", {
        method: "GET",
    })
    const data = await response.json();
    let userProfilePics = data.userProfilePics;
    let numberOfRequests = data.allFriendRequestData.length;

    //create the table elements and fill accordingly
    for (let i = 0; i < numberOfRequests; i++) {
        let newRow = $("<tr>");

        let profilePicCell = $("<td>");

        let profilePic = $("<img>");
        let profilePicLink = userProfilePics[i];
        profilePic.css("border-radius", "50%")
        profilePic.css("border", "2px solid goldenrod")
        if (profilePicLink.trim() == "") {
            profilePicLink = "https://www.oakhilldayschool.org/uploaded/faculty/2019-2020_Staff/no-user-image-icon-27.jpg.png";
        }
        profilePic.addClass("profilePicClass")
        profilePic.attr("src", profilePicLink);
        profilePic.css("height", "30px");
        profilePic.css("width", "30px");
        if ($(window).width() < 415) {
            profilePic.css("height", "20px");
            profilePic.css("width", "20px");
        }
        profilePicCell.append(profilePic);
        newRow.append(profilePicCell);

        let usernameCell = $("<td>");
        usernameCell.attr("name", "username");
        let username = data.allFriendRequestData[0].User.username;
        usernameCell.text(username);
        newRow.append(usernameCell);


        let statusCell = $("<td>");
        statusCell.addClass("statusCell");

        let acceptButton = $("<button>");
        acceptButton.addClass("acceptButton");
        acceptButton.css("height", "30px");
        acceptButton.css("width", "30px");
        if ($(window).width() < 415) {
            acceptButton.css("height", "17px");
            acceptButton.css("width", "17px");
        }
        let acceptButtonImage = $("<img>");
        acceptButtonImage.attr("src", "/images/checkmark-outline.svg");
        acceptButton.append(acceptButtonImage);

        let declineButton = $("<button>");
        declineButton.addClass("declineButton");
        declineButton.css("height", "30px");
        declineButton.css("width", "30px");
        if ($(window).width() < 415) {
            declineButton.css("height", "17px");
            declineButton.css("width", "17px");
        }
        let declineButtonImage = $("<img>");
        declineButtonImage.addClass("declineButtonImage");
        declineButtonImage.attr("src", "/images/add-outline.svg");
        declineButton.append(declineButtonImage);

        statusCell.css("display", "flex")
        statusCell.css("justify-content", "flex-end");
        statusCell.append(acceptButton);
        statusCell.append(declineButton);

        newRow.append(statusCell);
        friendRequestTableBody.append(newRow);
    }
}

$(window).on("load", fillFriendRequestTable);
  
$(function() {
    $("#datepicker").datepicker();
});

$("body").on("click", ".acceptButton", async (event) => {
    event.preventDefault();
    const clickedElement = event.target;
    const username = $(clickedElement).closest('tr').find('td:nth-child(2)').text().trim();
    //finds closest tablerow ancestor and finds the textcontent of its second child
    const response = await fetch ("/api/users/acceptFriend", {
        method: "POST",
        body: JSON.stringify({username}),
        headers: {
            "Content-Type": "application/json"
        },
    })
    const data = await response.json();
    location.reload(true);
})

$("body").on("click", ".declineButton", async (event) => {
    event.preventDefault();
    const clickedElement = event.target;
    const username = $(clickedElement).closest('tr').find('td:nth-child(2)').text().trim();
    //finds closest tablerow ancestor and finds the textcontent of its second child
    const response = await fetch ("/api/users/declineFriend", {
        method: "DELETE",
        body: JSON.stringify({username}),
        headers: {
            "Content-Type": "application/json"
        },
    })
    const data = await response.json();
    location.reload(true);
})

$(window).on("load", async () => {
    let currentPath = window.location.pathname;
    currentPath = currentPath.substring(9);
    let fetchPath = "/api/users/circularProgressBar/" + currentPath;
    //check what is in the challenge section header
    //depending on what challenge it is that, will be the step goal
    const response = await fetch(fetchPath, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const totalSteps = await response.json();
    let challengeHeader = $("#challengeHeader").text();
    challengeHeader = challengeHeader.substring(11,18);
    let stepGoal;
    if (challengeHeader == "300,000") {
        stepGoal = 300000;
    }
    if (challengeHeader == "200,000") {
        stepGoal = 200000;
    }
    if (challengeHeader == "150,000") {
        stepGoal = 150000;
    }
    let percentageCompleted = totalSteps/stepGoal;
    let amountToOffset = percentageCompleted * 1030;
    amountToOffset = 1030 - amountToOffset;

    let stylesheet = document.styleSheets[3]; //index is one because it is the second stylesheet linked
    let rules = stylesheet.cssRules;
    let keyFramesRule = null;
    for (let i = 0; i < rules.length; i++) {
        if (rules[i].type === CSSRule.KEYFRAMES_RULE && rules[i].name === "anim") {
            keyFramesRule = rules[i];
            break;
        }
    }
    if(keyFramesRule) {
        keyFramesRule.deleteRule("100%");
        keyFramesRule.appendRule(`100%{stroke-dashoffset: ${amountToOffset};}`)
    }
})


let countThree = 0;
const usernameHeader = $("#usernameHeader");
let linebreakTwo;

let header = () => {
    if ($(window).width() < 590) {
        if (countThree === 0) {
            linebreakTwo = $("<div>").addClass("linebreak");
            usernameHeader.after(linebreakTwo);
            countThree = 1;
        }
    } else if (countThree === 1) {
        linebreakTwo.remove();
        countThree = 0;
    }
}

setInterval(header, 20);

let countTwo = 0;
let circle = $("#myCircle")
let circleRadius = () => {
    if ($(window).width() < 415) {
        if (countTwo == 0) {
            circle.attr("r", Math.max(1, 104));
            console.log("hello");
            countTwo=1;
        }
    }
    else {
        if (countTwo == 1) {
            countTwo=0;
            circle.attr("r", Math.max(1, 164));
        }
    }
}

setInterval(circleRadius, 10);