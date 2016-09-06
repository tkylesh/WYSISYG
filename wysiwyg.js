// {
//   title: "Samurai",
//   name: "Tomoe Gozen",
//   bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
//   image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
//   lifespan: {
//     birth: 1747,
//     death: 1797
//   }
// }

var ArrObjects = [
{title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
	}
  },
  {title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
	}
  },
  {title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
    }
  }];
  //testing object with console.log
  console.log(ArrObjects);
//decalare output element
	var outputEl = document.getElementById('container');
// add a new div section for each object in the array
for (var i =0; i< ArrObjects.length; i++){
	//Add each person element to container and give each a common class and unique Id
	outputEl.innerHTML += `<br/><br/><div class="person_container" id="person--${i}"><person><header>
	name: ${ArrObjects[i]["name"]}<br/>
	title: ${ArrObjects[i]["title"]}<br/></header>
	<section>
	<div id="bio">bio: ${ArrObjects[i]["bio"]}</div><br/>
	image: ${ArrObjects[i]["image"]}<br/>
	</section>
	<footer>
	birth: ${ArrObjects[i]["lifespan"]["birth"]}<br/>
	death: ${ArrObjects[i]["lifespan"]["death"]}<br/>
	</footer>
	</person>
	</div>
	<br/>
	<br/>`;
}

//Now containerEl will have elements in it 
//creates an array that contains all elements with this class
var containerEl = document.getElementsByClassName('person_container');
var targetSection;
var edit = document.getElementById("edit");

//keyup event listener
document.getElementById("edit").addEventListener("keyup",function(event){
  if(event.keyCode === 13){
    edit.value="";
  } else {
    document.getElementById(targetSection).innerHTML = `bio: ${edit.value}`;
  }
})


//Now you can create event listeners to the dom elements since they are already added to the page
for(var i = 0; i< ArrObjects.length; i++){
	containerEl[i].addEventListener("click", function(event){
    //get innerHTML of section element
    var sec = document.getElementById(this.id).getElementsByTagName("section")[0];
    //set border of the section you clicked
    document.getElementById(this.id).style.border = "2px dotted yellow";
    //set focus to input field
    edit.focus();
    //define target section
    targetSection = sec.id;

    edit.value = sec.innerHTML;



		// 8. When you click on one of the person elements, a dotted border should appear around it.
		// 9. When you click on one of the person elements, the text input should immediately gain focus so that you can start typing
		
	});
}