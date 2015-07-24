var mymodule = require ('./mymodule.js');

mymodule(process.argv[2], process.argv[3], display);

function display (err, arg) {
    if (err) return err;
    arg.forEach (function (item) {
        console.log (item);
    });

}
