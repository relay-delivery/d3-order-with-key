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

