(function(window){
	window.onload = function(){
		//全屏滚动块
		screenScrolling()
		function screenScrolling(){
				let box = document.getElementById('box');
				let openBox = document.getElementById('openBox')
				let Bbox = new Cboxc();
				Bbox.ChuShi(openBox,box)
				function Cboxc(){
					this.ChuShi = function(openBox,box){
						this.openBox = openBox;
						this.openBoxs = this.openBox.children;
						this.box = box;
						this.boxs = this.box.children;
						this.num = 0;
						this.Create();
						this.ClickNum();
						this.StyleBack();
						this.lungun();
						this.ifOpen();
					}
					this.Create = function(){
						for (let i = 0; i < this.boxs.length; i++) {
							let Inner = document.createElement('a');
							Inner.className = 'active';
							this.openBox.appendChild(Inner);
						};
					}
					this.IfNum = function(tra){
						if (tra == true) {
							if (this.num < this.boxs.length-1) {
								this.num ++;
								this.start();
							}else{
								return ;
							}
							this.StyleBack();
						}else{
							if (this.num > 0) {
								this.num --;
								this.start();
							}else{
								return ;
							}
							this.StyleBack();
						}
					}
					this.StyleBack = function(){
						this.openBoxs[this.num].style.background = 'red';
						[...this.openBoxs].forEach(function(value,index){
							value.style.background = '';
						})
						this.openBoxs[this.num].style.background = 'red';
					}

					this.ClickNum = function(){
						this.openBox.addEventListener('click',function(e){
							if(e.target.className == 'active'){
								this.num = [...this.openBoxs].indexOf(e.target);
								this.StyleBack();
								this.box.style.transform = 'translate3d(0px,'+-this.num*100+'%, 0px)';
							}
						}.bind(this),false)
					}
					this.Remove = function(event){
						if(event.deltaY < 0){
							this.box.style.transform = 'translate3d(0px,'+-this.num*100+'%, 0px)';
							this.IfNum(false);
							this.box.style.transform = 'translate3d(0px,'+-this.num*100+'%, 0px)';
						}else if(event.deltaY > 0){
							this.box.style.transform = 'translate3d(0px,'+-this.num*100+'%, 0px)';
							this.IfNum(true);
							this.box.style.transform = 'translate3d(0px,'+-this.num*100+'%, 0px)';
						}
					}.bind(this)
					this.lungun = function(){
						window.addEventListener("mousewheel",this.Remove,false);
					}
					this.start = function(){
						window.removeEventListener("mousewheel",this.Remove,false);
					}
					this.ifOpen = function(){
						this.openBox.addEventListener('webkitTransitionEnd',function(){this.lungun()}.bind(this),false)
					}
				}
		}

		//	于爱民第三屏
		let cases=document.getElementById('cases');
		let casesH=cases.offsetHeight;
		let winH=document.documentElement.offsetHeight;
		let top=(winH-casesH)/2+32;
		cases.style.top=top+"px";
		window.onresize=function(){
			let cases=document.getElementById('cases');
			let casesH=cases.offsetHeight;
			let winH=document.documentElement.offsetHeight;
			let top=(winH-casesH)/2+32;
			cases.style.top=top+"px";
		}
		let yamNum=0;
		function yamAnimation(){
			var slideW=$(".mini_items .mini_box .slide").eq(0).width();
			if (!$(".mini_items .mini_box").is(":animated")) {
				yamNum++;
				if (yamNum>=3) {
					$(".mini_items .mini_box").animate({left:-slideW*yamNum},function(){
						$(this).css("left","0");
						yamNum=0;
					})
				}else{
					$(".mini_items .mini_box").animate({left:-slideW*yamNum})
				}
			};
		}
		function yamLeft(){
			var slideW=$(".mini_items .mini_box .slide").eq(0).width();
			if (!$(".mini_items .mini_box").is(":animated")) {
				yamNum--;
				if (yamNum<0) {
					$(".mini_items .mini_box").css("left",3*-slideW+"px");
					yamNum=2;
				}
				$(".mini_items .mini_box").animate({left:-slideW*yamNum})
			};
		}
		var yamT=setInterval(yamAnimation,3000)

		$("#cases_prev").hover(function(){
			clearInterval(yamT)
		},function(){
			yamT=setInterval(yamAnimation,3000)
		})
		$("#cases_next").hover(function(){
			clearInterval(yamT)
		},function(){
			yamT=setInterval(yamAnimation,3000)
		})
		$("#cases_next").on('click',function(){
			yamAnimation()
			
		})
		$("#cases_prev").on('click',function(){
			yamLeft()
		})

	}

})(window);