const updateButton = $("#updateButton");
const returnButton = $("#returnButton");
let full_name;
let bio;
let profile_picture;
let step_count;


//needs
updateButton.on("click", () => {
    full_name = $(".full_name").val();

    bio = $(".bio").val();

    profile_picture = $(".profile_picture").val();

    step_count = $(".step_count").val();

    let updatedUserInfo = {
        full_name: full_name,
        bio: bio,
        profile_picture: profile_picture,
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
  
  
  