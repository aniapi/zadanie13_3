process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
           var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
            process.stdout.write('Quitting app!\n');
            process.exit();
            break;
         case '/version':
            process.stdout.write('Wersja to: ' + process.versions.node + '\n');
            break;
         case '/language':
            process.stdout.write('Język systemowy to: ' + process.env.LANG + '\n');
            break; 
         default:
            process.stderr.write('Wrong instruction!\n');
        }
    }
});



