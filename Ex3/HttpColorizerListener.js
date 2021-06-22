const HttpListener = require('./HttpListener').HttpListener;

class HttpColorizerListener extends HttpListener {

    constructor(res){
        super();
        this.res = res;
    }

    enterMessage(ctx){
        this.res.write('<div class="message">');
    }

    exitMessage(ctx){
        //console.log("Enter Message");
        this.res.write('</div>');
        this.res.write('</div>');
    }

    enterRequest_line(ctx){
        this.res.write('<div class="request">');
        this.res.write('<span class="request-line">');
    }

    exitRequest_line(ctx){
        this.res.write('</span>\n');
        //this.res.write('</div>');
    }

    exitMethod(ctx){
        this.res.write(`<span class="method">${ctx.getText()} </span>`);
    }

    exitRequest_target(ctx){
        this.res.write(`<span class="request-target">${ctx.getText()} </span>`);
    }

    enterHttp_version(ctx){
        this.res.write('<span class="">');
    }

    exitHttp_version(ctx){
        //this.res.write(ctx.getText());
        this.res.write(`${ctx.getText()} </span>`);
    }

    enterStatus_line(ctx){
        this.res.write('<div class="response">');
        this.res.write('<span class="status-line">');
    }

    exitStatus_line(ctx){
        this.res.write('</span>\n');
    }

    enterStatus_code(ctx){
        this.res.write('<span class="status-code">');
    }

    exitStatus_code(ctx){
        this.res.write(`${ctx.getText()} </span>`);
    }

    enterReason_phrase(ctx){
        this.res.write('<span class="">');
    }

    exitReason_phrase(ctx){
        this.res.write(`${ctx.getText()} </span>`);
    }



    enterHeader_field(ctx){
        this.res.write('<span class="">');
    }

    exitHeader_field(ctx){
        this.res.write('</span>\n');
    }

    enterField_name(ctx){
        this.res.write('<span class="key">');
    }

    exitField_name(ctx){
        this.res.write(`${ctx.getText()}: </span>`);
    }

    enterField_value(ctx){
        this.res.write('<span class="value">');
    }

    exitField_value(ctx){
        this.res.write(`${ctx.getText()}</span>`);
    }

}

exports.HttpColorizerListener = HttpColorizerListener;
