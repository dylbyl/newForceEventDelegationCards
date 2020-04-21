const cardArray = [];
let cardID = 0;




document.querySelector("#create-btn").addEventListener("click", function(){
    const inputMessage = document.querySelector("#input-field").value;
    const cardObject = {
        id: cardID,
        message: `${inputMessage}`
    }
    cardID++;
    cardArray.push(cardObject);
    adjustCardArray();
    document.querySelector("#input-field").value = "";
    document.querySelector("#input-field").focus();
})

const adjustCardArray = () => {
    document.querySelector("#card-container").innerHTML = ``;
    
    
    for(let i=0; i<cardArray.length; i++){
        document.querySelector("#card-container").innerHTML += `
        <section id="card card-${cardArray[i].id}"> 
        <p>${cardArray[i].message}</p>
        <button class="delete" id="delete-btn-${cardArray[i].id}">Delete</button>
        </section>
        `
    }
}

document.querySelector("body").addEventListener("click", function(){
    if(event.target.classList.contains("delete")){
        
        const splitArray = event.target.id.split("-");
        const deleted = splitArray[2];
        console.log(deleted);
        for(let i = 0; i< cardArray.length; i++){
            if (cardArray[i].id == deleted){
                console.log(i)
                cardArray.splice(i, 1);
            }
        }
        
    }

    adjustCardArray();
})