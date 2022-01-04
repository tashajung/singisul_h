/*--------------------------------------------------index-------------------------------------------------*/
$(function(){
	//------------------------로그아웃 팝업
	//open
	$('.logout').on('click', function(e) {
		$('.logout_popup_box').fadeIn(350);
		e.preventDefault();
	});
	//close
	$('.logout_popup_box .popup_close_btn').on('click', function(e) {
		$('.logout_popup_box').fadeOut(350);
		e.preventDefault();
	});
/*------------------------------------------------------sub------------------------------------------------*/
	//-----------------------tab
	$('.tab-link').click(function() {
		let tabId = $(this).attr('data-tab');
		$('.tab-link').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#" + tabId).addClass('current');
	});		
		
	
	/* -------------------------------메뉴관리 -------------------------------*/
	//전체 열고 닫기 버튼
	$('.close_allmenu').on('click', function(e) {
		$('.twodepth_btn').hide();
	});

	$('.open_allmenu').on('click', function(e) {
		$('.twodepth_btn').show();
	});

	//트리형구조
	$("#tree").treeview({
		collapsed: true,
		animated: "fast",
		control:"#sidetreecontrol", //버튼
		prerendered: true,
		persist: "location"
	});

	//-----------------------트리형메튜 2depth
	//트리형메튜 2depth 추가
	$('.treeview .twodepth_btn .add').on('click', function(e) {
		$(this).parent().parent().addClass('active');
		$(this).parent().siblings('ul').children('li').removeClass('last');
		$(this).parent().parent().children().children().removeClass('active');
		//$(this).parent().siblings('ul').children('li').removeClass('lastExpandable');
		//$(this).parent().siblings('ul').children('li').children().removeClass('lastExpandable-hitarea');
		$('<li class="last"><span class="file add_txt_dn"><input type="text" class="ib mr10 form-control w250 txt_write" /><button type="button" class="ib blue_btn add_complete mr5" disabled="true">등록</button><button type="button" class="ib gray_btn del_complete">취소</button></span></li>').appendTo('.active .twodepth');			
		$(this).parent().css('display', 'none');
		$(this).parent().parent().siblings().children('.twodepth_btn').css('display', 'none');
		$('.threedepth_btn').css('display', 'none');
		$('.d_n').remove();		
	});

	//등록 버튼 디세이블 해제(인풋 값 있을때만 해제)
	$(document).on("input",".treeview .active .txt_write",function(){ 			
		if($(".treeview .active .txt_write").val()=='')
			$(".add_complete").attr("disabled", true);
		else
			$(".add_complete").attr("disabled", false);
	});

	//2depth 메뉴 등록안내 팝업
	//open
	$(document).on("click",".treeview .twodepth .add_complete",function(){ 			
		$('.two_treeviewadd_popup').fadeIn(350);				
	});

	//close
	$('.two_treeviewadd_popup .popup_close_btn').on('click', function(e) {
		$('.two_treeviewadd_popup').fadeOut(350);				
	});

	//open	 
	$('.two_treeviewadd_popup .complate_btn').on('click', function(e) {
		$('.two_treeviewadd_complete').fadeIn(350);				
	});

	//close
	$('.two_treeviewadd_complete .popup_close_btn').on('click', function(e) {
		$('.two_treeviewadd_complete').fadeOut(350);				
	});

	//알럿 및 값 가져오기
	$('.two_treeviewadd_popup .complate_btn').click(function() {
		let inputVal = $('.treeview .active > .twodepth > li.last > span > input').val();
		//let result = inputVal;
		//let input_check = '<span class="file"><input type="text" class="form-control w200 t_r" value="" name="rr" /></span><span><input type="checkbox" class="ib ml5 mr5" /></span><div class="menu_contents_menu_button_box threedepth_btn"><button type="button" class="add mr5"><i class="fas fa-plus"></i></button><button type="button" class="up mr5">▲</button><button type="button" class="down">▼</button></div><ul class="threedepth"><li class="d_n"></li></ul>';			
		let resultHtml = $('<span class="file"><input type="text" class="form-control w200 t_r" value="" name="result_txt" /></span><span><input type="checkbox" class="ib ml5 mr5" /></span><div class="menu_contents_menu_button_box threedepth_btn"><button type="button" class="add mr5"><i class="fas fa-plus"></i></button><button type="button" class="up mr5">▲</button><button type="button" class="down">▼</button></div><ul class="threedepth"><li class="d_n"></li></ul></span>').prependTo('.treeview .active > .twodepth > li.last');
			
		$('.treeview .active > .twodepth > li.last').prepend(resultHtml);	//결과값
		$('.treeview .active > .twodepth > li.last input[name="result_txt"]').attr('value',inputVal);				
	
		$('.treeview .twodepth_btn, .treeview .threedepth_btn').css('display', 'inline-block');
		$('.treeview ul, .treeview li').removeClass('active');		
		$('.two_treeviewadd_popup').fadeOut(350);	
		
		//확인 팝업 - open		
		$('.two_treeviewadd_popup_ok').fadeIn(350);
		$('.add_txt_dn').addClass('add_txt_dn_none');
	});
	//확인 팝업 - close
	$('.two_treeviewadd_popup_ok .popup_close_btn').on('click', function(e) {
		$('.two_treeviewadd_popup_ok').fadeOut(350);	
	});	

	//2depth 메뉴 등록 취소
	$(document).on("click",".treeview .twodepth > li.last .del_complete",function(){ 	
		$(this).parent().parent().siblings().last().addClass('last');
		$(this).parent().parent().remove();
		$('.treeview .active').children('li').last().addClass('last');
		$('.treeview .twodepth_btn, .treeview .threedepth_btn').css('display', 'inline-block');	
		$(this).parent().css('display', 'inline-block');
		$('.treeview ul, .treeview li').removeClass('active active3');
	});


	//-----------------------트리형메튜 3depth
	//트리형메튜 3depth 추가
	$(document).on("click",".treeview .threedepth_btn .add",function(){ 	
		$(this).parent().parent().addClass('active3');
		$(this).parent().parent().siblings().removeClass('active3');
		$(this).parent().parent().children('.threedepth').children().removeClass('last');			
		//$(this).parent().css('display', 'none');
		//$(this).parent().siblings('ul').children('li').removeClass('lastExpandable');
		//$(this).parent().siblings('ul').children('li').children().removeClass('lastExpandable-hitarea');
		$('<li class="last"><span class="add_txt_dn"><input type="text" class="ib mr10 form-control w250" /><button type="button" class="ib blue_btn add_complete mr5" disabled="true">등록</button><button type="button" class="ib gray_btn del_complete">취소</button></span></li>').appendTo('.active3 .threedepth');	
		$(this).parent().css('display', 'none');
		$('.threedepth_btn, .twodepth_btn').css('display', 'none');
		$('.d_n').remove();
	});

	//3depth 메뉴 등록안내 팝업
	//----open
	$(document).on("click",".treeview .active3 .add_complete",function(){ 			
		$('.three_treeviewadd_popup').fadeIn(350);	
		$('.two_treeviewadd_popup').css('display', 'none');
	});

	//----close
	$('.three_treeviewadd_popup .popup_close_btn').on('click', function(e) {
		$('.three_treeviewadd_popup').fadeOut(350);
		$('.two_treeviewadd_popup').css('display', 'none');
	});

	//----open
	$('.three_treeviewadd_popup .complate_btn').on('click', function(e) {			
		$('.three_treeviewadd_popup_complete').fadeIn(350);	
		//$('.three_treeviewadd_popup').css('display', 'none');
	});

	//----close
	$('.three_treeviewadd_popup_complete .popup_close_btn').on('click', function(e) {
		$('.three_treeviewadd_popup_complete').fadeOut(350);
		//$('.two_treeviewadd_popup').css('display', 'none');
	});



	//----알럿 및 값 가져오기
	$('.three_treeviewadd_popup .complate_btn').click(function() {
		let inputVal3 = $('.treeview .active3 ul > li.last > span > input').val();
		//let result3 = inputVal3;
		//let tr = $('<input type="text" class="form-control w200 t_r" />').attr('value', result3);
		//let input_check3 = '<span><input type="checkbox" class="ib ml5 mr5" /></span><div class="menu_contents_menu_button_box threedepth_btn">				<button type="button" class="up mr5">▲</button><button type="button" class="down">▼</button></div>';					
		//$('.treeview .active3 ul.threedepth > li.last').text(result3).append(input_check3); //결과값 가져오기
		//alert("등록되었습니다.");	
		//setTimeout(function(){
		 // obj.focus();
	    //});
		let resultHtml3 = $('<input type="text" class="form-control w200 t_r" value="" name="result_txt3" /><span><input type="checkbox" class="ib ml5 mr5" /></span><div class="menu_contents_menu_button_box four_btn"><button type="button" class="up mr5">▲</button><button type="button" class="down">▼</button></div>').prependTo('.treeview .active3 > .threedepth > li.last');
			
		$('.treeview .active3 > .threedepth > li.last').prepend(resultHtml3);	//결과값
		$('.treeview .active3 > .threedepth > li.last input[name="result_txt3"]').attr('value',inputVal3);		

		$('.treeview .threedepth_btn').css('display', 'inline-block');
		$('.treeview .twodepth_btn').css('display', 'inline-block');
		$('.treeview ul, .treeview li').removeClass('active3 active');	
		//$('.treeview .threedepth > li.last > span').hide();

		//확인 팝업 - open		
		//$('.three_treeviewadd_popup_ok').fadeIn(350);
		$('.add_txt_dn').addClass('add_txt_dn_none');
	});
	//확인 팝업 - close
	$('.three_treeviewadd_popup_ok .popup_close_btn').on('click', function(e) {
		$('.three_treeviewadd_popup_ok').fadeOut(350);
		e.preventDefault();
	});			

	//등록 버튼 디세이블 해제(인풋 값 있을때만 해제)
	$(document).on("input",".treeview .active3 .last input",function(){ 			
		if($(".treeview .active3 .last span input").val()=='')
			$(".add_complete").attr("disabled", true);
		else
			$(".add_complete").attr("disabled", false);
	});	

	//3depth 메뉴 등록 취소
	$(document).on("click",".treeview .del_complete",function(){ 	
		//$(this).css('background', 'red !important');
		$(this).parent().parent().siblings('li:last-child').addClass('last');
		$(this).parent().parent().remove();	
		$(this).parent().parent().removeClass('last');
		//$('.treeview .active3 > ul > li:last-child').addClass('last');
		$('.treeview .twodepth_btn, .treeview .threedepth_btn').css('display', 'inline-block');	
		$('.treeview ul, .treeview li').removeClass('active active3');
	});		

	//삭제
	$('#sidetreecontrol .del_btn').click(function(){
        //if(confirm("삭제하시겠습니까?")){
		//if(){
		 if($('.treeview input[type=checkbox]:checked').length === 0){
			//삭제 팝업
			alert("삭제하실 항목을 선택해주세요.");
			
        }else{
			//- open		
			$('.del_treeviewa_popup').fadeIn(350);			
			//- open & close
			$('.del_treeviewa_popup .del_btn').on('click', function(e) {
				$('.del_treeviewa_popup').fadeOut(350);
				$('.del_treeviewa_popup_complate').fadeIn(350);
			});

			//- close
			$('.del_treeviewa_popup .popup_close_btn').on('click', function(e) {
				$('.del_treeviewa_popup').fadeOut(350);
			});

			//- close
			$('.del_treeviewa_popup_complate .popup_close_btn').on('click', function(e) {
				$('.del_treeviewa_popup_complate').fadeOut(350);
			});
			
			//삭제 되는 값
			$('.del_treeviewa_popup .del_btn').on('click', function(e) {
				$(".treeview input[type=checkbox]:checked").each(function(){                
					let del = $("input[type=checkbox]:checked").parent().parent();				
					del.remove();
					//let lastadd = del.remove();
					//lastadd.parent().css('background-color', 'red');				
					$('.treeview > li:last-child, .treeview > li > ul > li:last-child').addClass('last');
				});
			});
            return false;
		};
		
    });
	

	//up & down	
	$(document).on("click",".treeview .up",function(){ 	
		let checkPrev2 = $(this).parent().parent();
		checkPrev2.prev().before(checkPrev2);
		checkPrev2.removeClass('last');
		$('.treeview > li:last-child, .treeview > li > ul > li:last-child, .treeview > li > ul > li > ul >li:last-child').addClass('last');
		//$(this).parent().parent().siblings().removeClass('last');
		
	});
	
	$(document).on("click",".treeview .down",function(){ 		            
		let checkNext2 = $(this).parent().parent();
			checkNext2.next().after(checkNext2);	
			checkNext2.removeClass('last');
		$(this).parent().parent().siblings().removeClass('last');
		$('.treeview > li:last-child, .treeview > li > ul > li:last-child, .treeview > li > ul > li > ul >li:last-child').addClass('last');
	
	});

	//저장
	//open
	$('.menu_contents_top .tree_save_btn').on('click', function(e) {		
		$('.tree_save_popup').fadeIn(350);				
	});

	//close
	$('.tree_save_popup .popup_close_btn').on('click', function(e) {
		$('.tree_save_popup').fadeOut(350);				
	});

	//open
	$('.tree_save_popup .save_btn').on('click', function(e) {			
		$('.tree_save_popup_complate').fadeIn(350);				
	});

	//close
	$('.tree_save_popup_complate .popup_close_btn').on('click', function(e) {		
		$('.tree_save_popup_complate').fadeOut(350);				
	});

	


		




	
})
















