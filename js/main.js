

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

//Filtro elementi array

let animals = icons.filter((elemento) =>{
      return elemento.type = "animals";
  });

let vegetable = icons.filter((elemento) =>{
    return elemento.type = "vegetable";
});

let user = icons.filter((elemento) =>{
    return elemento.type = "user";
});


//Creo evento con scelta icone

let tipo = document.getElementById('tipologia');

tipo.addEventListener('change',function () {

    if(tipo == "all"){
        container.innerHTML = "";
        icons.forEach((elemento) => {
			container.innerHTML += creaBox(elemento);
		});
    }else if (tipo.value == "animals") {
		container.innerHTML = "";
		animals.forEach((elemento) => {
			container.innerHTML += creaBox(elemento);
		});
    }else if (tipo.value == "vegetable") {
		container.innerHTML = "";
		vegetable.forEach((elemento) => {
			container.innerHTML += creaBox(elemento);
		});
    }else if (tipo.value == "user") {
		container.innerHTML = "";
		user.forEach((elemento) => {
			container.innerHTML += creaBox(elemento);
		});
    }
});

