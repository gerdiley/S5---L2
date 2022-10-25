

var btn = document.getElementById('btn');

var spesa = Math.floor(Math.random() * 100);
var acquisti = 0;

btn.addEventListener('click', function () {


    reset();

    var budget = document.getElementById('customBudget').valueAsNumber;
    var limite = document.getElementById('customLimite').valueAsNumber;

    if (!budget || !limite) {
        document.getElementById('acquisti').innerHTML = `Attenzione! compilare i campi!`;
        document.getElementById('limite').innerHTML = ``;
        return;
    } else { document.getElementById('acquisti').innerHTML = ``; }


    while (budget > limite) {

        var spesa = Math.floor(Math.random() * 100);

        if (spesa < budget) {
            budget = budget - spesa;

            document.getElementById('lista').innerHTML += `<li> <span> Articolo n. ${acquisti + 1} </span> <br> Hai speso: <span>${spesa}€</span> <br> Ti rimangono: <span>${budget}€</span> </li>`;

            acquisti++;
        }

    }

    document.getElementById('acquisti').innerHTML = `Hai acquistato <span>${acquisti}</span> articoli`;

    document.getElementById('limite').innerHTML = `Hai meno di <span>${limite}€</span>. Ora basta, stai spendendo troppo!`;

})

function reset() {
    budget = "";
    limite = "";
    acquisti = "";

    document.getElementById('lista').innerHTML = "";
}