const endPointClubs = "http://localhost:3000/api/v1/clubs"


document.addEventListener('DOMContentLoaded',() => {
  console.log("You're good, it's loaded") 
  getClubs()

    
    const createClubForm = document.querySelector("#create-a-club-form")
    
    createClubForm.addEventListener("submit", (e)=> createFormHandler(e))
})

function getClubs(){
    fetch(endPointClubs)
    .then(response => response.json())
    .then( clubs =>{
      //debugger
        clubs.data.forEach(clubData => {
          //debugger
          const newClub = new Club(clubData, clubData.attributes)
          
          document.querySelector('#club-container').innerHTML += newClub.renderClub()
        
         // render(clubData)            
        }) 
    })
   
}


           



function createFormHandler(e){
    e.preventDefault()
    const nameInput = document.querySelector("#input-name").value
    const coachInput = document.querySelector("#input-coach").value
    const formationId = parseInt(document.querySelector("#formations").value)
    postFetch(nameInput,coachInput,formationId)
}

function postFetch(name, coach, formation_id){
  const bodyData={name, coach, formation_id}
  
  fetch(endPointClubs, {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(club => {
    console.log(club);
    //debugger

   
  })
}
