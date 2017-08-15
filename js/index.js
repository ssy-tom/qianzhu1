(function(window){
	window.onload = function(){
		//全屏滚动块
        screenScrolling();
		function screenScrolling(){
				let box = document.getElementById('box');
				let openBox = document.getElementById('openBox')
            let movedown = document.getElementById('movedown');
				let Bbox = new Cboxc();
            Bbox.ChuShi(openBox, box, movedown);
            Bbox.movedowns();
            function Cboxc() {
                this.ChuShi = function (openBox, box, movedown) {
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
                    this.movedown = movedown;
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
								console.log(this.num)
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
                this.movedowns = function () {
                    this.movedown.onclick = function () {
                        this.num++;
                        this.box.style.transform = 'translate3d(0px,' + -this.num * 100 + '%, 0px)';
                    }.bind(this)
                }
				}
		}

		//	于爱民第三屏
		window.onresize=function(){
			let cases=document.getElementById('cases');
			let casesH=cases.offsetHeight;
			let winH=document.documentElement.offsetHeight;
			let top=(winH-casesH)/2+32;
			cases.style.top=top+"px";
			console.log(top)
		}

	}

})(window);