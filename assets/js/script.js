$(function(){

  //Funzioni
  //funzione per stampare la lista dei gatti in html
  const printOutput = (catColor, name, ...ribbon) => {
    //variabile per aggiungere fiocco in htlm
    let ribbonTarget = "";
    if(ribbon.length > 0){
      ribbonTarget = 
        `
        <i class="fas fa-ribbon" style="color: ${ribbon[0]}; opacity: ${ribbon[1]} "></i>
        `
    };

    //creo una variabile che poi appenderò all'elemento html
    let output = 
      `
      <li>
        <i class="fas fa-cat" style="color:${catColor}"></i>
        <span>${name}</span>
        ${ribbonTarget}
      </li>
      `;
  
    return output
  
  };

//-------------------Milestone 1-------------------
//creare un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
//Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

  //creo arrey di oggetti
  const cats = [
    {
      name: 'Pippo',
      age: 10,
      color: '#030303',
      gender: 'male'
    },
    {
      name: 'Pluto',
      age: 7.5,
      color: '#4f4e4d',
      gender: 'male'
    },
    {
      name: 'Paperina',
      age: 5.3,
      color: '#b68f75',
      gender: 'female'
    },
    {
      name: 'Macio',
      age: 5.5,
      color: '#c61021',
      gender: 'male'
    },
    {
      name: 'Maggie',
      age: 8.5,
      color: '#beb8b4',
      gender: 'female'
    },
  ];

  //ciclo forEach per stampare i gattini, con fontawesome del proprio colore, e il nome
  cats.forEach((cat) => {
    $('#oggetto-1 ul').append(printOutput(cat.color, cat.name));
  })

//-------------------Fine Milestone 1-------------------


//-------------------Milestone 2-------------------
//Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

  //creo due variabili per i colori del fiocco
  let pink = '#ffa6bb';
  let azure = '#40a3f8';

  //utlizzo map per creare un nuovo array di oggetti cats in cui aggiungo la proprietà ribbon con color e opacity

  const newCats = cats.map((cat) => {

    //creo variabili per le proprietà color e opacity da aggiungere al ribbon
    let color = (cat.gender === 'male') ? azure : pink;
    let opacity = cat.age / 10; //uso la proprietà age di cats per opacità colore 
    return {
      ...cat,
      ribbon: {
        color,
        opacity
      }
    };
    
  });

  //divido il nuovo array creato in maschi e femmine utilizzando filter
  const maleCats = newCats.filter((cat) => {
    return cat.gender === 'male';
  });

  const femaleCats = newCats.filter((cat) => {
    return cat.gender === 'female';
  });

  //stampo in html i due array creati utilizzando la funzione 
  femaleCats.forEach((cat) => {
    $('#oggetto-2-female ul').append(printOutput(cat.color, cat.name, cat.ribbon.color, cat.ribbon.opacity));
  });

  maleCats.forEach((cat) => {
    $('#oggetto-2-male ul').append(printOutput(cat.color, cat.name, cat.ribbon.color, cat.ribbon.opacity));
  });

//-------------------Fine Milestone 2-------------------


//-------------------Milestone 3-------------------
//Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.

  //utilizzo spread per unire i due array con gattini femmina e gattini maschio
  const orderedCats = [...femaleCats, ...maleCats];

  //genero nuovo array con nome, cognome e ribbon usando map
  const finalCats = orderedCats.map((cat) =>{
    //destrutturo il nuovo array per conservare solamente le proprietà che mi interessano
    const {name, color, ribbon} = cat;

    //stampo in html usando la funzione
    $('#oggetto-3 ul').append(printOutput(color, name, ribbon.color, ribbon.opacity));
    
    return {name, color, ribbon}

  });
  
  console.log(finalCats);
  
//-------------------Fine Milestone 3-------------------

});
