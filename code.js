// For full API documentation, including code examples, visit http://wix.to/94BuAAs
// Author : Christophe Michiels
// (c) 2019 MIT License

import {local} from 'wix-storage';

let languages = ["en", "nl", "de"];
let default_language = "en"

let language = local.getItem("language");
if (language === "") {
	language = default_language;
	local.setItem("language", language);
}

function show_item(itemname) {
    $w(itemname).show();
	$w(itemname).expand();
}

function hide_item(itemname) {
    $w(itemname).hide();
	$w(itemname).collapse();
}

function translate_all() {
	local.setItem("language", language); // Store for next time
	let textElements = $w("Text");
	textElements.forEach(function(entry) {
   		//console.log(entry.id); // Debug
   		//console.log(entry.id.substring(0, 2)); // Debug
			// Only do something if the language is a listed language indentifier -> if not leave text as is
			if (languages.includes(language)) {						
				if (entry.id.substring(0, 2) === language) {
	    			//console.log(entry); // Debug
					show_item('#' + entry.id);
				}
				else { // other language -> hide ;; if it does no start with a lang tag -> show
	    		//console.log(entry); // Debug
					//Only do something if the text tag begins with a language identifier -> if not leave text as is
					if (languages.includes(entry.id.substring(0, 2))) {
						hide_item('#' + entry.id);
					} // Leave other strings as they are
				}
			} // Leave other strings as they are
	});
}

$w.onReady(function () {
	
  //FYI: Write your own page related code here...
  
	translate_all();

	$w("#enbutton").onClick( (event) => {
		language = "en";
		translate_all();
	});

	$w("#nlbutton").onClick( (event) => {
		language = "nl";
		translate_all();
	});

	$w("#debutton").onClick( (event) => {
		language = "de";
		translate_all();
	});

});
