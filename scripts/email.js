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
        var bounds;

        if (c.match(/[a-z]/g)) bounds = [97, 122];
        else if (c.match(/[A-Z]/g)) bounds = [65, 90];
        else continue;

        var r = c.charCodeAt(0) + (reverse ? -o : o);
        while (r < bounds[0]) r = r + 26;
        while (r > bounds[1]) r = r - 26;
        out = out.replaceAt(i, String.fromCharCode(r));
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
