console.log ('controllo collegamento html-js');

const age = (prompt ('Quanti anni hai?'));
console.log ('Età',age);

const km = (prompt ('Quanti chilometri percorri?'));
console.log ('Chilometri da percorrere',km);

const price_per_km = 0.21;
console.log ('Prezzo del viaggio al chilometro',price_per_km);

// prezzo senza scontistica
const price = price_per_km * km;
// const message = 'Non hai diritto alla scontistica'--> Per perfezionare l'esercizio mettendo in stampa la lista dei calcoli e l'importo al centro

if (age > 18 && age < 65) {
  console.log ('Prezzo del viaggio senza scontistica',price);
  document.getElementById ("prezzo").innerHTML += " "+price.toFixed(2)+" ";
}

// scontistica under 18
const discountUnderage = ((price * 20) / 100);
const discountUnder_price = price - discountUnderage;

if (age <= 18){
  console.log ('Prezzo del viaggio senza scontistica',price);
  console.log ('Sconto del 20% sul prezzo', discountUnderage);
  console.log ('Prezzo scontato under 18', discountUnder_price);
  document.getElementById ("prezzo").innerHTML +=  " "+discountUnder_price.toFixed(2)+" ";
} 

// scontistica over 65
const discountOver = ((price * 40) / 100);
const discountOver_price = price - discountOver;

if (age >= 65){
  console.log ('Prezzo del viaggio senza scontistica',price);
  console.log ('Sconto del 40% sul prezzo', discountOver);
  console.log ('Prezzo scontato over 65', discountOver_price);
  document.getElementById ("prezzo").innerHTML += " "+discountOver_price.toFixed(2)+ " ";
}

// Gli "else" in questo caso sono solo in aggiunta

