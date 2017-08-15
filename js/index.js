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
        //zhuLiping第四屏
        let in4bot=document.getElementById('inner4_bottom');
        let in4mask=document.getElementById('in4-mask');
        in4bot.addEventListener('mouseover',function (event) {
            in4mask.style.display='block';
            in4mask.style.left=event.target.offsetLeft+'px';
            in4mask.style.top=event.target.offsetTop+'px'
        },false);
        in4bot.addEventListener('mouseleave',function (event) {
            in4mask.style.display='none';
        },false);


	};


	// 魏福佳第一屏
    $(function(){

        $(window).resize(function () {
            resize()

        });
        var lb_left = null;
        var width = null;
        var width_center = null;
        var height = null;
        var he = null;
        var ul = $('.carousel');
        var li = ul.children();
        ul.css({'height': height});

        function resize() {
            lb_left = Math.floor($('.lb_1').offset().left);
            lb_lefts=Math.floor($('.lb_1').offset().left);
            width = li.outerWidth(true);
            width_center = $(window).width();
            height = $(window).height();
            he = (height - 231) / 2;
            wt = (width / 2);
            $('.lb_2_font2').css('height', height);
            $('.box5_center').css('left', (width_center - 240) / 2 + 'px');
            $('.box8_move').css('left', (width_center - 810) / 2 + 'px');
            $('.lb_1_font1').css('display', 'block').animate({'left': 0+ 'px'}, 1000, 'linear');
            $('.lb_1_font2').animate({'right': 0 + 'px'}, 1000, 'linear');
            OverallSituation();
            $('.lb_1_box').css({'top': he + 'px'});
            $('.lb_2_font1').css({'top': he + 'px'});
        }
        resize();

        var num = 0;
        var t = setInterval(move, 5000);
        var nums = 0;
        function move() {
            nums++;
            if (nums >= li.length - 1) {
                ul.animate({'marginLeft': -nums * width}, 500, 'linear', function () {
                    ul.css('marginLeft', '0px');
                    circle.each(function (index, ele) {
                        $(ele).css('background', '#fff');
                    });
                    circle.eq(nums).css('background', '#00dfb9');
                });
                nums = 0;
            } else {
                ul.animate({'marginLeft': -nums * width}, 500, 'linear');

                circle.each(function (index, ele) {
                    $(ele).css('background', '#fff');
                });
                circle.eq(nums).css('background', '#00dfb9');
            }

            OverallSituation();
        }

        var circle = $('.circle');

        circle.eq(0).css('background', '#00dfb9');

        circle.mouseover(function () {
            ul.animate({'marginLeft': -$(this).index() * width}, 500, 'linear');

            circle.each(function (index, ele) {
                $(ele).css('background', '#fff');
            });
            circle.eq($(this).index()).css('background', '#00dfb9');

            nums = $(this).index();
            OverallSituation();
        });

        circle.hover(function () {
            clearInterval(t);
        }, function () {
            t = setInterval(move, 500000);
        });


        var mask = $('.mask');
        mask.each(function (index, ele) {
            $(ele).css({'width': '100%', 'height': height});
        });


//news滚动
        var ul_move = $('.ul_move');
        var li_move = ul_move.children('li');
        var news_t = setInterval(moves, 2000);
        var num1 = 0;
        function moves() {
            num1++;
            if (num1 >= li_move.length - 1) {
                ul_move.animate({'top': '0px'}, 500, 'linear');
                num1 = 0;
            } else {
                ul_move.animate({'top': -num1 * 20}, 500, 'linear');
            }
        }
//动画


        function OverallSituation() {
            if (num == 0) {
                if (nums == 0) {
                    $('.lb_1_font1').css('display', 'block').animate({'left': 0 + 'px'}, 500, 'linear');
                    $('.lb_1_font2').animate({'right': 0 + 'px'}, 500, 'linear');
                } else if (nums == 1) {
                    $('.lb_2_font1').css('display', 'block').animate({'left': (wt - 320)}, 1000, 'linear');
                    $('.lb_2_font2').css('display', 'block').animate({'left': '0px'}, 1000, 'linear');
                } else if (nums == 2) {
                    $('.lb_3_box').css('display', 'block').animate({'top': he + 'px'}, 1000, 'linear');
                } else if (nums == 3) {
                    $('.lb_4_font1').animate({'top': (he) + 'px'}, 1000, 'linear');
                    $('.lb_4_font2').css('display', 'block').animate({'top': (he + 150) + 'px'}, 1000, 'linear');
                }
            }
        }
	})
	//*************
    }

})(window);