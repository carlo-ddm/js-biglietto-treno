console.log ('controllo collegamento html-js');

const age = (prompt ('Quanti anni hai?'));
console.log ('Età',age);

const kil = (prompt ('Quanti chilometri percorri?'));
console.log ('Chilometri da percorrere',kil);

const price_per_kil = 0.21;
console.log ('Prezzo del viaggio al chilometro',price_per_kil);

const price = price_per_kil * kil;
console.log ('Prezzo del viaggio senza scontistica',price);


// scontistica under 18
const discountUnderage = ((price * 20) / 100);
console.log ('Sconto del 20% sul prezzo', discountUnderage);

const discountUnder_price = price - discountUnderage;
console.log ('Prezzo scontato under 18',Math.round (discountUnder_price));

if (age < 18){
  discountUnder_price;
} else {
  price;
}

// scontistica over 65
const discountOver = ((price * 40) / 100);
console.log ('Sconto del 40% sul prezzo', (discountOver));

const discountOver_price = price - discountOver;
console.log ('Prezzo scontato over 65',Math.round (discountOver_price));

if (age > 65){
  discountOver_price;
} else {
  price;
}
// Gli "else" in questo caso sono solo in aggiunta