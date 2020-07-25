
for (var i=1; i<8; i++) {

    for (var j=i; j<8; j++) {

        console.log("i = " + i);
        console.log("j = " + j);

        if (j==i) {
        document.write('<span> &nbsp' + "*" + '</span> </br>');
        } else {
            for (j=9-j; j<8; j++) {
                document.write('<span> &nbsp' + "*" + '</span>');  
            }
        }
    }
        
}

