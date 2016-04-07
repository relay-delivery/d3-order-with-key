(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.d3OrderWithKey = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var d3 = global.d3 || require('d3');

module.exports = function sortOrderElements(fnKey){
	fnKey = fnKey || function(d){return d;};
	return function(){
		for (var j = -1, m = this.length; ++j < m; ) {
			let seen = new d3.set();
			for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
				node = group[i];
				if (!node)  continue;

				if (next && next !== node.nextSibling && (!node.nextSibling || seen.has(fnKey(node.nextSibling.__data__)))){
					next.parentNode.insertBefore(node, next);
				}

				seen.add(fnKey(node.__data__));
				next = node;
			}
		}
		return this;
	};
}


},{"d3":undefined}]},{},[1])(1)
});
