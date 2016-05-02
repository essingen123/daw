"use strict";

ui.sampleCreate = function( uifile, trackId, xem ) {
	var sample = new ui.Sample( uifile )
		.inTrack( trackId )
		.moveX( xem )
		.updateWidth();
	if ( ui.isMagnetized ) {
		sample.xemMouse = sample.xemMagnet;
	}
	ui.samples.push( sample );
	return sample;
};