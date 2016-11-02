function Add() {
	$("entTable tbody").append(
		"<tr>"+
		"<td><input type='text' /></td>"+
		"<td><input type='text' /></td>"+
		"<td><input type='text' /></td>"+
		"</tr>");
	$("#submit").bind("click", Save);
};

