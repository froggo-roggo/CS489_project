function childIter(e, n, d, lst){
	var res = {};
	res['reslist'] = lst;
	res['detres'] = d;
	if(n == 0) return res;
	var clst = e.children;
	if(clst.length == 0) return res;
	for (var c of clst){
		if((((c.tagName) == "DIV")||((c.tagName) == "BUTTON")||((c.tagName) == "A"))){
			d = true;
			c.style.border = "5px solid #ff00ff";
			childIter(c, n-1, d, lst);
			lst.push(c);
		}
	}
	
	res['reslist'] = lst;
	res['detres'] = d;
	return res;
}