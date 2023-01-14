const   btn = document.getElementById("btn");
const   result = document.querySelector(".result");


/*
btn.addEventListener("click", getCars);

async function getCars(){

    const res = await fetch("cars.json");
    const data = await res.json();

    console.log(data);

    .
    .
    .

} */



btn.addEventListener("click", async () =>   {

    const res = await fetch("cars.json");
    const data = await res.json();

    console.log(data);

    let output = "";

    data.map(car => {

        output += `
        
    <div class="car">
        <h2>Márka: ${car.Marka}</h2>
        <h2>Típus: ${car.Tipus}</h2>
        <h2>Évjárat: ${car.Evjarat}</h2>
    </div>
        
        `
    })

    result.innerHTML = output;

})