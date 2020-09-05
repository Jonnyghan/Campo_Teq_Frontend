const endPointClubs = "http://localhost:3000/api/v1/clubs"
const endPointFormations = "http://localhost:3000/api/v1/Formations"


document.addEventListener('DOMContentLoaded',() => {
    getClubs()

    
    const createClubForm = document.querySelector("#create-a-club-form")
    
    createClubForm.addEventListener("submit", (e)=> createFormHandler(e))
})

function getClubs(){
    fetch(endPointClubs)
    .then(response => response.json())
    .then( clubs =>{
        clubs.data.forEach(club => {
            const clubMarkup = `
            <div data-id=${club.id}>
            <h1>Club:</h1> <h2> ${club.attributes.name}</h2>
            <h2>Manager:</h2> <h3> ${club.attributes.coach}</h3>
            <h2> Usual Formation:</h2>
            <h3>${club.attributes.formation.name}</h3>
            <img src=${club.attributes.formation.image_url} height="250" width="200">
            <p>${club.attributes.formation.description}</p>
            <button data-id=${club.id}> edit</button>
            </div>
            <br><br>`;
            
            document.querySelector('#club-container').innerHTML += clubMarkup
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
    
}
