import TablazatModel from "../Model/TablazatModel.js";
import TablazatMegjelenit from "../View/TablazatMegjelenit.js";

export default class TablazatController{
    constructor(){
      
        this.tModel=new TablazatModel();
        const lista=this.tModel.getList();
       
        this.tMegjelenit=new TablazatMegjelenit(lista,$(".tarolo"))
        this.torlesEsemeny()
    }

    torlesEsemeny(){
        $(window).on("torles", (event)=>{

        console.log(event.detail)
        let index=event.detail.id

        this.tModel.torles(index)

        const lista=this.tModel.getList()
        this. tMegjelenit=new TablazatMegjelenit(lista,$(".tarolo"))

        //át kell adni a modelnek az indexet, a modelnek törölnie kell a listából az elemet
        // utána le kell kérdezni az adatokat újra meg kell jeleníteni
    })
    }
}
    