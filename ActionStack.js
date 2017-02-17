/**
 * Action Stack.js
 *
 * Copyright 2017, Philgookang
 * GNU General Public License v3.0
 *
 * If you found bug, please contact me via email <philgookang@gmail.com>
 *
 * @author Phil Goo Kang aka piggybank
 * @version 0.0.1
 * @url https://github.com/gromo/jquery.scrollbar/
 *
 */
var ActionStack = (function() {

	// create object, with a default empty queue
	var that = {
		"_queue" : []
	};

	/**
	 * Add function to waiting stack line
	 * @param {Function} callback_function this object(function) is called back at the end of the page
	 */
	that.add = function( callback_function ) {
		// add cabllback function to the stack
		that._queue.push(callback_function);
	};

	/**
	 * Run through the queue waiting line and run all the functions
	 */
	that.process = function() {

		// loop through the queue
		for( var  i = 0; i < that._queue.length; i++ ) {

			// run search object(function) in the queue
			(that._queue[i])();
		}
	};
})();
