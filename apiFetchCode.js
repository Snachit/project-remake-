let pageCounter = 1;// had ster ghadi ndecalriw wahed l variable li ghadi ikun b7al chi counter li ghadi itbedel f kola link 7itach 3endna 3 dial links 
const animalContainer = document.getElementById("animal-info"); // hna kan recuperiw bel ID l emplacement fin ghadi n7eto dik data li ghadi n fetchiw 
const btn = document.getElementById("btn");// han knarecuperiw l button li ghadi nstekhdmoh bach nfetchiw data inshalah 

btn.addEventListener("click", async function () { // had ster kanzido wahed l event click l dik lconst btn li ghadi t executer wahed l async function fach ghadi n clickiw 3lih 
    // async 9bel men functtion kat3endi anaho had l function asynchronous i3ni kat executa en parallele o katreturne lina wahed l promis 
    try { // ghadi ndiro wahed l exepcetion bach n handliw les erore li momkin nti7o fihom 
        const response = await fetch(`https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);
        // han usina `fetch` bach n jibo data men dak l url li 3etinaha fel argument (API) o keyword dial awit hadak kitsena takatsali l operation dial fetching 3ad kidoz l dakchi li men be3d
        // await key li derna kay3ni anaho had l function ghadi t7bes l execution ta ikeml fetching dial data dialna men url li 3entinah 
         // The fetch function returns a promise that resolves to the response of the request.
        if (!response.ok) throw new Error("Network response was not ok");// hna ila kant data machi hia hadik b me3na akhor statu code machi bin 200 o 299 ghadi treturna lina wahed l erore message ("Network response was not ok")
        const data = await response.json(); 
        // hna dik data li fetchina ghadi n7owelhoma l json o ghadi n stokiwha f had l const 
        // Here, response.json() returns a promise that resolves to the JSON content of the response.
        // The await keyword pauses the execution of the function until this promise resolves, 
        // and then assigns the resolved value (the parsed JSON data) to the 'data' constant.
        renderHTML(data);// had l function dial `renderHtml` hia li ghadi t afficher lin dakchi li fetchina `data` f la page dialna 
    } catch (error) { // han ila trat chi mochkila fel fetching dial data ghadi t retunrna lina wahed l erore 
        console.error("Fetch error:", error); 
    }

    pageCounter++; // hna derna incrementation l dak counter li drna 
    if (pageCounter > 3) {
        btn.classList.add("hide-me"); // il fetchina data 3 dial merat ghadi it7iyed dak l button 
    }
});

function renderHTML(data) {
    data.forEach(animal => {
        const paragraph = document.createElement("p");// kan criw wahed l element jedid '<p></p>' 
        paragraph.textContent = `${animal.name} is a ${animal.species} that likes to eat ${animal.foods.likes.join(" and ")} and dislikes ${animal.foods.dislikes.join(" and ")}.`; // hna kan7eto dik data li fetchina f dik l paragraphe jedida li creyena 
        animalContainer.appendChild(paragraph);// hadi bach n zido dik l paragraphe li html dialna 
    });
}
