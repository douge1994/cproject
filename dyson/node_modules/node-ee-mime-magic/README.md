node-ee-mime-magic
==================

In memory mime sniffer without depencies ( using the files magic numbers )

currently supporting astonishing 3 file types:

* gif
* jpeg
* png

## Usage

	var mimeMagic = require( "node-ee-mime-magic" );

	mimeMagic( buffer, function( err, mimeType ){
		if ( err || !mimeType ) console.log( "failed to detect mime type :(" );
		else console.log( "mime type:", mimeType.mime, "extension", mimeType.extension );
	} );