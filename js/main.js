

// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono
// ai vari tipi di icone (animal, vegetable, user). Quando l’utente 
//seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.


const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];



let container = document.getElementById("icons_container");


// Creo funzione per inserire i box

function creaBox() {
    for( let i=0; i<icons.length;i++)

	    container.innerHTML+= `
            <div class="col-2 d-flex align-items-center justify-content-center text-center box">
	            <div class="${icons[i].color}">
                <i class="${icons[i].family} ${icons[i].prefix}${icons[i].name}"></i>
		        <div class="nome">${icons[i].name}</div>
	            </div> 
            </div>
		
		    `
  };

  creaBox(icons);


// let tipologia = document.getElementById('tipologia');

// function sceltaTipo() {
//     tipologia.addEventListener('change');{

//         if(tipologia == "all"){
//             container.innerHTML += "";
            
//         } if(tipologia == "animal"){
//             container.innerHTML += "";
            
//         } if (tipologia == "vegetable"){
//             container.innerHTML += "";
            
//         } if (tipologia == "user"){
//             container.innerHTML += "";
            
//         }
//     }
// };

let tipologia = document.getElementById('tipologia');

tipologia.addEventListener('change',function () {

    if(tipologia == "all"){
        container.innerHTML = "";
    }
   
});