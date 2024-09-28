import TablazatModel from "../Model/TablazatModel.js";
import TablazatMegjelenit from "../View/TablazatMegjelenit.js";

export default class TablazatController{
    constructor(){
      
        this.tModel=new TablazatModel();
        const lista=this.tModel.getList();
       
        this. tMegjelenit=new TablazatMegjelenit(lista,$(".tarolo"))
    }
    }