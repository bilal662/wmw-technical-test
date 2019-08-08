import '../../styles/theme.scss';

import {focusHash, bindInPageLinks} from '@shopify/theme-a11y';
import jQuery from 'jquery/dist/jquery';
import 'jquery-modal/jquery.modal';
import 'slick-carousel/slick/slick';
import '../templates/index';

// Common a11y fixes
focusHash();
bindInPageLinks();

Shopify.Settings = (function ($) {

    const showQuickView = () => {
  
      $(".quick-view").click(function (event) {
  
        event.preventDefault();
  
        var quickViewUrl = $(this).attr('data-handle') + '?view=quickview';
  
        $.ajax({
          type: 'GET',
          url: quickViewUrl,
          dataType: 'html',
          success: function (response) {
            $('.popup').html(response).modal();
          },
          error: function (error) {
  
          }
        });
      });
  
    }
  
    const addProductToCart = () => {
  
      $(document).on('submit', '#product-form', function (event) {
  
        const $this = $(this);
        event.preventDefault();
  
        $.ajax({
          type: 'POST',
          url: '/cart/add.js',
          dataType: 'json',
          data: $(this).serialize(),
          success: function () {
            $(".stock-error").addClass('hide');
            $this.find('#AddToCart').text("Added");
            setTimeout(function () {
              $.modal.close();
            }, 1000);
          },
          error: function () {
            $(".stock-error").removeClass('hide');
          }
        });
  
      });
    }
  
    const initSlideShow = () => {
      var slides = $('.slider .slide').length;
      if (slides > 3) {
        $('.slider').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
          nextArrow: '<span class="next"><img src="https://cdn.shopify.com/s/files/1/0128/9705/8874/files/ico-next.svg?7664"/></span>',
          prevArrow: '<span class="prev"><img src="https://cdn.shopify.com/s/files/1/0128/9705/8874/files/ico-prev.svg?7664"/></span>',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 640,
              settings: {
                arrows: false,
                centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        });
      }
    }
  
    const updateQuantity = () => {
  
      $(document).on('click', '.qty', function () {
        let qty = parseInt($('.quantity').val());
          if ($(this).attr('data-qty') == 'plus' && qty > 0) {
            qty += 1;
          } else if(qty > 1) {
            qty -= 1;
          }
          $('.quantity').val(qty);
        
      });
    }
  
    const showSearchForm = () => {
  
      $(document).on('click', '.search img, .search-mobile img', function () {
        if ($("#search-form").hasClass("search-show"))
          $("#search-form").removeClass("search-show");
        else
          $("#search-form").addClass("search-show");
        
      });
  
      $(document).mouseup(function (e) {
        var container = $("#search-form");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          container.hide();
        }
      });
    }
  
    const initAccordion = () => {
  
      $(".accordion").click(function() {
        let self = $(this).parent();
        $(".accordion").not(this).next().slideUp();
        $(".accordion").not(this).parent().removeClass('active');
        self.toggleClass('active');
        $(this).next().slideToggle();
      });
  
  }
  
  const initToggleMenu = () => {
    $('.opener').click(function () {
      let self = $(this).parent();
      if(self.hasClass('active'))
      self.removeClass('active');
      else
      self.addClass('active');
        $(".menu-toggle").slideToggle();
    });
  }
  
    const init = () => {
        initToggleMenu();
        initAccordion();
        showQuickView();
        addProductToCart();
        showSearchForm();
        updateQuantity();
        initSlideShow();
    }
  
    return {
      init: init
    }
  })(jQuery);
  
  Shopify.Settings.init();