'use strict';
window.onload=function(){
	const en=document.getElementById('en');
	const ja=document.getElementById('ja');
	const btn=document.getElementById('btn');
	const total=document.getElementById('total');
	const table=document.getElementById('table');
	class Color{
		constructor(en,ja){
			this.en=en;
			this.ja=ja;
		}
		showInfo(){
			return `<td>${this.en}</td><td>${this.ja}</td>`;
		}
	}
	let colors=[];

	const loadData=localStorage.getItem('colors');
	if(loadData!=null){
		let jsonArr=JSON.parse(loadData);
		for(let i=0;i<jsonArr.length;i++){
			let color=new Color(jsonArr[i].en,jsonArr[i].ja);
			colors.push(color);
		}
		createTable();
	}

	btn.addEventListener('click',()=>{
		let color=new Color(en.value,ja.value);
		colors.push(color);
		en.value='';
		ja.value='';
		createTable();
		localStorage.setItem("colors",JSON.stringify(colors));
	});

	function createTable(){
		//tag含みで入れたい時はinnerHTML
		table.innerHTML='<tr><th>単語</th><th>意味</th></tr>';
		for(let i=0;i<colors.length;i++){
			let tr=document.createElement('tr');
			tr.innerHTML=colors[i].showInfo();
			table.appendChild(tr);
			total.textContent=`全${colors.length}件`;
		}
	}
	createTable();
};
