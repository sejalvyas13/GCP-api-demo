var Flac = require('libflacjs')();

// use one of the optimization-variants:
//  * <empty> / "release"
//  * "min"
//  * "dev"
// use one of the technology-variants:
//  * <empty> / "asmjs"
//  * "wasm"
//
// can be combined with dot, e.g. "min.wasm":
var FlacFactory = require('libflacjs');
var Flac = FlacFactory('min.wasm');
Flac.on('ready', function(flac){
    console.log(flac)
})