'use strict';
window.onload=function(){
	class Card{
		constructor(suit,num){
			this.suit=suit;
			this.num=num;
			this.front=`${this.suit}${this.num<10?'0':''}${this.num}.gif`;
			if(num==1){
				this.num=14;
			}
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
	msg.textContent='ボタンを押すと始まるよ';
	const btn=document.getElementById("btn");
	const high=document.getElementById("high");
	const low=document.getElementById("low");
	let count=0;
	let score=0;
	let hiScore=0;


	btn.addEventListener('click',()=>{
		msg.textContent='次の数字は今の数字より';
		card1.src=`images/${cards[count].front}`;
		card2.src='images/z01.gif';
		btn.classList.add('none');
		high.classList.remove('none');
		low.classList.remove('none');
	});

	const gameEnd=()=>{
		msg.textContent=`今回の正解数は${score}回です`;
		btn.textContent='retry';
		high.classList.add('none');
		low.classList.add('none');
		count=0;
		score=0;
		shuffle();
	}

	const select=(eve)=>{
		btn.textContent='次へ';
		btn.classList.remove('none');
		card1.src=`images/${cards[count].front}`;
		card2.src=`images/${cards[count+1].front}`;
		let select=eve.target.textContent;
		if(cards[count].num==cards[count+1].num){
			msg.textContent='当たり扱いです！';
			score++;
		}else if(select=='高い'){
			if(cards[count].num<cards[count+1].num){
				msg.textContent='当たりです！';
				score++;
			}else{
				msg.textContent='ハズレです！';
			}
		}else if(select=='低い'){
			if(cards[count].num>cards[count+1].num){
				msg.textContent='当たりです！';
				score++;
			}else{
				msg.textContent='ハズレです！';
			}
		}
		if(score>hiScore){
			hiScore=score;
		}
		count++;
		if(count==5){
			gameEnd();
		}
		high.classList.add('none');
		low.classList.add('none');
	};
	high.addEventListener('click',select);
	low.addEventListener('click',select);
};
