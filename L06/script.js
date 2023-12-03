let myVariable = 1;

console.log (myVariable);


let myStory = prompt ("Its a snowy day in december and you are walking in the streets of Furtwangen. Because of the terrible weather, the path you would usually take is blocked by a huge pile of snow. Now you have to decide, which way you are taking around it: left or right ?");

if (myStory == "left") {
    let myAction = prompt ("You chose the left way. Suddenly you see a small cat <3 hopping towards you. What do you want to do now: pet the cat oder run away?"); 

   if (myStory == "pet the cat") {
        let myAction = prompt ("Congratulations you made the right choice! Have a nice day with your new friend!");
   }
   else if ("run away") {
        let myAction = prompt ("Congratulations you made the right choice! Have a nice day in the snow and get home safely!");
   }

}

else if (myStory== "right") {
    let myAction = prompt ("You chose the right way. Suddenly you see a small dog <3 running towards you. What do you do: pet the dog or run away?")

      if (myStory == "pet the dog") {
        let myAction = prompt ("Congratulations you made the right choice! Have a nice day with your new friend!");
      }
      else if ("run away") {
        let myAction = prompt ("Congratulations you made the right choice! Have a nice day in the snow and get home safely!");
      }
    
}








 
