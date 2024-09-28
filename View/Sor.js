export default class Sor{
    #adat={}
    
    constructor(adat,szuloElem){

        
        console.log(adat)
        this.#adat=adat
        this.szuloElem=szuloElem;
        this.sorMegjelenit();
    }

sorMegjelenit(){

    this.szuloElem.append(`
    <tr>
    <td>${this.#adat.tevekenyseg}</td>
    <td>${this.#adat.hatarido}</td>
    <td class="torol">🗑️</td>
    <th></th>
</tr>`)
    
}
    }
    
