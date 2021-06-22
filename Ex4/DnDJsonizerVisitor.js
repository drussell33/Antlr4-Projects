const DnDVisitor = require('./DnDVisitor').DnDVisitor;

class DnDJsonizerVisitor extends DnDVisitor {

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
        let name = this.visitName(ctx);
        let race = `"race": "${ctx.race().getText()}",\n`;
        let background = `"background": "${ctx.background().getText()}",\n`;
        let date = `"date": "${ctx.date().getText()}",\n`;
        let fclass = this.visitFclass(ctx);
        let justClass = this.visitJustClass(ctx);
        let subClass = this.visitSubclass(ctx);
        let level = `"level": ${ctx.level().getText()},\n`;
        let feats = this.visitFeats(ctx);
        let hp = `"HP": ${ctx.hP().getText()},\n`;
        let ac = `"AC": ${ctx.aC().getText()},\n`;
        let str = `"Str": ${ctx.str().getText()},\n`;
        let dex = `"Dex": ${ctx.dex().getText()},\n`;
        let con = `"Con": ${ctx.con().getText()},\n`;
        let fint = `"INT": ${ctx.fint().getText()},\n`;
        let wis = `"Wis": ${ctx.wis().getText()},\n`;
        let cha = `"Cha": ${ctx.cha().getText()},\n`;
        let alignment = `"alignment": "${ctx.alignment().getText()}",\n`;
        let skills = this.visitSkills(ctx);
        let weapons = this.visitWeapons(ctx);
        let spells = this.visitSpells(ctx);
        let day = `"day": "${ctx.day().getText()}",\n`;
        let processedAlignment = `"processedAlignment": "${ctx.processedAlignment().getText()}",\n`;
        let good = `"good": "${ctx.good().getText()}",\n`;
        let lawful = `"lawful": "${ctx.lawful().getText()}",\n`;
        let processedRace = `"processedRace": "${ctx.processedRace().getText()}",\n`;
        let processSpells = this.visitProcessedSpells(ctx);
        let processedWeapons = this.visitProcessedWeapons(ctx);
        let levelGroup = `"levelGroup": "${ctx.levelGroup().getText()}"\n`;
         
        return "{" + name + race + background + date + fclass + justClass + subClass + level + feats + hp + ac + str + dex + con + fint + wis + cha + alignment + skills + weapons + spells + day + processedAlignment + good + lawful + processedRace + processSpells + processedWeapons + levelGroup + "}";
    }

    visitFclass(ctx){
        let farray = ctx.fclass().field_list().children;
        let out = [];
        if(farray != null){
            let arrayLength = farray.length;
            
            for(let i =0; i < arrayLength; i++){
                if(farray[i] != '|'){
                    out.push('"' + (farray[i].getText()) + '"');
                }
                
            }
        }   
        return `"class": [` + out.join(',') + "],\n";
    }

    visitJustClass(ctx){
        let farray = ctx.justClass().field_list().children;
        let out = [];
        if(farray != null){
            let arrayLength = farray.length;
            
            for(let i =0; i < arrayLength; i++){
                if(farray[i] != '|'){
                    out.push('"' + (farray[i].getText()) + '"');
                }
                
            }
        }   
        return `"justClass": [` + out.join(',') + "],\n";
    }

    visitSubclass(ctx){
        let farray = ctx.subclass().field_list().children;
        let out = [];
        if(farray != null){
            let arrayLength = farray.length;
            
            for(let i =0; i < arrayLength; i++){
                if(farray[i] != '|'){
                    out.push('"' + (farray[i].getText()) + '"');
                }
                
            }
        }   
        return `"subClass": [` + out.join(',') + "],\n";
    }

    visitFeats(ctx){
       
        let farray = ctx.feats().field_list().children;
        let out = [];
        if(farray != null){
            let arrayLength = farray.length;
            
            for(let i =0; i < arrayLength; i++){
                if(farray[i] != '|'){
                    out.push('"' + (farray[i].getText()) + '"');
                }
                
            }
        }
         return `"feats": [` + out.join(',') + "],\n";
  
    }

    visitSkills(ctx){
        let farray = ctx.skills().field_list().children;
        let out = [];
        if(farray != null){
            let arrayLength = farray.length;
            
            for(let i =0; i < arrayLength; i++){
                if(farray[i] != '|'){
                    out.push('"' + (farray[i].getText()) + '"');
                }
                
            }
        }   
        return `"skills": [` + out.join(',') + "],\n";
    }

    visitWeapons(ctx){
        let farray = ctx.weapons().field_list().children;
        let out = [];
        if(farray != null){
            let arrayLength = farray.length;
            
            for(let i =0; i < arrayLength; i++){
                if(farray[i] != '|'){
                    out.push('"' + (farray[i].getText()) + '"');
                }
                
            }
        }   
        return `"weapons": [` + out.join(',') + "],\n";
    }

    visitSpells(ctx){
        let farray = ctx.spells().field_list().children;
        let out = [];
        if(farray != null){
            let arrayLength = farray.length;
            
            for(let i =0; i < arrayLength; i++){
                if(farray[i] != '|'){
                    out.push('"' + (farray[i].getText()) + '"');
                }
                
            }
        }   
        return `"spells": [` + out.join(',') + "],\n";
    }

    visitProcessedSpells(ctx){
        let farray = ctx.processedSpells().field_list().children;
        let out = [];
        if(farray != null){
            let arrayLength = farray.length;
            
            for(let i =0; i < arrayLength; i++){
                if(farray[i] != '|'){
                    out.push('"' + (farray[i].getText()) + '"');
                }
                
            }
        }   
        return `"processedSpells": [` + out.join(',') + "],\n";
    }

    visitProcessedWeapons(ctx){
        let farray = ctx.processedWeapons().field_list().children;
        let out = [];
        if(farray != null){
            let arrayLength = farray.length;
            
            for(let i =0; i < arrayLength; i++){
                if(farray[i] != '|'){
                    out.push('"' + (farray[i].getText()) + '"');
                }
                
            }
        }   
        return `"processedWeapons": [` + out.join(',') + "],\n";
    }

    visitName(ctx){
        return `"name": "${ctx.name().getText()}",\n`;
    }

}

exports.DnDJsonizerVisitor = DnDJsonizerVisitor;

