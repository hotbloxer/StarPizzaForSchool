

async function getPizzaMenu (){
    const url = "JSON/Pizzas.json";
    let textToChange = document.getElementById("pizzaMenu");

    try
    {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
       
        textToChange.innerHTML = json.pizzas[0].name;

        textToChange.innerHTML = "";
        let counter = 0;
    
        console.log(json.pizzas.length);

        for (let i = 0; i < json.pizzas.length ; i++) {
            if (counter == 0 ) {
                counter ++;
                textToChange.innerHTML += "<div> </div>";
           
            }

            if (counter == 4) {
                textToChange.innerHTML += "<div> </div>";
                textToChange.innerHTML += "<div> </div>";
                counter = 0;
                
            }
            
            textToChange.innerHTML += 
            "<div class = " 
            + "fixedHeightMenu>" 
            + "<figure >" 
            + "<img class= fitImgToContainer src =" + json.pizzas[i].img 
            + ">" 
            + "<caption>" 
            + json.pizzas[i].name 
            + "</caption>" 
            + "</figure >" 
            + "</div>";
            counter ++;
        }
    

    } catch (error) 
        {
            console.error(error.message);
        }

       
}



let tetst = getPizzaMenu();


 

