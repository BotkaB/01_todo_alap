import Sor from "./Sor.js";

export default class TablazatMegjelenit {
    #lista = [];
    constructor(lista, szuloElem) {
        console.log(lista)
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.tablazatKiir();
        this.tbodyElem = $(".sorok")
        this.sorokLetrehozasa()
    }

    sorokLetrehozasa() {this.#lista.forEach((elem,index)=>{
        elem.id=index
        new Sor(elem, this.tbodyElem)
    })

    }
    tablazatKiir() {
        console.log(this.szuloElem)
        this.szuloElem.append(`<table class="table table striped">
    <thead>
    <tr>
        <th>Szakdolgozat lépés</th>
        <th>Határidő</th>
        <th></th>
    </tr>
     </thead>
   <tbody class="sorok"></tbody>
</table>`
        )

    }
}