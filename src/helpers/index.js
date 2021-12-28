const fs = require('fs')
const path = require('path')

function readJsonFileSync(filepath, encoding) {

	if (typeof (encoding) == 'undefined') {
		encoding = 'utf8';
	}
	var file = fs.readFileSync(filepath, encoding);
	return JSON.parse(file);
}

function getJSON(file) {
	var filepath = path.join(__dirname, '..', file)
	return readJsonFileSync(filepath);
}

function firstName(name) {
	console.log(name);
	const splitName = String(name).split(" ");
	return splitName[0];
}

function lastName(name) {
	const splitName = String(name).split(" ");
	return splitName[1];
}

module.exports = {
	getJSON,
	firstName,
	lastName
}