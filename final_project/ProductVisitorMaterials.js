const ProductVisitor = require('./ProductVisitor').ProductVisitor;

class ProductVisitorMaterials extends ProductVisitor {

    constructor(){
        super();
    }

    visitFile = function(ctx) {

        let rowArray = ctx.row();
        let out = [];
        for(let i =0; i < rowArray.length; i++){
            out.push(this.visitRow(rowArray[i]));
        }

        return "[" + out.join() + "]";
      };

      visitRow(ctx){

        //let code = `"code": ${ctx.code().getText()}",\n`;
        //let url = `"url": "${ctx.url().getText()}",\n`;
        //let product_name = `"product_name": "${ctx.product_name().getText()}",\n`;
        //let packaging = `"packaging": "${ctx.packaging().getText()}",\n`;
        // let packaging_tags = `"packaging_tags": "${ctx.packaging_tags().getText()}",\n`;
        // let packaging_text = `"packaging_text": "${ctx.packaging_text().getText()}",\n`;
        // let manufacturing_places = `"manufacturing_places": "${ctx.manufacturing_places().getText()}",\n`;

        let code = this.visitCode(ctx);
        let url = this.visitUrl(ctx);
        let product_name = this.visitProduct_name(ctx);
        let packaging = this.visitPackaging(ctx);
        let packaging_tags = this.visitPackaging_tags(ctx);
        let packaging_text = this.visitPackaging_text(ctx);
        let manufacturing_places = this.visitManufacturing_places(ctx);

        return "{" + code+ url + product_name + packaging + packaging_tags + packaging_text + manufacturing_places + "}";
    }
    
    
    visitCode(ctx){
        if(ctx.code() != null){
            return `"code": "${ctx.code().getText()}",\n`;
        } else {
          return `"code": "",\n`;
        }  
    }


    visitUrl(ctx){
        if(ctx.url() != null){
            return `"url": "${ctx.url().getText()}",\n`;
        } else {
          return `"url": "",\n`;
        }  
    }


    visitProduct_name(ctx){
        let farray = null;
        if(ctx.product_name() != null) {
            farray = ctx.product_name().children;
        } 
        //let farray = ctx.product_name().children;
        let out = [];
        if(farray != null){
            let arrayLength = farray.length;
            for(let i = 0; i < arrayLength; i++){
                out.push(farray[i].getText());                
            }
        }   
        return `"Product_name": ["` + out.join(',') + '"],\n';
    }


    visitPackaging(ctx){
        let farray = null;
        if(ctx.packaging() != null) {
            farray = ctx.packaging().children;
        } 
        let out = [];
        if(farray != null){
            let arrayLength = farray.length;
            for(let i =0; i < arrayLength; i++){
                out.push(farray[i].getText());              
            }
        }   
        return `"packaging": ["` + out.join(',') + '"],\n';
    }


    visitPackaging_tags(ctx){
        let farray = null;
        if(ctx.packaging_tags() != null) {
            farray = ctx.packaging_tags().children;
        } 
        let out = [];
        if(farray != null){
            let arrayLength = farray.length;
            for(let i =0; i < arrayLength; i++){
                out.push(farray[i].getText());                
            }
        }   
        return `"packaging_tags": ["` + out.join(',') + '"],\n';
    }

    visitPackaging_text(ctx){
        let farray = null;
        if(ctx.packaging_text() != null) {
            farray = ctx.packaging_text().children;
        } 
        let out = [];
        if(farray != null){
            let arrayLength = farray.length;
            for(let i =0; i < arrayLength; i++){
                out.push(farray[i].getText());                
            }
        }   
        return `"packaging_text": ["` + out.join(',') + '"],\n';
    }

    visitManufacturing_places(ctx){
        let farray = null;
        if(ctx.manufacturing_places() != null) {
            farray = ctx.manufacturing_places().children;
        } 
        let out = [];
        if(farray != null){
            let arrayLength = farray.length;
            for(let i =0; i < arrayLength; i++){
                out.push(farray[i].getText());                
            }
        }   
        return `"manufacturing_places": ["` + out.join(',') + '"]\n';
    }

}

exports.ProductVisitorMaterials = ProductVisitorMaterials;