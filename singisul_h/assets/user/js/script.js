
$(function(){
	//kor & ENG
	$('.language li a').on('click', function(){	
		$(this).parent().addClass('on');
		$(this).parent().siblings().removeClass('on');		
	});
	
	//gnb
	$(document).ready(function(){
		//상단메뉴
		$('.gnb .top_menu > ul > li > a').on({
			mouseenter:function(){
				$(this).addClass('on');				
				//$('.gnb .top_menu').append('<div class="nav_bg"><span></span></div>')
				//$('html').css('overflow-x','hidden')
				$('.gnb div, .nav_bg').show();
				$('#menu').css('background', '#fff');
			}
		});

		$('.gnb .top_menu > ul > li > div').each(function(i, e){
			$(e).mouseenter(function(){
				$(this).prev().addClass('on');
				$(this).parent().siblings().children('a').removeClass('on');
			});
			$(e).prev().mouseleave(function(){
				$(this).removeClass('on');
			});
		});

		$('.gnb').mouseleave(function(){			
			$('.gnb .top_menu a').removeClass('on');		
			$('.gnb .top_menu div, .nav_bg').hide();
			$('#menu').css('background', 'none');
		});	

	});

	//2depth bg
	$('.sub_menu > ul').mouseenter(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});

	$('.sub_menu > ul').mouseleave(function(){
		$(this).removeClass('active');	
	});

	//모바일 메뉴
	//모바일 전체메뉴
	$(document).ready(function(){ 
		$('.menu_btn>a').on('click', function(){
            $('.menu_bg').show(); 
            $('.sidebar_menu').show().animate({
                right:0
            });  
        });
        $('.close_btn>a').on('click', function(){
            $('.menu_bg').hide(); 
            $('.sidebar_menu').animate({
                right: '-' + 100 + '%'
                       },function(){
				$('.sidebar_menu').hide(); 
			}); 
        });	
	
		
		/*반응형 햄버거메뉴*/
		$('.menu_wrap > li > a').click(function(e){
				e.preventDefault()
				$('.menu_wrap ul:visible').slideUp(200).parent().removeClass('active');
				$(this).next(':hidden').slideDown(200).parent().addClass('active');
		});

		
		
				
		//movie - youtube		
		/*		
		document.addEventListener("DOMContentLoaded", function () {
			movieSliderSwiper();
		});

		function movieSliderSwiper() {
			let movieSliderSwiper = new Swiper('.movie_box_area .swiper-container', {
				navigation: {
					nextEl: '.movie_box_area .swiper-button-next',
					prevEl: '.movie_box_area .swiper-button-prev',
				},
				effect: "fade",
				fadeEffect: {
					crossFade: true
				},
				pagination: {
				  el: ".main_movie .swiper-pagination",
				  //type: "fraction",
				},
			})
		};

		let tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		let firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		function onYouTubeIframeAPIReady(id) {
			let player = document.querySelectorAll('[iframe-video]');
			let buttons = document.querySelectorAll('[video-buttons]');

			player.forEach(item => {
				let itemElem = item.dataset.videoLink;
				itemElem = new YT.Player(item, {
					videoId: 'h6J8-EPzdRo'
				});

				buttons.forEach(item => {
					item.addEventListener('click', function (e) {
						itemElem.pauseVideo();
					});
				});
			});
		};			

		*/
		
		let youtubeSwiper = new Swiper('.movie_box_area .swiper-container', {
			pagination: {
			  el: ".movie_box_area .swiper-pagination",
			  //type: "fraction",
			},
			navigation: {
			  nextEl: '.movie_box_area .swiper-button-next',
			  prevEl: '.movie_box_area .swiper-button-prev',
			},
			// function to stop youtube video on slidechange
			on: {
				slideChange: function (el) {
				  $('.movie_box_area .swiper-slide').each(function () {
					  let youtubePlayer = $(this).find('iframe').get(0);
					  if (youtubePlayer) {
						youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
					  }
				  });
				},
			},
		});
		


		//poster
		let swiper2 = new Swiper(".mySwiper2", {
			slidesPerView : 2, //슬라이드 보이는 갯수
			spaceBetween : 20, //슬라이드 간격
			slidesPerGroup : 2, //슬라이드 그룹
			pagination: {
			  el: ".mySwiper2 .swiper-pagination",
			  type: "fraction",
			},
			navigation: {
			  nextEl: ".mySwiper2 .swiper-button-next",
			  prevEl: ".mySwiper2 .swiper-button-prev",
			},
			 autoplay: {
				delay: 3000,	
				disableOnInteraction:false,
			},
		});

		$('.swiper-play').click(function(){
			mySwiper2.autoplay.start();
		});

		$('.slide_btn2 button.start2').on('click',function(){
			$(this).addClass('on');
			$(this).siblings('button').removeClass('on');
			swiper2.autoplay.start();
			return false;
		});

		$('.slide_btn2 button.stop2').on('click',function(){
			$(this).addClass('on');
			$(this).siblings('button').removeClass('on');
			swiper2.autoplay.stop();
			return false;
		});
 
	



		//보도자료
		let swiper3 = new Swiper(".mySwiper3", {			
			pagination: {
			  el: ".mySwiper3 .swiper-pagination",
			  type: "fraction",
			},
			navigation: {
			  nextEl: ".mySwiper3 .swiper-button-next",
			  prevEl: ".mySwiper3 .swiper-button-prev",
			},
			 autoplay: {
				delay: 3000,	
				disableOnInteraction:false,
			},
		});

		$('.swiper-play').click(function(){
			mySwiper3.autoplay.start();
		});

		$('.slide_btn3 button.start3').on('click',function(){
			//$(this).addClass('on');
			//$(this).siblings('button').removeClass('on');
			$('.stop3').css('display', 'block');
			$(this).css('display', 'none');
			swiper3.autoplay.start();
			return false;
		});

		$('.slide_btn3 button.stop3').on('click',function(){
			//$(this).addClass('on');
			//$(this).siblings('button').removeClass('on');
			$('.start3').css('display', 'block');
			$(this).css('display', 'none');
			swiper3.autoplay.stop();
			return false;
		});
	
	});



	//롤링 자동
	$(document).ready(function() {
		let $panel = $(".rolling_panel").find("ul"); 
		let itemWidth = $panel.children().outerWidth(); // 아이템 가로 길이
		let itemLength = $panel.children().length;    // 아이템 수 
		// Auto 롤링 아이디
		let rollingId; 
		auto(); 

		// 배너 마우스 오버 이벤트
		$panel.mouseover(function() {
			clearInterval(rollingId);
		}); 

		// 배너 마우스 아웃 이벤트
		$panel.mouseout(function() {
			auto();
		}); 

		// 이전 이벤트
		$("#prev").on("click", prev); 
		$("#prev").mouseover(function(e) {
			clearInterval(rollingId);
		}); 
		$("#prev").mouseout(auto); 

		// 다음 이벤트
		$("#next").on("click", next); 
		$("#next").mouseover(function(e) {
			clearInterval(rollingId);
		}); 
		$("#next").mouseout(auto);
		 function auto() { 
			// 2초마다 start 호출
			rollingId = setInterval(function() {
				start();
			},	3000);
		} 
		function start() {
			$panel.css("width", itemWidth * itemLength);
			$panel.animate({"left": - itemWidth + "px"}, function() {

				// 첫번째 아이템을 마지막에 추가하기
				$(this).append("<li>" + $(this).find("li:first").html() + "</li>");

				// 첫번째 아이템을 삭제하기
				$(this).find("li:first").remove();

				// 좌측 패널 수치 초기화
				$(this).css("left", 0);
			});
		}

		// 이전 이벤트 실행
		function prev(e) {
			$panel.css("left", - itemWidth);
			$panel.prepend("<li>" + $panel.find("li:last").html() + "</li>");
			$panel.animate({"left": "0px"}, function() {
				$(this).find("li:last").remove();
			});
		}

		// 다음 이벤트 실행
		function next(e) {
			$panel.animate({"left": - itemWidth + "px"}, function() {
				$(this).append("<li>" + $(this).find("li:first").html() + "</li>");
				$(this).find("li:first").remove();
				$(this).css("left", 0);
			});
		}		
		
		
		$('.rollingbanner_btn_box #start').on('click',function(){
			//$(this).addClass('on');
			//$(this).siblings('button').removeClass('on');
			$('.rollingbanner_btn_box #stop').css('display', 'block');
			$(this).css('display', 'none');
			auto();
			return false;
		});

		$('.rollingbanner_btn_box #stop').on('click',function(){
			//$(this).append().addClass('on');
			//$(this).siblings('button').removeClass('on');
			$('.rollingbanner_btn_box #start').css('display', 'block');
			$(this).css('display', 'none');
			//rolling.autoplay.stop();
			clearInterval(rollingId);
			return false;
		});


	});	
	
	
});

		
		

