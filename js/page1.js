//魏福佳页面1轮播

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
    width = li.outerWidth(true);
    width_center = $(window).width();
    height = $(window).height();
    he = (height - 231) / 2;
    wt = (width / 2);
    $('.lb_2_font2').css('height', height);
    $('.box5_center').css('left', (width_center - 240) / 2 + 'px');
    $('.box8_move').css('left', (width_center - 810) / 2 + 'px');
    $('.lb_1_font1').css('display', 'block').animate({'left': lb_left + 'px'}, 1000, 'linear');
    $('.lb_1_font2').animate({'right': lb_left + 'px'}, 1000, 'linear');
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
            $('.lb_1_font1').css('display', 'block').animate({'left': lb_left + 'px'}, 500, 'linear');
            $('.lb_1_font2').animate({'right': lb_left + 'px'}, 500, 'linear');
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