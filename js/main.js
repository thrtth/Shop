'use strict';

(function () {
    $(document).ready(function() {
        
        function changeView(viewShow, viewHideOne, viewHideTwo) {
            viewShow.removeClass('hidden');
            viewHideOne.addClass('hidden');
            if ( viewHideTwo !== undefined ) {
                viewHideTwo.addClass('hidden');
            }
        }
        
        function changeTabs( tabShow, tabTwo, tabThree, tabFour ) {
            tabShow.removeClass('hidden');
            tabTwo.addClass('hidden');
            tabThree.addClass('hidden');
            tabFour.addClass('hidden');
        }
        
        function resetActiveTabs() {
            specTabBtn.removeClass('active');
            recallTabBtn.removeClass('active');
            commentTabBtn.removeClass('active');
            articleTabBtn.removeClass('active');
        }
        
        function setActiveTabs(activeTab) {
            activeTab.addClass('active');
        }
        
        function showModal(modalWindow) {
            modalBack.removeClass('hidden');
            modalWindowSmall.removeClass('hidden');
            modalWindow.removeClass('hidden');
        }
        
        function showModalBig(modalWindow) {
            modalBack.removeClass('hidden');
            modalWindowBig.removeClass('hidden');
            modalWindow.removeClass('hidden');
        }
        
        function closeAllModals() {
            modalBack.addClass('hidden');
            modalWindowSmall.addClass('hidden');
            modalWindowBig.addClass('hidden');
            modalAvailable.addClass('hidden');
            modalOrder.addClass('hidden');
            modalDelivery.addClass('hidden');
            modalCity.addClass('hidden');
            modalQuick.addClass('hidden');
            modalSubscrRecall.addClass('hidden');
            modalSubscrComment.addClass('hidden');
            modalSubscrDone.addClass('hidden');
            modalComment.addClass('hidden');
            modalCheck.addClass('hidden');
        }
        
        function setPriceValues(min, max) {
            minPrice.val(min);
            maxPrice.val(max);
        }
        
        var offsetFromTop = 98;
        
        var menuDrop = $('.header-down__catalog--dropdown');
        var menuDropColumn = $('.left-column__menu--drop');
        
        var menuFix = $('.header-fix__menu');
        var submenuFix = $('.left-column__menu--fix');
        var availBtn = $('.content-block-hover__avail a');
        
                
        var lineBtn = $('.subcategory-sort__views--line');
        var tableBtn = $('.subcategory-sort__views--table');
        var tileBtn = $('.subcategory-sort__views--tile');
        var listView = $('.subcategory-table--list');
        var imgListView = $('.subcategory-table--img-list');
        var tileView = $('.subcategory-tile');
                
        var specTabBtn = $('.tabs-spec');
        var recallTabBtn = $('.tabs-recall');
        var commentTabBtn = $('.tabs-comment');
        var articleTabBtn = $('.tabs-article');
        
        var specTab = $('.tabs__spec');
        var recallTab = $('.tabs__recall');
        var commentTab = $('.tabs__comments');
        var articleTab = $('.tabs__article'); 
        
        var modalBack = $('.modal-back');
        var modalWindowSmall = $('.modal-window--small');
        var modalWindowBig = $('.modal-window--big');
        
        var modalAvailable = $('.modal-window__available');
        var modalOrder = $('.modal-window__order');
        var modalDelivery = $('.modal-window__delivery');
        var modalClose = $('.modal-window__close');
        var modalCity = $('.modal-window__city');
        var modalQuick = $('.modal-window__quick');
        var modalSubscrRecall = $('.modal-window__subscr-recall');
        var modalSubscrComment = $('.modal-window__subscr-comment');
        var modalSubscrDone = $('.modal-window__subscr-done');
        var modalComment = $('.modal-window__comment');
        var modalCheck = $('.modal-window__check');
        
        var filterBlock = $('.filter-block__title');
        
        var textLabels = {
            collapse: 'Свернуть ветку',
            expand: 'Развернуть ветку',
        };
        
        if ($('.card__slider-large').length) {
            $('.card__slider-large').nivoLightbox();
        }
                
        
        if($('.slider').length) {
            $('.slider').slick({
                arrows: true,
                dots: true,
                infinite: true,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 9000,
                appendDots: $('.slider-dots-custom'), 
                customPaging: function (slider, i) {
                    return '<span class="dots"></span>';
                },
                prevArrow: '<span class="prev-btn hidden"></span>',
                nextArrow: '<span class="next-btn hidden"></span>', 
            });
        }
        
        if($('.slider-four').length) {
            $('.slider-four').slick({
                arrows: true,
                dots: false,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                autoplay: false,
                prevArrow: '<span class="prev-btn-small"></span>',
                nextArrow: '<span class="next-btn-small"></span>', 
                
                responsive: [
                  
                    {
                      breakpoint: 1320,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,  
                      }
                    }
                ]
                
            });
                        
        }
                
        $('.slider').removeClass('hidden');
        $('.slider-four').removeClass('hidden');
        
        $('.slider').hover(function() {
            $('.prev-btn').removeClass('hidden');
            $('.next-btn').removeClass('hidden');
        }, function() {
            $('.prev-btn').addClass('hidden');
            $('.next-btn').addClass('hidden');
        });
        
        if($('.card__slider-main').length) {
            $('.card__slider-main').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.card__slider-preview',
            });
        }
        
        $('.card__slider').removeClass('hidden');
        
        
        if($('.card__slider-preview').length) {
            $('.card__slider-preview').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                asNavFor: '.card__slider-main',
                focusOnSelect: true,
                prevArrow: '<span class="prev-btn"></span>',
                nextArrow: '<span class="next-btn"></span>',    
            });
        }
        

        window.onscroll = function() {
            if($('.header-fix').length) {
                var topPosition = window.pageYOffset || document.documentElement.scrollTop;
                var menuTop = $('.header-fix');
                if (topPosition > offsetFromTop ) {
                    menuTop.removeClass('hidden');
                    
                } else {
                    menuTop.addClass('hidden');
                    
                }
            }
            
        };

        menuFix.on('click', function() {
            if (submenuFix.hasClass('hidden')) {
                submenuFix.removeClass('hidden');
            } else {
                submenuFix.addClass('hidden');
            }

            return false;
        });

        availBtn.hover(
            function() {
                $(this).parent().parent().find('.content-block-hover__shops').removeClass('hidden');
            },
            function() {
                $(this).parent().parent().find('.content-block-hover__shops').addClass('hidden');
            }        
        );
                
        lineBtn.on('click', function() { 
            changeView(listView, imgListView, tileView);
            return false;
        });
        
        tableBtn.on('click', function() {  
            changeView(imgListView, tileView, listView);
            return false;
        });
        
        tileBtn.on('click', function() {  
            changeView(tileView, listView, imgListView);
            return false;
        });
                
        specTabBtn.on('click', function() {
            resetActiveTabs();
            setActiveTabs(specTabBtn);
            changeTabs(specTab, recallTab, commentTab, articleTab);
            return false;
        });
        
        recallTabBtn.on('click', function() {
            resetActiveTabs();
            setActiveTabs(recallTabBtn);
            changeTabs(recallTab, specTab, commentTab, articleTab);
            return false;
        });
        
        commentTabBtn.on('click', function() {
            resetActiveTabs();
            setActiveTabs(commentTabBtn);
            changeTabs(commentTab, recallTab, specTab, articleTab);
            return false;
        });
        
        articleTabBtn.on('click', function() {
            resetActiveTabs();
            setActiveTabs(articleTabBtn);
            changeTabs(articleTab, recallTab, commentTab, specTab);
            return false;
        });
                
        menuDrop.on('click', function() {
            if(menuDropColumn.hasClass('hidden')) {
                menuDropColumn.removeClass('hidden');
                menuDrop.children('p').css({'border-radius': '3px 3px 0 0', 'background-image': 'url(../img/icons/icn_arr_up_white.png)'});
            } else {
                menuDropColumn.addClass('hidden');
                menuDrop.children('p').css({'border-radius': '3px', 'background-image': 'url(../img/icons/icn_arr_down_white.png)'});
            }
                
            return false;    
        });
        
        modalClose.on('click', function() {
            closeAllModals();
        });
        
        
        $('.card__avail--exist a').on('click', function() {
            showModal(modalAvailable);
            return false;
        });
        
        $('.card__avail--order a').on('click', function() {
            showModal(modalOrder);
            return false;
        });
        
        $('.card__avail--delivery a').on('click', function() {
            showModal(modalDelivery);
            return false;
        });
        
        $('.city-choice span a').on('click', function() {
            showModal(modalCity);
            return false;
        });
        
        $('.card__btns--one').on('click', function() {
            showModal(modalQuick);
            return false;
        });
        
        $('.tabs__subscr--recall').on('click', function() {
            showModal(modalSubscrRecall);
            return false;
        });
        
        $('.tabs__subscr--comment').on('click', function() {
            showModal(modalSubscrComment);
            return false;
        });
        
        $('.modal-window__subscr-recall .modal-btn').on('click', function() {
            closeAllModals();
            showModal(modalSubscrDone);
            return false;
        });
        
        $('.modal-window__subscr-comment .modal-btn').on('click', function() {
            closeAllModals();
            showModal(modalSubscrDone);
            return false;
        });
        
        $('.tabs__right-column .btn').on('click', function() {
            closeAllModals();
            showModalBig(modalComment);
            return false;
        });
        
        $('.modal-btn-send').on('click', function() {
            closeAllModals();
            showModalBig(modalCheck);
            return false;
        });
        
        $('.modal-btn-close').on('click', function() {
            closeAllModals();
            return false;
        });
        
        $(document).click(function(event) {
            if ($(event.target).closest('.modal-window').length) return;
            closeAllModals();
            event.stopPropagation();
        });
        
        $(document).keydown(function(evt) {
            if ( evt.which == 27 ) {
                closeAllModals();
            }
        });
        
        filterBlock.on('click', function() {
            if ( $(this).next().hasClass('hidden') ) {
                $(this).next().removeClass('hidden');
                $(this).css('background', 'url(../img/maket/icn_arrow_up_px.png) 1% center no-repeat');
            } else {
                $(this).next().addClass('hidden');
                $(this).css('background', 'url(../img/maket/icn_arrow_down_px.png) 1% center no-repeat');
            }
            
        });
        
        $('.tred-control').on('click', function() {
            if ($(this).hasClass('collapse')) {
                $(this).parent().parent().next('.tabs__tred').addClass('hidden');
                $(this).text(textLabels.expand);
                $(this).removeClass('collapse').addClass('expand');
            } else if ($(this).hasClass('expand')){
                $(this).parent().parent().next('.tabs__tred').removeClass('hidden');
                $(this).text(textLabels.collapse);
                $(this).removeClass('expand').addClass('collapse');
            }
        });
        
        $('.add-comment').on('click', function () {
            $(this).parent().next('.tabs__my-answer').removeClass('hidden');
            return false;
        });
                
        $('.close').on('click', function() {
            $(this).parent().addClass('hidden');
            $(this).parent().children('.comment-done').addClass('hidden');
            $(this).parent().children('.tabs__my-answer-wrap').removeClass('hidden');
            return false;
        });
        
        $('.my-name').on('click', function() {
            $(this).addClass('active');
            $(this).next('.anonym').removeClass('active');
            $(this).parent().parent().next('.tabs__anon').addClass('hidden');
            return false;
        });
        
        $('.anonym').on('click', function() {
            $(this).addClass('active');
            $(this).prev('.my-name').removeClass('active');
            $(this).parent().parent().next('.tabs__anon').removeClass('hidden');
            return false;
        });
        
        $('.send-comment').on('click', function() {
            $(this).parent().addClass('hidden');
            $(this).parent().next('.comment-done').removeClass('hidden');
            return false;
        });
        
        if ($('.filter-block__price').length) {
            var priceSlider = $(".range-slider-price");
            var minPrice = $('.price-input .min-price');
            var maxPrice = $('.price-input .max-price');

            priceSlider.slider({
                range: true,
                min: 0,
                max: 50000,
                values: [0, 50000],
                slide: function( event, ui ) {
                    setPriceValues(ui.values[ 0 ], ui.values[ 1 ]);
                }
            });

            $('.ui-slider .ui-slider-handle').eq(0).addClass('ui-slider-handle-left');
            $('.ui-slider .ui-slider-handle').eq(1).addClass('ui-slider-handle-right');    

            setPriceValues(priceSlider.slider("values",0), priceSlider.slider( "values",1));

            minPrice.bind('change',function() { 
                if(Number(minPrice.val()) > Number(maxPrice.val())) {
                    minPrice.val(maxPrice.val());
                }
                priceSlider.slider("values",0, minPrice.val());
                setPriceValues(priceSlider.slider("values",0), priceSlider.slider( "values",1));
            });

            maxPrice.bind('change',function() { 
                if(Number(maxPrice.val()) < Number(minPrice.val())) {
                    maxPrice.val(minPrice.val());
                }
                priceSlider.slider("values",1, maxPrice.val());
                setPriceValues(priceSlider.slider("values",0), priceSlider.slider( "values",1));
            });
            
            $('.only-nbr').bind('change keyup input click', function() {
                if(this.value.match(/[^0-9]/g)) {
                    this.value = this.value.replace(/[^0-9]/g, '');
                }
            });
        }
        
        
        
        
        
        
    });    
    
})();