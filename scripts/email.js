// this code here is made by the fantastic cinder, check out her stuff at cyndr.dev!
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) 
        + replacement 
        + this.substr(index + replacement.length);
}

String.prototype.rotpos = function(start, reverse=false) {
    var out = this.trim();
    for (var i = 0; i < out.length; i++) {
        var c = out.charAt(i);
        var o = start + i;
        var r = c.charCodeAt(0) + (reverse ? -o : o);

        if (c.match(/[a-z]/g)){
            while (r > 122) r = r - 26;
            while (r < 97) r = r + 26;
            c = String.fromCharCode(r);
        }
        else if (c.match(/[A-Z]/g)) {
            while (r > 90) r = r - 26;
            while (r < 65) r = r + 26;
            c = String.fromCharCode(r);
        }
        out = out.replaceAt(i, c);
    }

    return out;
}

function deobfuscate(elem) {
    elem.attr('href', "mailto:" + elem.attr('data-email').rotpos(13, true));
}

$(document).ready(function(){
    $('.deobf').each(function() {
        deobfuscate($(this));
    });
});
