const updateButton = $("#updateButton");
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
const addFriendButton = $("#addFriendButton")

colorBoard.on("click", (event) => {
    let hoveredColor = $(event.target);
    if (hoveredColor.is(colorOne)) {
        console.log("bye");
        profilePicBackground.css("background-color", "orangered");
    }
    if (hoveredColor.is(colorTwo)) {
        profilePicBackground.css("background-color", "yellow");
    }
    if (hoveredColor.is(colorThree)) {
        profilePicBackground.css("background-color", "green");
    }
    if (hoveredColor.is(colorFour)) {
        profilePicBackground.css("background-color", "blue");
    }
    if (hoveredColor.is(colorFive)) {
        profilePicBackground.css("background-color", "purple");
    }
})

//needs
updateButton.on("click", () => {
    full_name = $(".full_name").val();

    bio = $(".bio").val();

    profile_picture = $(".profile_picture").val();

    user_background_color = profilePicBackground.css("background-color");

    console.log(user_background_color);

    step_count = $(".step_count").val();

    let updatedUserInfo = {
        full_name: full_name,
        bio: bio,
        profile_picture: profile_picture,
        user_background_color: user_background_color,
        step_count: step_count,
    }

    const currentURL = window.location.pathname;
    //should be /profile/:userid
    fetch(currentURL, {
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

addFriendButton.on("click", (event) => {
    event.preventDefault();
    const response = fetch()
})
  
  
  