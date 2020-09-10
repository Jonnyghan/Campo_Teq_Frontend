    <button type="delete" onclick="${deleteFetch(this)}" class="btn btn-light btn-lg btn-block" id="${this.id}">Delete</button><br>


 deleteFetch = function(id) {
         debugger
          const endPointClubsDelete = `http://localhost:3000/api/v1/clubs/${id}`
          fetch(endPointClubsDelete, {method: "DELETE"})
        }


 let deleteButton = document.querySelector("delete-button")
deleteButton.addEventListener("click", () => console.log("yes"))
function deleteFetch(club) {
    debugger
     const endPointClubsDelete = `http://localhost:3000/api/v1/clubs/${club.id}`
     fetch(endPointClubsDelete, {method: "DELETE"})
   }
    

   const newestClub= clubs.data[clubs.data.length-1]






    <label for="formations">Select your usual formation!</label>
        <select class="form-control" id="formations">
          <option value="15"> "5-4-1"</option>
          <option value="16"> "4-2-3-1"</option>
          <option value="17"> "4-4-2"</option>
        </select><br>