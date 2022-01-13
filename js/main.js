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

function creaBox( iconeDaStampare ) {
    for( let i=0; i<iconeDaStampare.length;i++)

	    container.innerHTML+= `
            <div class="col-2 d-flex align-items-center justify-content-center text-center box">
	            <div class="${iconeDaStampare[i].color}">
                <i class="${iconeDaStampare[i].family} ${iconeDaStampare[i].prefix}${iconeDaStampare[i].name}"></i>
		        <div class="nome">${iconeDaStampare[i].name}</div>
	            </div> 
            </div>
		
		    `
  };

  creaBox(icons);

//Filtro elementi array

let animals = icons.filter((elemento) =>{
      return elemento.type == "animal";
  });

let vegetables = icons.filter((elemento) =>{
    return elemento.type == "vegetable";
});

let users = icons.filter((elemento) =>{
    return elemento.type == "user";
});


//Creo evento con scelta tipologia

let tipo = document.getElementById('tipologia');

tipo.addEventListener('change',function () {


    if(tipo.value == "all"){
        container.innerHTML = "";
		creaBox( icons )
       
    }else if (tipo.value == "animals") {
		container.innerHTML = "";
		console.log( animals )
		creaBox( animals )
    }else if (tipo.value == "vegetable") {
		container.innerHTML = "";
		creaBox( vegetables )
    }else if (tipo.value == "user") {
		container.innerHTML = "";
		creaBox( users )
    }
});

// function generaColori() {
// 	let randomColor = “#”+Math.floor(Math.random()*16777215).toString(16);
// }

