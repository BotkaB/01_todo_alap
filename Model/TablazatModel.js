import {TODOLIST2} from "./adatok.js";

export default class TablazatModel{
#lista=[];

constructor(){
this.#lista=TODOLIST2

}

getList(){
    return this.#lista
}

torles(index){
    this.#lista.splice(index,1)
}
}