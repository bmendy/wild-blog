/*
This file define document schema for post
*/
'use strict'
let mongoose = require('mongoose')

// Create schema Post
module.exports = mongoose.model('Post', new mongoose.Schema({
	title: {
		type: String
	},

	visible: {
		type: Boolean,
		default: true
	},
	date: {
		type: Date
	},
	content: {
		type: String
	}
}, {
	timestamps: true
}))
