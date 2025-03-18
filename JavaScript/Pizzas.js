

async function getPizzaMenu (){
    const url = "JSON/Pizzas.json";
    let textToChange = document.getElementById("menueCard");

    try
    {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        textToChange.innerHTML = json.pizzas[0].name;

        textToChange.innerHTML = "<ul>";
        for (let i = 0; i < json.pizzas.length ; i++) {
            console.log("test " + i);
            textToChange.innerHTML += "<li>";
            textToChange.innerHTML += json.pizzas[i].name;;
            textToChange.innerHTML += "</li>";

        }
        textToChange.innerHTML += "</ul>";
    } catch (error) 
        {
            console.error(error.message);
        }
}

let tetst = getPizzaMenu();


 

