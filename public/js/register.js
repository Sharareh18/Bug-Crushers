const challengeOne = $("#challengeOne");
const challengeTwo = $("#challengeTwo");
const challengeThree = $("#challengeThree");
const registerButton = $("#registerButton");

function removeSelectedClass() {
    challengeOne.removeClass("challengeOneSelected");
    challengeTwo.removeClass("challengeTwoSelected");
    challengeThree.removeClass("challengeThreeSelected");
}

challengeOne.on("click", () => {
    removeSelectedClass();
    challengeOne.addClass("challengeOneSelected")
})

challengeTwo.on("click", () => {
    removeSelectedClass()
    challengeTwo.addClass("challengeTwoSelected")
})

challengeThree.on("click", () => {
    removeSelectedClass()
    challengeThree.addClass("challengeThreeSelected")
})

registerButton.on("click", async (event) => {
    event.preventDefault();
    const newUsername = $("#usernameRegisterField").val().trim();
    let selectedChallenge;
    let notSelected;
    if (challengeOne.attr("class").includes("challengeOneSelected")) {
        selectedChallenge = "Challenge One"
    }
    else if (challengeTwo.attr("class").includes("challengeTwoSelected")) {
        selectedChallenge = "Challenge Two"
    }
    else if (challengeThree.attr("class").includes("challengeThreeSelected")) {
        selectedChallenge = "Challenge Three"
    }
    else {
        notSelected = true;
    }
    if (notSelected == true) {
        alert("Please select a challenge.");
        return;
    }
    if (!newUsername) {
        alert("Please enter a username.")
        return;
    }
    else {
        const response = await fetch("/api/users/register", {
            method: "POST",
            body: JSON.stringify({selectedChallenge, newUsername}),
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            await alert(`Congrats, ${data.newUser.username}, on signing up; keep up the good stepping!`);
            window.location.pathname = "/login";
        }
        else {
            alert("Username is already in use. Please try again.");
        }
    }
})