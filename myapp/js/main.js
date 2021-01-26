'use strict';
window.onload=function(){
	class Card{
		constructor(suit,num){
			this.suit=suit;
			this.num=num;
			this.front=`${this.suit}${this.num<10?'0':''}${this.num}.gif`;
		}
	}
	const cards=[];
	const suits=['s','d','h','c'];
	for(let i=0;i<suits.length;i++){
		for(let j=1;j<=13;j++){
			let card=new Card(suits[i],j);
			cards.push(card);
		}
	}

	shuffle();

	function shuffle(){
		let i=cards.length;
		while(i){
			let index=Math.floor(Math.random()*i--);
			let temp=cards[index];
			cards[index]=cards[i];
			cards[i]=temp;
		}
	}

	const card1=document.getElementById("card1");
	const card2=document.getElementById('card2');
	const msg=document.getElementById("msg");
	const btn=document.getElementById("btn");
	let count=0;
	let hiScore=0;

	btn.addEventListener('click',()=>{
		msg.textContent='test';
	});

	function select(select){
		card1.src=`images/${cards[count].front}`;
		card2.src=`images/${cards[count+1].front}`;
		if(cards[count]==cards[count+1]){
			msg.textContent='当たり扱いです！';
			count++;
		}else if(select.equals('high')){
			if(cards[count]<cards[count+1]){
				msg.textContent='当たりです！';
				count++;
			}else{
				msg.textContent='ハズレです！';
			}
		}else if(select.equals('low')){
			if(cards[count]>cards[count+1]){
				msg.textContent='当たりです！';
				count++;
			}else{
				msg.textContent='ハズレです！';
			}
		}
		if(count>hiScore){
			hiScore=count;
		}
	}

};
