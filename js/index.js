(function(window) {
    window.onload = function () {
        //全屏滚动块
        var num=0;
        screenScrolling();
        function screenScrolling(){
            var box = document.getElementById('box');
            var Bbox = new Cboxc();
            var position;
            var lis=document.getElementsByClassName("liBtn");
            var line=document.getElementById("line");
            var logospan=document.getElementById("logospan")
            var cert=document.getElementsByClassName("cert")[0];
            var speed=3;
            var flag=true;
            line.style.left=lis[num].offsetLeft+"px";
            Bbox.ChuShi(box);
            function animation(event){
                position=lis[num].offsetLeft;

                if(event.deltaY >0){
                    if(line.style.left.slice(0,-2)<position&&((line.style.left.slice(0,-2)-0+speed)<position)){
                        line.style.left=line.style.left.slice(0,-2)-0+speed+"px";
                    }else{
                        line.style.left=position+"px";
                        return ;

                    }
                }else if(event.deltaY< 0){
                    if(line.style.left.slice(0,-2)>position&&((line.style.left.slice(0,-2)-0-speed)>position)){
                        line.style.left=line.style.left.slice(0,-2)-0-speed+"px";
                    }else{
                        line.style.left=position+"px";
                        return;
                    }
                }
                requestAnimationFrame(function(){
                    animation(event)
                });
            }

            function Cboxc(){
                this.ChuShi = function(box){
                    this.box = box;
                    this.boxs = this.box.children;
                    this.lungun();
                    this.ifOpen();
                };
                this.IfNum = function(tra){
                    if (tra == true) {
                        if (num < this.boxs.length-1) {
                            num ++;
                            this.start();
                        }else{
                            return ;
                        }
                    }else{
                        if (num > 0) {
                            num --;
                            this.start();
                        }else{
                            num=0;
                        }
                    }
                };
                this.Remove = function(event){
                    //console.log(event)
                    if(event.deltaY < 0){
                        this.box.style.transform = 'translate3d(0px,'+-num*100+'%, 0px)';
                        this.IfNum(false);
                        this.box.style.transform = 'translate3d(0px,'+-num*100+'%, 0px)';
                        if(num==0){
                            for(let i=0; i<lis.length;i++){
                                lis[i].style.fontSize="20px";
                                lis[i].style.margin="0 15px";
                                lis[i].style.transition="all 0.5s";
                                lis[i].style.color="#00DFB9"
                            }
                            line.style.width="40px";
                            line.style.transition="all 0.1s"

                            logospan.style.width="290px";
                            logospan.style.height="42px";
                            logospan.style.backgroundSize="100%";
                            logospan.style.backgroundPosition="center center";
                            logospan.style.marginTop="0"
                            logospan.style.transition="all 0.5s";

                        }
                        for(let i=0; i<lis.length;i++){
                            lis[i].style.color="#fff"
                        }
                        lis[num].style.color="#00DFB9"
                    }else if(event.deltaY > 0){
                        this.box.style.transform = 'translate3d(0px,'+-num*100+'%, 0px)';
                        this.IfNum(true);
                        this.box.style.transform = 'translate3d(0px,'+-num*100+'%, 0px)';
                        if(num>=1){
                            for(var i=0; i<lis.length;i++){
                                lis[i].style.fontSize="16px";
                                lis[i].style.margin="0 10px";
                                lis[i].style.transition="all 0.5s";
                                lis[i].style.color="#fff"
                            }
                            lis[num].style.color="#00DFB9";
                            line.style.width="32px";
                            line.style.transition="all 0.1s"

                            logospan.style.width="210px";
                           logospan.style.height="33px";
                           logospan.style.backgroundSize="210px";
                            logospan.style.backgroundRepeat="no-repeat";
                           logospan.style.backgroundPosition="0 -2px";
                            logospan.style.marginTop="10px";
                            logospan.style.transition="all 0.5s";
                        }

                    }
                    requestAnimationFrame(function(){
                        animation(event)
                    });

                    if(flag) {
                        cert.style.marginTop="-140px";
                        flag=false

                    }else{
                        if(num==0){
                            cert.style.marginTop="30px"
                        }
                        flag = true;
                    }
                }.bind(this);
                this.lungun = function(){
                    window.addEventListener("mousewheel",this.Remove,false);
                }
                this.start = function(){
                    window.removeEventListener("mousewheel",this.Remove,false);
                };
                this.ifOpen = function(){
                    this.box.addEventListener('webkitTransitionEnd',function(){this.lungun()}.bind(this),false)
                }
            }
        }
        //头部点击
        headerP();
        function headerP(){
            var line=document.getElementById("line");
            var headerUl=document.getElementById("headerul");
            var lis=headerul.children;
            line.style.left=lis[num].offsetLeft;
            num=[...lis].indexOf(event.target);
            var positionLeft;
            var positionTop;
            headerUl.addEventListener('mouseover',function(event){
                if(event.target.className=="liBtn"){
                    var lis=headerul.children;
                    positionLeft=event.target.offsetLeft;
                    positionTop=event.target.offsetTop;
                    line.style.left=positionLeft+"px";
                    line.style.top=positionTop+"px";
                    line.style.transition="all 0.5s";
                    [...lis].forEach(function(obj){
                        obj.style.color="#fff"
                    }.bind(this),false);
                    let indexs=[...lis].indexOf(event.target);
                    lis[indexs].style.color="#00DFB9"
                }
            },false)
            headerUl.addEventListener('mouseout',function(event){
                if(event.target.className=="liBtn"){
                    line.style.left=lis[0].offsetLeft+"px";
                    line.style.top=positionTop+"px";
                    line.style.transition="all 0.5s";
                    [...lis].forEach(function(obj){
                        obj.style.color="#fff"
                    }.bind(this),false);
                }
            },false)
        }
        //头部跳转
        tiaoT();
        function tiaoT(){
            function Children(){
                Parent.call(this);
            }
            Children.prototype = Object.create(Parent.prototype);
            let childrena= new Children;
            let headerul=document.getElementById("headerul");
            let box=document.getElementById("box");
            let logospan=document.getElementById("logospan");
            childrena.init(headerul,box,logospan);
            childrena.listener();

            function Parent(){
                this.init=function(headerul,box){
                    this.headerul=headerul;
                    this.box=box;
                    this.logospan=logospan
                    //this.num=0;
                };
                this.listener=function(){
                    this.headerul.addEventListener('click',function(e){
                        if(e.target.className == 'liBtn'){
                            var lis=this.headerul.children;
                            //console.log(lis)
                            num = [...lis].indexOf(e.target);
                            this.box.style.transform = 'translate3d(0px,'+-num*100+'%, 0px)';
                            if(num>0){
                                for(var i=0;i<lis.length;i++){
                                    lis[i].style.fontSize="16px";
                                    lis[i].style.margin="0 10px";
                                    lis[i].style.transition="all 0.5s";
                                    lis[i].style.color="#fff";
                                    line.style.width="32px";
                                }
                                lis[num].style.color="#00DFB9";
                                this.logospan.style.width="210px";
                                this.logospan.style.height="33px";
                                this.logospan.style.backgroundSize="210px";
                                this.logospan.style.backgroundRepeat="no-repeat";
                                this.logospan.style.backgroundPosition="0 -2px";
                                this.logospan.style.marginTop="10px";
                                this.logospan.style.transition="all 0.5s";
                            }else if(num==0){
                                for(var i=0;i<lis.length;i++){
                                    lis[i].style.fontSize="20px";
                                    lis[i].style.margin="0 15px";
                                    line.style.width="40px";
                                    lis[i].style.transition="all 0.5s";
                                }
                                this.logospan.style.width="290px";
                                this.logospan.style.height="42px";
                                this.logospan.style.backgroundSize="100%";
                                this.logospan.style.backgroundPosition="center center";
                                this.logospan.style.marginTop="0"
                                this.logospan.style.transition="all 0.5s";
                            }

                        }
                    }.bind(this),false)

                }
            }
        }







        //	于爱民第三屏
        let cases = document.getElementById('cases');
        let casesH = cases.offsetHeight;
        let winH = document.documentElement.offsetHeight;
        let top = (winH - casesH) / 2 + 32;
        cases.style.top = top + "px";
        window.onresize = function () {
            let cases = document.getElementById('cases');
            let casesH = cases.offsetHeight;
            let winH = document.documentElement.offsetHeight;
            let top = (winH - casesH) / 2 + 32;
            cases.style.top = top + "px";
        }
        let yamNum = 0;

        function yamAnimation() {
            var slideW = $(".mini_items .mini_box .slide").eq(0).width();
            if (!$(".mini_items .mini_box").is(":animated")) {
                yamNum++;
                console.log(yamNum)
                if (yamNum >= 3) {
                    $(".mini_items .mini_box").animate({left: -slideW * yamNum}, function () {
                        $(this).css("left", "0");
                        yamNum = 0;
                    })
                } else {
                    $(".mini_items .mini_box").animate({left: -slideW * yamNum})
                }
            }
            ;
        }

        function yamLeft() {
            var slideW = $(".mini_items .mini_box .slide").eq(0).width();
            if (!$(".mini_items .mini_box").is(":animated")) {
                yamNum--;
                if (yamNum < 0) {
                    $(".mini_items .mini_box").css("left", 3 * -slideW + "px");
                    yamNum = 2;
                }
                $(".mini_items .mini_box").animate({left: -slideW * yamNum})
            }
            ;
        }

        var yamT = setInterval(yamAnimation, 3000)

        $("#cases_prev").hover(function () {
            clearInterval(yamT)
        }, function () {
            yamT = setInterval(yamAnimation, 3000)
        })
        $("#cases_next").hover(function () {
            clearInterval(yamT)
        }, function () {
            yamT = setInterval(yamAnimation, 3000)
        })
        $("#cases_next").on('click', function () {
            yamAnimation()
        })
        $("#cases_prev").on('click', function () {
            yamLeft()
        })
        //*****
        //zhuLiping第四屏
        let in4bot = document.getElementById('inner4_bottom');
        let in4mask = document.getElementById('in4-mask');
        in4bot.addEventListener('mouseover', function (event) {
            in4mask.style.display = 'block';
            in4mask.style.left = event.target.offsetLeft + 'px';
            in4mask.style.top = event.target.offsetTop + 'px'
        }, false);
        in4bot.addEventListener('mouseleave', function (event) {
            in4mask.style.display = 'none';
        }, false);
        // 第七屏
        var qidabox=document.getElementsByClassName('qidabox')[0];
        var qiinner=document.getElementsByClassName('qiinner');
        var sectionLeBox=document.getElementsByClassName('sectionLeBox')[0];
        var qibtn=document.getElementsByClassName('qibtn')
        var numq=0;
//刷新时默认的按钮颜色
        for(var j=0;j<qibtn.length;j++){
            qibtn[j].style.backgroundColor="#163137"
        }
        qibtn[numq].style.backgroundColor="#1C5251"

        animate(qidabox,{marginLeft:-480*numq},1000)

        //一直循环执行轮播函数
        var tq=setInterval(moveq,2000)

        //按钮点击效果
        for(var i=0;i<qibtn.length;i++){
            qibtn[i].index=i;
            qibtn[i].onmouseover=function(){
                numq=this.index;
//鼠标放到按钮上默认的按钮颜色
                for(var j=0;j<qibtn.length;j++){
                    qibtn[j].style.backgroundColor="#163137"
                }
                qibtn[numq].style.backgroundColor="#1C5251";
                animate(qidabox,{marginLeft:-480*numq},1000)

                animate(qidabox,{marginLeft:-480*numq},300)
            }
        }

//清除动画
        sectionLeBox.onmouseover=function(){
            clearInterval(tq)
        }
        sectionLeBox.onmouseout=function(){
            tq=setInterval(moveq,2000)
        }

        //实现自动轮播的函数
        function moveq(){
            numq++
            if(numq>=qiinner.length-1){
                animate(qidabox,{marginLeft:-480*numq},1000,function(){
                    qidabox.style.marginLeft=0;
                    numq=0
//实现无缝轮播时的默认按钮颜色
                    for(var j=0;j<qibtn.length;j++){
                        qibtn[j].style.backgroundColor="#163137"}
                    qibtn[numq].style.backgroundColor="#1C5251";
                    // animate(innerbox,{marginLeft:-400*num},1000)

                })
            }else{
//自然轮播时默认的颜色
                for(var j=0;j<qibtn.length;j++){
                    qibtn[j].style.backgroundColor="#163137"
                }
                qibtn[numq].style.backgroundColor="#1C5251";
                animate(qidabox,{marginLeft:-480*numq},1000)

            }
        }

    };

    //zhuLiping第四屏
    // let in4bot = document.getElementById('inner4_bottom');
    // let in4mask = document.getElementById('in4-mask');
    //
    // in4bot.addEventListener('mouseover', function (event) {
    //     in4mask.style.display = 'block';
    //     in4mask.style.left = event.target.offsetLeft + 'px';
    //     in4mask.style.top = event.target.offsetTop + 'px'
    // }, false);
    // in4bot.addEventListener('mouseleave', function (event) {
    //     in4mask.style.display = 'none';
    // }, false);

    // 魏福佳第一屏
    $(function () {

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
            lb_lefts = Math.floor($('.lb_1').offset().left);
            width = li.outerWidth(true);
            width_center = $(window).width();
            height = $(window).height();
            he = (height - 231) / 2;
            wt = (width / 2);
            $('.lb_2_font2').css('height', height);
            $('.box5_center').css('left', (width_center - 240) / 2 + 'px');
            $('.box8_move').css('left', (width_center - 810) / 2 + 'px');
            $('.lb_1_font1').css('display', 'block').animate({'left': 0 + 'px'}, 1000, 'linear');
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

})(window);