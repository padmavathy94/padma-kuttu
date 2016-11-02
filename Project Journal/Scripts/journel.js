$ lessc build/build_standalone.less datepicker.css



$('.datepicker').datepicker();

var title = [ { "tit": $('#title') } ];
var author = [ { "aut": $('#author') } ];
var content = [ { "con": $('#content') } ];

var Entry = document.getElementsById("entry");

Entry = function() {
	var n = 1;
	var entry1 = function(t) {
		for(var i = 0; i <= n; i++) {
			var addtext = document.createElement("input");
			addtext.type = "text";
			addtext.name = "title";
			addtext.id = "title";
			addtext.value = t;
		}
	}

	var entry2 = function(a) {
		for(var j = 0; j < n; j++) {
			var addtext = document.createElement("input");
			addtext.type = "text";
			addtext.name = "author";
			addtext.id = "author";
			addtext.value = a;
		}
	}

	var entry3 = function(c) {
		for(var k = 0; k < n; k++) {
			var addtext = document.createElement("input");
			addtext.type = "text";
			addtext.name = "content";
			addtext.id = "content";
			addtext.value = c;
		}
	}
	Entry();
	entry1();
	entry2();
	entry3();
}

var t = [];
var a = [];
var c = [];


var title = function () {
	for (var i = 0; i >= 0; i++) {
		title[i] = {};
		title[i].tit = t[i];
	}
}

var author = function () {
	for (var j = 0; j >= 0; j++) {
		author[j] = {};
		author[j].aut = a[j];
	}
}

var content = function () {
	for (var k = 0; k >= 0; k++) {
		content[k] = {};
		content[k].con = c[i];
	}
}

$(function() {
	$('#')
})
