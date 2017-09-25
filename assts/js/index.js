(function ($) {
    $.learuntab = {
        refreshTab: function () {
            $('.common-topbar-body').css({'background':'#373D41','border-bottom':'0px'});
        },
        activeTab: function () {
            $('.common-topbar-body').css({'background':'#24282C','border-bottom':'1px solid #45484B'});
        },
        closeOtherTabs: function () {
            $(this).parent().css('border-bottom','3px solid #00C1DE');
            $(this).parent().siblings().css('border-bottom','');
            var arr = $(this).attr('data-id');
            arre = $(this).parent();
           $('.common-topbar-dropdown-category-container').each(function () {
               var arrs = $(this).attr('data-id');
               if(arrs===arr){
                    $(this).show();
               }else {
                   $(this).hide();
               }
           })
           },
        closeTab: function () {
            var arrs = $(this);
            zero_hide=setTimeout(function () {
                arrs.parent().css('border-bottom','');
            },40);

        },
        logo_show:function () {
            $('.all-nav').css('background', '#00C1DE');
        },
        logo_hide:function () {
            $('.all-nav').css('background', '');
        },
        all_nav_show: function () {
            one_show =setTimeout(function () {
                if($('.common-topbar-level1-nav').css('display')==='block') {
                    clearTimeout(two_hide);
                }else {
                    $('.common-topbar-level1-nav ').stop().animate({width: 'show'},50);
                }
            },0);
        },
        all_nav_hide: function () {
            if($('.common-topbar-level1-content .level ul').width()===220){
                clearTimeout(three_hide);
            }
            one_hide =setTimeout(function () {
                $('.common-topbar-detail-list').stop().animate({width:'hide'},20);
                setTimeout(function () {
                    $('.common-topbar-level1-content ').stop().animate({width:'hide'},40);
                }, 20);
                setTimeout(function () {
                    $('.common-topbar-level1-nav ').stop().animate({width: 'hide'},80);
                }, 80);
            },40);
        },
        level1_nav_show:function () {
            two_show = setTimeout(function () {
                if($('.common-topbar-level1-content .level ul').width()===220){
                    clearTimeout(four_hide);
                    clearTimeout(five_hide);
                    clearTimeout(three_show);
                    $('.common-topbar-detail-list').stop().animate({width:'hide'},40);
                    setTimeout(function () {
                        $('.common-topbar-level1-content ').stop().animate({width:'hide'},80);
                    }, 40);
                }else {
                    clearTimeout(one_hide);
                }
            },30)
        },
        level1_nav_hide: function () {
            two_hide = setTimeout(function () {
                $('.common-topbar-detail-list').stop().animate({width:'hide'},20);
                setTimeout(function () {
                    $('.common-topbar-level1-content ').stop().animate({width:'hide'},40);
                }, 20);
                setTimeout(function () {
                    $('.common-topbar-level1-nav ').stop().animate({width: 'hide'},80);
                }, 80);
            },40)
        },
        nav_ul_show: function () {
            three_show = setTimeout(function () {
                if($('.common-topbar-level1-content .level ul').width()!==220){
                    clearTimeout(one_hide);
                    $('.common-topbar-level1-content').stop().animate({width:'show'},'fast');
                }else {
                    clearTimeout(four_hide);
                    clearTimeout(five_hide);
                    clearTimeout(two_show);
                    $('.common-topbar-detail-list').stop().animate({width:'hide'},20);
                }
            },0)
        },
        nav_ul_hide: function () {
            three_hide = setTimeout(function () {
                $('.common-topbar-level1-content ').stop().animate({width:'hide'},40);
            },40);
        },
        content_show: function () {
            four_show = setTimeout(function () {
                if($('.common-topbar-detail-list .leve ul').width()!==350){
                    clearTimeout(two_hide);
                    clearTimeout(three_hide);
                    clearTimeout(five_show);
                }else {
                    clearTimeout(two_hide);
                    clearTimeout(three_hide);
                    clearTimeout(six_hide);
                    clearTimeout(five_show);
                    $('.common-topbar-detail-list').stop().animate({width:'hide'},'fast');
                }
            },40);
        },
        content_hide: function () {
            four_hide = setTimeout(function () {
                $('.common-topbar-detail-list').stop().animate({width:'hide'},20);
                setTimeout(function () {
                    $('.common-topbar-level1-content ').stop().animate({width:'hide'},40);
                }, 20);
                setTimeout(function () {
                    $('.common-topbar-level1-nav ').stop().animate({width: 'hide'},80);
                }, 80);
            }, 40);

        },
        level_ul_show:function () {
            five_show = setTimeout(function () {
                if($('.common-topbar-detail-list .leve ul').width()!==350){
                    clearTimeout(two_hide);
                    clearTimeout(three_hide);
                    clearTimeout(four_show);
                    $('.common-topbar-detail-list').stop().animate({width:'show'},'fast');
                }else {
                    clearTimeout(two_hide);
                    clearTimeout(three_hide);
                    clearTimeout(six_hide);
                    clearTimeout(four_show);
                }
            },0);
        },
        level_ul_hide:function () {
            five_hide = setTimeout(function () {
                $('.common-topbar-detail-list').stop().animate({width:'hide'},20);
            }, 40);
        },
        list_show:function(){
            six_show = setTimeout(function () {
                clearTimeout(four_hide);
                clearTimeout(five_hide);
            }, 0);
        },
        list_hide:function(){
            six_hide = setTimeout(function () {
                $('.common-topbar-detail-list').stop().animate({width:'hide'},20);
                setTimeout(function () {
                    $('.common-topbar-level1-content ').stop().animate({width:'hide'},40);
                }, 20);
                setTimeout(function () {
                    $('.common-topbar-level1-nav ').stop().animate({width: 'hide'},80);
                }, 80);
            }, 40);
        },
        topbar_show:function(){
            seven_show = setTimeout(function () {
                if($('.common-topbar-dropdown-inner ').css('display')==='block'){
                    clearTimeout(eight_hide);
                }else {
                    $('.common-topbar-level1-nav ').hide();
                    $('.common-topbar-level1-content ').hide();
                    $('.common-topbar-detail-list ').hide();
                    seven_show = setTimeout(function () {
                        $('.common-topbar-dropdown-inner').stop().animate({height: 'show'},200);
                    }, 500);
                }
            }, 0);
        },
        topbar_hide:function(){
            seven_hide = setTimeout(function () {
                clearTimeout(seven_show);
                $('.common-topbar-dropdown-inner').stop().animate({height: 'hide'},80);
            }, 40);
        },
        nav_list_show:function () {
            eight_show = setTimeout(function () {
                clearTimeout(seven_hide);
                clearTimeout(zero_hide);
            },0);
        },
        nav_list_hide:function () {
            eight_hide = setTimeout(function () {
                $('.common-topbar-dropdown-inner').stop().animate({height: 'hide'},80);
                /*$.learuntab.closeTab();*/
                arre.css('border','');
            },40);
        },
        show_more:function(){
            if($('#product').is(":visible")){
                $('#product').slideUp();
                $('#layer').slideUp();
                $('.ali-product-show-more').text('查看全部');
                $('#container').slideDown();
            }else if($('#layer').is(":hidden")){
                $('#layer').slideDown();
                $('.ali-product-show-more').text('收起')
            }else {
                $('#layer').slideUp();
                $('.ali-product-show-more').text('查看全部')
            }

        },
        product_tab:function () {
            var arr =  $(this).attr('data-id');
            if($(this).parent().parent().siblings().is(":hidden")){
                $(this).parent().parent().siblings().slideDown();
                $(this).parent().parent().parent().siblings().children('.ali-product-content-container').slideUp();
                $(this).parent().parent().siblings().children('.ali-product-content').each(function(){
                    if($(this).attr('data-id')===arr){
                        $(this).show();
                        $(this).siblings().hide();
                    }
                })
            }else {
                $(this).parent().parent().siblings().children('.ali-product-content').each(function(){
                    if($(this).attr('data-id')===arr){
                        $(this).fadeIn();
                        $(this).siblings().hide();
                    }
                })
            }
        },
        init: function () {
            $('.common-topbar-level1-nav,.common-topbar-detail-list,.common-topbar-level1-content,.all-nav').hover($.learuntab.logo_show,$.learuntab.logo_hide);
            $('.common-topbar-dropdown-inner,.common-topbar-body,.common-topbar-level1-nav,.common-topbar-detail-list,.common-topbar-level1-content').hover($.learuntab.refreshTab,$.learuntab.activeTab);
            $('.common-topbar-nav li a').hover($.learuntab.closeOtherTabs,$.learuntab.closeTab);
            $('.all-nav').hover($.learuntab.all_nav_show,$.learuntab.all_nav_hide);
            $('.common-topbar-level1-nav').hover($.learuntab.level1_nav_show,$.learuntab.level1_nav_hide);
            $('.common-topbar-level1-nav ul').hover($.learuntab.nav_ul_show,$.learuntab.nav_ul_hide);
            $('.common-topbar-level1-content').hover($.learuntab.content_show,$.learuntab.content_hide);
            $('.common-topbar-level1-content .level ul').hover($.learuntab.level_ul_show,$.learuntab.level_ul_hide);
            $('.common-topbar-detail-list').hover($.learuntab.list_show,$.learuntab.list_hide);
            $('.common-topbar-nav-list').hover($.learuntab.topbar_show,$.learuntab.topbar_hide);
            $('.common-topbar-dropdown-inner').hover($.learuntab.nav_list_show,$.learuntab.nav_list_hide);
            $('.ali-product-show-more').on('click',$.learuntab.show_more);
            $('.ali-product-tab').on('click',$.learuntab.product_tab);
        }
    };
    $(function () {
        $.learuntab.init();
    });
})(jQuery);
