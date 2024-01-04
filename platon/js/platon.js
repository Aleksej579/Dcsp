/**
 * @file
 * Define theme JS logic.
 */

;
(function($, Drupal, window, undefined) {

  Drupal.settings.platon = Drupal.settings.platon || {};

  Drupal.behaviors.platon = {

    attach: function(context) {
        
    
    $('#homebox-add a:contains("New message indication"), #homebox-add a:contains("Active forum topics"), #homebox-add a:contains("Most recent poll"), #homebox-add a:contains("View: Calendar"),  #homebox-add a:contains("View: Notifications: Notifications")').css('display','none');
    if($('#user-account-information span:contains("welcome manage")').length){
        $('h1:contains("My courses"), span:contains("My courses")').text('test units')
    }
    var stMAn = $('.admin-panel h3:contains("Student management"), .admin-panel h3:contains("Appearance") ')
    stMAn.parent().css('display','none');
    $('.admin-list a:contains("Class administration")').parent().css('display','none').next().css('display','none');
    $('.admin-list a:contains("Manage forums")').parent().css('display','none').next().css('display','none');
    $('.admin-list a:contains("Collaborative workspaces and Live meetings configuration")').parent().css('display','none').next().css('display','none');
    $('.admin-list a:contains("TinCan LRS")').parent().css('display','none').next().css('display','none');
    $('.field-type-text-with-summary .field-label:contains("Question:")').text('Check your knowledge:');
    $('#edit-additional-questions .add-questions a:contains("Multiple choice question"), #edit-additional-questions .add-questions a:contains("Slide"), #edit-additional-questions .add-questions a:contains("Matching"), #edit-additional-questions .add-questions a:contains("Short answer question"), #edit-additional-questions .add-questions a:contains("True/false question"), #edit-additional-questions .add-questions a:contains("Fill in the blanks question")').parent().css('display','block');
    $('#edit-additional-questions .add-questions a:contains("Matching")').text('Matching question');
    $('#edit-additional-questions .add-questions a:contains("Slide")').text('Text, images,  dialogs, audio, video');
    $('a:contains("Add a new course")').text("Add a new unit");
    $('label:contains("Course category")').text("Unit category");
    $('h2:contains("Course lessons")').text("Unit lessons");
    $('h3:contains("Course progress")').text("Unit progress");
    $('dt:contains("Select your course or class")').text("Select your unit or class");
    $('#media-tabs-wrapper a:contains("My files")').text("Previously uploaded files");
    $('body.page-media #edit-filename-wrapper label').text('Search by title');
    $('.field-name-opigno-course-image .description').text('Choose cover image for this unit');
    $('.field-name-field-image-insert .description').text('Choose a place where you want insert image, click "browse" and choose your image, click upload, choose style and click insert');
    $('.vertical-tab-button strong:contains("Availability options")').parent().parent().css('display','none');
    $('.page-dashboard h1:contains("Home")').text("Dashboard");
    $('#tabs li a:contains("Track")').parent().css('display','none');
    $('.node-multichoice-form #edit-alternatives label:contains("Feedback if chosen ")').parent().parent().parent().parent().css('display','none');
    $('.node-type-quiz .field-name-body').addClass('clearfix')
    
    ///move submit
    if($('.node-form .form-actions.form-wrapper#edit-actions').length <= 1){
        $('.page-node-edit .node-form .form-actions.form-wrapper#edit-actions').clone().prependTo('.page-node-edit .node-form');
        $('.page-node-add .node-form .form-actions.form-wrapper#edit-actions').clone().prependTo('.page-node-add .node-form');        
    }
    
    $('#site-content-mv .quiz-question-navigation-wrapper .q-skip-button').val('Skip')
    $('#site-content-mv #quiz_score_possible').wrap( "<div class='result-message'></div>" );
    $('#site-content-mv #quiz_score_percent').appendTo($('.result-message'));
    $('#site-content-mv .result-message').wrap( "<div class='result-messages'></div>" );
    $('#site-content-mv #quiz_score_percent').after('<span class="view-results">Review your<br> result</span><span class="continium">Continue <br> study</span>')
    $('#site-content-mv .continium').bind('click',function(){
       $('#nextlink a')[0].click()
    })  
    $('#site-content-mv .view-results').bind('click',function(){
       $('.result-messages').css('display','none')
    }) 
    $('#nextlink a:contains("Back to class")').text('Continue study')
    
    if($('#messages').length> 0 ){
        $('#messages').addClass('active')
    }
    $('.messages-dismiss').bind('click',function(){
        $('#messages').removeClass('active');
    })
    $('.messages-dismiss').text('OK')
    
    var lessonName = $('.opigno-group-progress-course a.selected.active').text();
    var courseName = $('.opigno-group-progress-course a.selected.active').closest('.opigno-group-progress-course').children('a').text();
    $('#site-content-mv #content #quiz_progress').prepend('<b>'+courseName+'</b>'+'</br>' + lessonName + ' ')
    
    
    $('#quiz-questions-form #question-list td:nth-child(6) .form-checkbox').attr('checked','checked');
    $('#edit-alternatives-settings #edit-choice-multi').attr('checked', false);
    
     //audio player
     var oldAudio = $('#site-content-mv .media audio');
     oldAudio.after('<div class="newAudio play"></div>');
     var newAudio = $('#site-content-mv .newAudio');
     newAudio.click(function(){
         $(this).toggleClass('play');
         if($(this).hasClass('play')){
             $(this).siblings("audio")[0].pause()
         } else{
             $(this).siblings("audio")[0].play()
         }
         
         
     })
        // hr editing student class
    if($('body').hasClass('user-role-hr-manager') && $('.field-name-field-send-login-link').length>0){
        $('body').addClass('student-editing')
    }
     
     
     
      // Manage homepage slider height
      viewport = function() {
        var e = window,
          a = 'inner';
        if (!('innerWidth' in window)) {
          a = 'client';
          e = document.documentElement || document.body;
        }
        return {
          width: e[a + 'Width'],
          height: e[a + 'Height']
        };
      }

      $('.field-multiple-table').each(function() {
        if ($(this).parent('.form-item').find('.field-add-more-submit').length) {
          var $add = $(this).parent('.form-item').find('.field-add-more-submit');
          $(this).append($add);
        }
      });

      if ($('.page-course-catalogue, .page-devel, .page-my-trainings, .page-node-add, .page-node-edit, .page-training-catalogue')) {
        $('.form-type-select').each(function() {
          $(this).find('.description').css('margin-top', '-10px');
          $(this).after($(this).find('.description'));
        });
      }

      var sliderHeight = viewport().height - ($('#site-header').height() + $('#site-footer').height() + parseInt($('#site-footer').css('padding-top')) + parseInt($('#site-footer').css('padding-bottom')));
      if (sliderHeight > 680) {
        $('body.platon-use-slider #second-sidebar, body.platon-use-slider #second-sidebar ul.homepage-slider > li').height(sliderHeight);
      }

      // Replace category select list
      if (($('.view-my-trainings').length || $('.view-opigno-course-catalgue').length) && $('ul.action-links').length) {
        $('ul.action-links').append($('.views-widget-filter-opigno_course_categories_tid'));
        $('.view-filters form').prepend($('ul.action-links'));
      }

      // Auto submit when category select change
      if ($('.view-my-trainings').length || $('.view-opigno-course-catalgue').length) {
        var label = $('.views-widget-filter-opigno_course_categories_tid > label').text();

        $('.views-widget-filter-opigno_course_categories_tid select option[value="All"]').text(label);
        $('.view-filters .views-submit-button').hide();

        $(document).delegate('.views-widget-filter-opigno_course_categories_tid select', 'change', function() {
          $('.view-filters form').submit();
        });
      }

      $('.view-my-trainings .views-row .content-more a, .view-opigno-course-catalgue .views-row .content-more a, .view-active-trainings .views-row .content-more a').click(function(e) {
        e.preventDefault();
        if (!$(this).closest('.views-row').hasClass('open')) {
          $(this).closest('.views-row').addClass('open');
        }
      });
      $('.view-my-trainings .close-btn, .view-opigno-course-catalgue .close-btn, .view-active-trainings .close-btn').click(function(e) {
        e.preventDefault();
        if ($(this).closest('.views-row').hasClass('open')) {
          $(this).closest('.views-row').removeClass('open');
        }
      });

      // homepage close menu
      $('body.platon-use-slider #first-sidebar #main-navigation-wrapper .title .close-menu a').click(function() {

        if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $('#main-navigation-wrapper .main-navigation-row').slideUp();
        } else {
          $(this).addClass('open');
          $('#main-navigation-wrapper .main-navigation-row').slideDown();
        }
      });

      // Homepage slider
      if ($('body.platon-use-slider').length) {

        $('.homepage-slider').slick({
          fade: true,
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 1000,
          arrows: false,
          responsive: true,
          pauseOnHover: false,
        });

        $('.homepage-slider').bind('beforeChange', function(event, slick, currentSlide, nextSlide) {
          $('body.platon-use-slider #second-sidebar .slider-footer .slider-counter .top').text(nextSlide + 1);
        });
      }

      // Manage login block display
      $('a.trigger-block-user-login').click(function() {

        var $loginBlock = $('.header-user-tools #header-login .region-header-login');

        if ($loginBlock.hasClass('open')) {
          $loginBlock.removeClass('open').slideUp();
        } else {
          $loginBlock.addClass('open').slideDown();
        };

      });

      $('.header-user-tools #header-login, .header-user-tools #header-login .region-header-login').click(function(event) {
        event.stopPropagation();
      });

      $(document).click(function() {
        var $loginBlock = $('.header-user-tools #header-login .region-header-login');
        if ($loginBlock.hasClass('open')) {
          $loginBlock.removeClass('open').slideUp();
        }
      })

      // Remove no-js class from html.
      $('html').removeClass('no-js');

      if ($('#opigno-group-progress').length) // use this if you are using id to check
      {
        $("#second-sidebar #content").addClass("has-group-progress");
        $("#second-sidebar #tabs").addClass("has-group-progress");
        $("#second-sidebar .action-links").addClass("has-group-progress");
      }

      // Make search form appear on hover.
      var $headerSearch = $('#header-search', context);
      if ($headerSearch.length && !$headerSearch.hasClass('js-processed')) {
        // On mouseenter, show the form (if not already visible). Else, hide it - unless one of the child inputs has focus.
        $headerSearch.hover(
          function() {
            if (!(Modernizr && Modernizr.mq && Modernizr.mq('(min-width: 800px)'))) {
              return;
            }

            // Clear any past timeouts.
            if (this._timeOut) {
              clearTimeout(this._timeOut);
            }

            if (!$headerSearch.hasClass('opened')) {
              $headerSearch.addClass('opened').animate({
                width: '180px'
              });
            }
          },
          function() {
            if (!(Modernizr && Modernizr.mq && Modernizr.mq('(min-width: 800px)'))) {
              return;
            }

            // Clear any past timeouts.
            if (this._timeOut) {
              clearTimeout(this._timeOut);
            }

            // Wait for half a second before closing.
            this._timeOut = setTimeout(function() {
              // Only close if no child input has any focus.
              if (!$headerSearch.find('input:focus').length) {
                $headerSearch.animate({
                  width: '40px'
                }, {
                  complete: function() {
                    $headerSearch.removeClass('opened');
                  }
                });
              }
            }, 500);
          }
        );

        // If a child input is blurred, trigger the "mouseleave" event to see if we can close it.
        $headerSearch.find('input[type="text"], input[type="submit"]').blur(function() {
          $headerSearch.mouseleave();
        });

        // Add a placeholder text to the search input.
        $headerSearch.find('input[type="text"]').attr('placeholder', Drupal.t("Search") + '...');

        // Don't process it again.
        $headerSearch.addClass('js-processed');
      }

      // Make messages dismissable.
      $('div.messages', context).each(function() {
        var $message = $(this),
          $dismiss = $('span.messages-dismiss', this);
        if ($dismiss.length && !$dismiss.hasClass('js-processed')) {
          $dismiss.click(function() {
            $message.hide('fast', function() {
              $message.remove();
            });
          }).addClass('js-processed');
        }
      });

      // Make entire section in admin/opigno clickable and hoverable.
      var $adminSections = $('div.admin-panel dt', context);
      if ($adminSections.length) {
        $adminSections.each(function() {
          var $this = $(this);

          // Only process it once.
          if (!$this.hasClass('js-processed')) {
            $this._dd = $this.next('dd');

            // On hover, make entire section light up.
            $this.hover(
              function() {
                $this.addClass('hover');
                $this._dd.addClass('hover');
              },
              function() {
                $this.removeClass('hover');
                $this._dd.removeClass('hover');
              }
            );
            $this._dd.hover(
              function() {
                $this.mouseenter();
              },
              function() {
                $this.mouseleave();
              }
            );

            // On click, trigger the dt > a click.
            $this.click(function() {
              window.location.href = $this.find('a')[0].href;
            });
            $this._dd.click(function() {
              $this.click();
            });

            // Flag them as being processed.
            $this.addClass('js-processed');
            $this._dd.addClass('js-processed');
          }
        });
      }

      // Show the number of unread messages.
      if (typeof Drupal.settings.platon.unreadMessages !== 'undefined' && Drupal.settings.platon.unreadMessages) {
        var $messageLink = $('#main-navigation-item-messages', context);
        if ($messageLink.length && !$messageLink.hasClass('js-processed')) {
          $messageLink.find('a').prepend('<span id="messages-num-unread">' + Drupal.settings.platon.unreadMessages + '</span>');
          $messageLink.addClass('js-processed');
        }
      }

      // Make the entire tool "block" clickable for a better UX.
      $('.opigno-tool-block', context).each(function() {
        var $this = $(this);
        if (!$this.hasClass('js-processed')) {
          $this.click(function() {
            window.location = $this.find('a.opigno-tool-link').attr('href');
          }).addClass('js-processed');
        }
      });

      var $menu = $('#main-navigation-wrapper');
      var $menuTrigger = $('button.trigger');
      $menuTrigger.once().click(function() {
        if ($menuTrigger.hasClass('open')) {
          $menuTrigger.removeClass('open');
          $menu.removeClass('open');
          $menu.animate({
            paddingRight: 20
          }, 300);
          $.cookie('open-menu', 0);
        } else {
          $menuTrigger.addClass('open');
          $menu.addClass('open');
          $menu.animate({
            paddingRight: 215
          }, 300);
          $.cookie('open-menu', 1);
        }
      });
      if (typeof $.cookie != 'undefined' && $.cookie('open-menu') == 1) {
        $menuTrigger.addClass('open');
        $menu.addClass('open');
        $menu.animate({
          paddingRight: 215
        }, 300);
      }

      var labelText = $('#collaborative-workspace-node-form .form-item-field-classes-courses label').text();
      $('#collaborative-workspace-node-form .form-item-field-classes-courses select option[value="_none"]').text(labelText);

 
      // Make menu "toggleable" on mobile.
      var $menuToggle = $('#menu-toggle-link', context);
      if ($('body.platon-use-slider').length) {
        if (!$menuToggle.hasClass('js-processed')) {
          $menuToggle.click(function() {
            $('#main-navigation-wrapper').toggleClass('open');
          }).addClass('js-processed');
        }
      } else {
        if (!$menuToggle.hasClass('js-processed')) {
          $menuToggle.click(function() {
            $('#main-navigation-wrapper').toggleClass('menuOpen');
            $('#second-sidebar').toggleClass('menuOpen');
          }).addClass('js-processed');
        }
      }


    }

  };
  
  $(document).ready(function() {
       if($('#second-sidebar .trigger.jquery-once-1-processed').length < 1){
            $('#second-sidebar #opigno-group-progress').after('<button class="trigger jquery-once-1-processed"><span></span></button>')
        }
        
        $('#second-sidebar .trigger').bind('click', function(){
            $(this).toggleClass('open')
            $('#opigno-group-progress').toggle("active")
        });
        
        $("body").bind('DOMSubtreeModified', function() {
            if($('.cke_dialog_title').text() == 'Image Properties'){
                $('.cke_dialog_body .cke_dialog_image_url').css('display','none')
                /$('.cke_dialog_body .cke_dialog_contents').css('margin-top','0')
                $('.cke_dialog_body .cke_dialog_tabs').css('display','none')
                
            }
        });


        // var w = window,
        // d = document,
        // e = d.documentElement,
        // g = d.getElementsByTagName('body')[0],
        // x = w.innerWidth || e.clientWidth || g.clientWidth,
        // y = w.innerHeight|| e.clientHeight|| g.clientHeight;

        // // $('body').append($(x + ' × ' + y));
        // $('body').append($('<p>  </p>').html(y));
    });
    



    
    // document.write(x + ' × ' + y)

    // $('body').append($('<p>text</p>'));



    



  
     $(document).ajaxComplete(function() {
      
    
         
    });

})(jQuery, Drupal, window);


