//Select the section with an id of container without using querySelector.
document.getElementById("container")

//Select the section with an id of container using querySelector.
document.querySelector("#container")


//Select all of the list items with a class of "second".
document.querySelectorAll(".second")


//Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol>third")



//Give the section with an id of container the text "Hello!".
document.getElementById("container").innerText = "Hello!"


//Add the class main to the div with a class of footer.
var main = document.querySelector(".footer")
main.classList.add("main")


//Remove the class main on the div with a class of footer.

document.querySelector(".main").classList.remove("main")



//Create a new li element.
var newEle = document.createElement("li")


//Give the li the text "four".
newEle.textContent = "four"


//Append the li to the ul element.
document.querySelector("body").appendChild(newEle)



//Loop over all of the list inside the ol tag and give them a background color of "green".
var allOl = document.getElementsByTagName("ol")
for(let list of allOl ){
    list.style.background = "green"
}



//Remove the div with a class of footer.
var elem = document.querySelector(".footer")
elem.parentNode.removeChild(elem);