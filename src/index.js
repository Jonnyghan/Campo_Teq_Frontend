const endPointClubs = "http://localhost:3000/api/v1/clubs"


document.addEventListener('DOMContentLoaded',() => {
  console.log("You're good, it's loaded") 
  getClubs()
  getClubsIds()
  const createClubForm = document.querySelector("#create-a-club-form")
  createClubForm.addEventListener("submit", (e)=> createFormHandler(e))
 
  const createDeleteForm = document.querySelector("#delete-club-form")
  createDeleteForm.addEventListener("submit", (e)=> createDeleteHandler(e))
 
})

   

function getClubs(){
    fetch(endPointClubs)
    .then(response => response.json())
    .then( clubs =>{
      const orderedClubs = clubs.data.sort(function(a, b) {
        return a.id - b.id;
      });
        orderedClubs.forEach(clubData => {
          //debugger
          const newClub = new Club(clubData, clubData.attributes)
          
          document.querySelector('#club-container').innerHTML += newClub.renderClub()
          // render(clubData)            
        }) 
       // labelClubDeleteButtons()
    })
   
}

function getClubsLast(){
  setTimeout(function delay(){
  fetch(endPointClubs)
  .then(response => response.json())
  .then( clubs => {
    const orderedClubs = clubs.data.sort(function(a, b) {
      return a.id - b.id;
    });
    const newestClub= orderedClubs[clubs.data.length-1]
    ///debugger
    const newClub = new Club(newestClub, newestClub.attributes)
    document.querySelector('#club-container').innerHTML += newClub.renderClub()
   
    function renderDelete(newestClub){
      return` <option id="${newestClub.id}"value="${newestClub.id}"> ${newestClub.attributes.name}</option>`
    }
   
    document.querySelector('select#club-ids.delete-form-control').innerHTML += renderDelete(newestClub)
  }) 
},1000);
  }

  function getClubsIds(){
    fetch(endPointClubs)
    .then(response => response.json())
    .then( clubs =>{
      const orderedClubs = clubs.data.sort(function(a, b) {
        return a.id - b.id;
      });
      
        orderedClubs.forEach(clubData => {
        
          function renderDelete(clubData){
            return` <option id="${clubData.id}" value="${clubData.id}"> ${clubData.attributes.name}</option>`
          }
         
          document.querySelector('select#club-ids.delete-form-control').innerHTML += renderDelete(clubData)
          // render(clubData)            
        }) 
       // labelClubDeleteButtons()
    })
   
}    
       

function createDeleteHandler(e){
  e.preventDefault()
  const clubId = parseInt( document.querySelector('select#club-ids.delete-form-control').value)
 deleteFetch(clubId)
 const clubCard = document.querySelector(`#club-card-${clubId}`)
 clubCard.innerHTML = "This Club Was Given A Red Card!"
 //clubCard.backgroundColor = "red";
 document.getElementById(`${clubId}`).remove()
}        

function deleteFetch(clubId) {
   const endPointClubsDelete = `http://localhost:3000/api/v1/clubs/${clubId}`
   fetch(endPointClubsDelete, {method: "DELETE"})
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

  .then(a =>  {
    console.log(a);
  })
  setTimeout(getClubsLast(), 2000);
  

}




