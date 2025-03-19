

async function getOpeningTimes (){
    const url = "JSON/OpeningTimes.json";
    let textToChange = document.getElementById("pizzaMenu");

    try
    {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }
        console.log("test 123");
        const json = await response.json();
        console.log(json);
        textToChange.innerHTML = json.times[0].name;

        textToChange.innerHTML = "";
        for (let i = 0; i < json.times.length ; i++) {
            console.log("test " + i);
            textToChange.innerHTML += "<div class= " + "day" + ">" + json.times[i].name;
            textToChange.innerHTML += "<div class= " + "time" + ">" + json.times[i].open;
            textToChange.innerHTML += "<div class= " + "time" + ">" + json.times[i].close;
        }
    } catch (error) 
        {
            console.error(error.message);
        }
}

getOpeningTimes();
