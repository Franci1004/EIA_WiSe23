

// index        0 1 2 3 4      


const myArray = [
    "Its a snowy day in december and you are walking in the streets of Furtwangen. Because of the terrible weather, the path you would usually take is blocked by a huge pile of snow. Now you have to decide, which way you are taking arround it: left or right ?",
    "You chose the left way. Suddenly you see a small cat <3 hopping towards you. What do you want to do now: pet the cat oder run away?",
    "You chose the right way. Suddenly you see a small dog <3 running towards you. What do you do: pet the dog or run away?",
    "Congratulations you made the right choice! Have a nice day with your new friend!",
    "Congratulations you made the right choice! Have a nice day in the snow and get home safely!",

]


const myStory = prompt(myArray[0])

if (myStory == "left") {
    console.log("test");
    let myAction = prompt(myArray[1]);

    if (myAction == "pet the cat") {
        alert(myArray[3]);
    }
    else if (myAction =="run away") {
        let myAction = prompt(myArray[4]);
    }
}

else if (myStory == "right") {
    let myAction = prompt(myArray[2])

    if (myAction == "pet the dog") {
       alert(myArray [3])
    }
    else if ("run away") {
        let myAction = prompt(myArray[4]);
    }

}