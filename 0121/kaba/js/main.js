'use strict';
window.onload=function(){
	let images=document.getElementsByClassName('headerImage');
	let zIndexMax=0;
	let zIndexChange=(eve)=>eve.target.style.zIndex=++zIndexMax;
	for(let i=0;i<images.length;i++){
		images[i].addEventListener('click',zIndexChange);
		/*
			images[i].addEventListener('click',function(){
			this.style.zIndex=++zIndexMax;
		});
		*/
	}
}
