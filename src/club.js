class Club{
    constructor(club, clubAttributes){
        this.id = club.id;
        this.name = clubAttributes.name;
        this.coach = clubAttributes.coach;
        this.formation= clubAttributes.formation
        Club.all.push(this)
    }
    renderClub() {
       console.log(this);
       
       return`
       <div class="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
    <div class="my-3 py-3">
      <h2 class="display-5">${this.name}</h2>
      <p class="lead">Coach: ${this.coach}.</p>
      <h3> ${this.formation.name}</h3>
    </div>
    <img src="${this.formation.image_url}"  style="width:250px ; height: 300px; border-radius: 21px 21px 0 0;">
    <p>${this.formation.description}</p>
  </div><br><br>`
     //   return`
       //         <div data-id=${this.id}>
         //       <h1>Club:</h1> <h2> ${this.name}</h2>
           //     <h2>Manager:</h2> <h3> ${this.coach}</h3>
             //   <h2> Usual Formation:</h2>
               // <h3>${this.formation.name}</h3>
            //    <img src=${this.formation.image_url} height="250" width="200">
             //   <p>${this.formation.description}</p>
               // <button data-id=${this.id}> edit</button>
               // </div>
               // <br><br>`;

                
                
                
    
    }
}

Club.all = []