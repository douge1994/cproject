	

	// magic numbers for common used ormats
	var magicNumbers = require( "./lib/magic.js" );

	// compile a regexp string for detecting the types
	var keys = Object.keys( magicNumbers )
		, l = keys.length
		, patterns = []
		, pattern;

	while( l-- ) patterns.push( keys[ l ] );
	pattern = "^(" + patterns.join( "|" ) + ").*$";


	// check for magic numbers in the first 20 bytes
	module.exports = function( data, callback ){
		if ( data && Buffer.isBuffer( data ) && data.length > 0 ){			
			var match = new RegExp( pattern, "gi" ).exec( data.slice( 0, 20 ).toString( "hex" ) );
			if ( match ) callback( null, magicNumbers[ match[ 1 ].toUpperCase() ] );
			else callback();
		} else callback();
	};