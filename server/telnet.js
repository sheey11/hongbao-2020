var net = require('net')
let server = net.createServer(function (conn) {
    buf = '' // for windows users

    conn.write(
        '\n' +
        ' > Welecome! One more step to get the red packet token.\n' +
        ' > Please enter the password: '
    );
    conn.on('data', function (data) {
        str = data.toString(); // decode the data

        if(str.endsWith('\n') || str.endsWith('\r')){ // input ended
            // for unix users
            str = str.replace('\r', '').replace('\n', '');
            buf += str;

            // check the pwd
            console.log('got: ' + buf);
            if (buf == 'GZDEB=8@giH2ENUA') {
                conn.write(
                    ' > Congrats! You\'ve passed the final level.\n' +
                    ' > The token is 313493594, have fun!\n' +
                    ' > Don\'t forget to say thanks to the author.\n'
                );
                conn.destroy()
            } else {
                conn.write(' > Sorry, wrong password.\n > Please enter the password: ');
            }
            buf = '';
        }else{
            // still inputing
            buf += str;
        }
    });
});

server.listen(2020, function () {
    console.log('\ttelnet server is listening on port: 2020');
});