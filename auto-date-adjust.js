// JavaScript Document

var mtg = {
	//convert date into text form 06/25/2015 - sunday july 02, 2015
	fullDateView : function(value,parentGrup){
		//console.log(value,parentGrup);
		var splitValue = value.split("/");
		var thisMonth = splitValue[0];
		var thisDate = splitValue[1];
		var thisYear = splitValue[2];
	
		//for Month
		var month = new Array();
		month[1] = "January";
		month[2] = "February";
		month[3] = "March";
		month[4] = "April";
		month[5] = "May";
		month[6] = "June";
		month[7] = "July";
		month[8] = "August";
		month[9] = "September";
		month[10] = "October";
		month[11] = "November";
		month[12] = "December";
		var monthNumber = new Number(thisMonth);
		var monthName = month[monthNumber];
		//for Day
		var fullDate = monthName+" "+thisDate+", "+thisYear;
		var Xmas95 = new Date(fullDate);
		var weekdayin = Xmas95.getDay();
		var weekdayNumber = new Number(weekdayin);
		var weekday = new Array(7);
		weekday[0] = "Sunday";
		weekday[1] = "Monday";
		weekday[2] = "Tuesday";
		weekday[3] = "Wednesday";
		weekday[4] = "Thursday";
		weekday[5] = "Friday";
		weekday[6] = "Saturday";
		var dayName = weekday[weekdayNumber];
		var fullDate = dayName+" "+monthName+" "+thisDate+", "+thisYear;	
		$(parentGrup).children('a.date-group').html(fullDate);	
	},
	// Card All Value Set to Reset
	cardSetToReset : function(){
		$('#mtgEditdate ol.dd-list li.dd-item:first').attr('mtg-owner','0').find('input.specific-date-input').val("");
		$('#mtgEditdate ol.dd-list li.dd-item:first').find('input.generic-date-input').val("Set Date");
		$('#mtgEditdate ol.dd-list li.dd-item:first').find('.btn.date-set').removeClass('btn-default btn-primary').addClass('btn-default').children('em').html("Set Date");	
	},
	// Your Item Card Group Date Set
	cardGroupDateSet : function(parentId,number){
		nextTillLi = number;
		parentGrup = "li[data-groupdate=" + parentId + "]";
		var labelOnClickSpe = "mtg.cardGroupGenSpe('spe', '" + parentGrup + "')";
		var labelOnClickGen = "mtg.cardGroupGenSpe('gen', '" + parentGrup + "')";
		var targetDate = $(parentGrup).children('section');
		if($(targetDate).hasClass('open')){
			$('.date-group-select > section').removeClass('open').animate({height: "0"}, 800).fadeOut(0);
			$('.date-group-select').animate({height: "32"}, 800);
		}
		else{
			$(targetDate).find('label.spe-date-group').attr("onClick", labelOnClickSpe);
			$(targetDate).find('label.gen-date-group').attr("onClick", labelOnClickGen);
			 $(parentGrup).animate({height: "150"}, 800);
			 $(targetDate).addClass('open').css({'height':'0','display':'block'}).animate({height: "108"}, 800);
		}
	},
	// Your Item Card Date Set
	cardDateSet : function(iD){
		var targetDate = "section[data-cardDateEdit=" + iD + "]";
		var targetTime = "section[data-cardTimeEdit=" + iD + "]";
		var parent = "li[data-id=" + iD + "] .cardHolder";
		var labelOnClickSpe = "mtg.specific('date', '" + targetDate + "')";
		var labelOnClickGen = "mtg.generic('date', '" + targetDate + "')";
		if($(targetDate).hasClass('open')){
			$('.date-select').removeClass('open').animate({height: "0"}, 800).fadeOut(0);
			$('.cardHolder').removeClass('openDate openTime').animate({height: "112"}, 800);
		}
		else{
			$(targetDate).find('label.spe-date').attr("onClick", labelOnClickSpe);
			$(targetDate).find('label.gen-date').attr("onClick", labelOnClickGen);
			$(parent).removeClass('openTime');
			$('.cardHolder.openDate').removeClass('openDate').animate({height: "112"}, 800);
			$('.cardHolder.openTime').removeClass('openTime').animate({height: "112"}, 800);
			$(parent).addClass('openDate').animate({height: "184"}, 800);
			$('.date-select.open').removeClass('open').animate({height: "0"}, 800).fadeOut(0);
			$('.time-select.open').removeClass('open').animate({height: "0"}, 800).fadeOut(0);
			$(targetDate).addClass('open').css({'height':'0','display':'block'}).animate({height: "75"}, 800);
		}
	},
	// Your Item Card Time Set
	cardTimeSet : function(iD){
		var targetDate = "section[data-cardDateEdit=" + iD + "]";
		var targetTime = "section[data-cardTimeEdit=" + iD + "]";
		var parent = "li[data-id=" + iD + "] .cardHolder";
		var labelOnClickSpe = "mtg.specific('time', '" + targetTime + "')";
		var labelOnClickGen = "mtg.generic('time', '" + targetTime + "')";
		if($(targetTime).hasClass('open')){
			$('.time-select').removeClass('open').animate({height: "0"}, 800).fadeOut(0);
			$('.cardHolder').removeClass('openTime openDate').animate({height: "112"}, 800);
		}
		else{
			$(targetTime).find('label.spe-time').attr("onClick", labelOnClickSpe);
			$(targetTime).find('label.gen-time').attr("onClick", labelOnClickGen);
			$(parent).removeClass('openDate');
			$('.cardHolder.openDate').removeClass('openDate').animate({height: "112"}, 800);
			$('.cardHolder.openTime').removeClass('openTime').animate({height: "112"}, 800);
			$(parent).addClass('openTime').animate({height: "184"}, 800);
			$('.time-select.open').removeClass('open').animate({height: "0"}, 800).fadeOut(0);
			$('.date-select.open').removeClass('open').animate({height: "0"}, 800).fadeOut(0);
			$(targetTime).addClass('open').css({'height':'0','display':'block'}).animate({height: "75"}, 800);
		}
	},
	specific : function(typeThis,iD){
		var target = ".specific-" + typeThis + "-input";
		var offtarget = ".generic-" + typeThis + "-input";
		var offtargetA = ".generic-" + typeThis + "-input + a";
		$(iD).find(target).removeAttr('disabled');
		$(iD).find('.input-group-btn').css('opacity','1');
		$(iD).find('.mtg-blue-radio').removeClass('checked').attr({'aria-checked':'false','aria-disabled':'true'});
		$(iD).find('.mtg-blue-radio').children('input').removeAttr('checked');
		$(iD).find('form').children('.form-group:first').find('.mtg-blue-radio').addClass('checked').attr({'aria-checked':'true','aria-disabled':'false'});
		$(iD).find('form').children('.form-group:first').find('.mtg-blue-radio').children('input').attr('checked','checked');
		$(iD).find(offtarget).attr('disabled','true');
		$(iD).find(offtargetA).css('visibility','hidden');
	},
	generic : function(typeThis,iD){
		var target = ".specific-" + typeThis + "-input";
		var offtarget = ".generic-" + typeThis + "-input";
		var offtargetA = ".generic-" + typeThis + "-input + a";
		$(iD).find(target).attr('disabled','true');
		$(iD).find('.input-group-btn').css('opacity','.5');
		$(iD).find('.mtg-blue-radio').removeClass('checked').attr({'aria-checked':'false','aria-disabled':'true'});
		$(iD).find('.mtg-blue-radio').children('input').removeAttr('checked');
		$(iD).find('form').children('.form-group:last').find('.mtg-blue-radio').addClass('checked').attr({'aria-checked':'true','aria-disabled':'false'});
		$(iD).find('form').children('.form-group:last').find('.mtg-blue-radio').children('input').attr('checked','checked');
		$(iD).find(offtarget).removeAttr('disabled');
		$(iD).find(offtargetA).css('visibility','visible');
		//var totalparents = $('ol li[data-id]').length;
		var i, needId;
		for(i=1; i<=totalparents; i++){
			var parentId = "li[data-id="+i+"]";
			var needId = "input"+i;
			$(parentId).find('input.generic-date-input').attr('id',needId);
		}
	},
	cardGroupGenSpe : function(typeThis,iD){
		if(typeThis == 'spe'){
			$(iD).find('input.specific-date-input').removeAttr('disabled');
			$(iD).find('.input-group-btn').css('opacity','1');
			$(iD).find('input.generic-date-group-input').attr('disabled','true');
			$(iD).find('input.generic-date-group-input + a').css('visibility','hidden');
			$(iD).find('.input-group-btn').css('opacity','1');
			$(iD).find('.mtg-blue-radio').removeClass('checked').attr({'aria-checked':'false','aria-disabled':'true'});
			$(iD).find('.mtg-blue-radio').children('input').removeAttr('checked');
			$(iD).find('form').children('.form-group:first').find('.mtg-blue-radio').addClass('checked').attr({'aria-checked':'true','aria-disabled':'false'});
			$(iD).find('form').children('.form-group:first').find('.mtg-blue-radio').children('input').attr('checked','checked');
		}
		else if(typeThis == 'gen'){
			$(iD).find('input.specific-date-input').attr('disabled','true');
			$(iD).find('.input-group-btn').css('opacity','.5');
			$(iD).find('input.generic-date-group-input').removeAttr('disabled');
			$(iD).find('input.generic-date-group-input + a').css('visibility','visible');
			$(iD).find('.input-group-btn').css('opacity','1');
			$(iD).find('.mtg-blue-radio').removeClass('checked').attr({'aria-checked':'false','aria-disabled':'true'});
			$(iD).find('.mtg-blue-radio').children('input').removeAttr('checked');
			$(iD).find('form').children('.form-group:last').find('.mtg-blue-radio').addClass('checked').attr({'aria-checked':'true','aria-disabled':'false'});
			$(iD).find('form').children('.form-group:last').find('.mtg-blue-radio').children('input').attr('checked','checked');
		}
		
	},
	// Your Item Card Group Genric Date Set
	dateGroup : function(value){
		var allLiSelect = "li[data-groupdate]";
		if(value == "Reset"){
			$(parentGrup).children('section').removeClass('open').animate({height: "0"}, 800).fadeOut(0);
			$(parentGrup).animate({height: "32"}, 800);
		}
		else{
			var totalOwnerCreate = $('#nestable2 ol li[data-groupdate]').length;
			var currentOwnerShip = $(parentGrup).attr('data-groupdate');
			var i,j, needOwner;
			$(parentGrup).children('section').removeClass('open').animate({height: "0"}, 800).fadeOut(0);
			$(parentGrup).animate({height: "32"}, 800);
			$(parentGrup).children('a.date-group').html(value);
			$(parentGrup).nextUntil(allLiSelect).find('.btn.date-set').removeClass('btn-default').addClass('btn-primary').children('em').html(value);
			for(i=1; i<=totalOwner; i++){
				//console.log('Total Owner Search/Loop',totalOwner,i);
				var ownerId = "li[data-groupdate="+i+"]";
				var ownerDate = $(ownerId).find('input.specific-date-input').val();
				// check if another owner is found with same date
				if( ownerDate != undefined && value == ownerDate && parentGrup != ownerId ){
					var ownerGropId = $(ownerId).attr('data-groupdate')
					var kk = $(parentGrup).nextUntil('.date-group-select');
					var nwKK = ''; 
					kk.each(function(index, element) {
						var newid = $(this).attr('data-id');
						nwKK = nwKK +"<li class='dd-item dd3-item' data-id='"+ newid +"' mtg-owner='"+ ownerGropId +"'>"+$(this).html()+"</li>"
						$(this).empty().remove();
					});
					$(nwKK).insertAfter(ownerId);
					setTimeout(mtg.deleteOwner, 3100);
				}
			}
		} 
	},
	// Your Item Card Group Specific Date Set
	dateGroupCalendar : function(value){
		var totalOwnerCreate = $('#nestable2 ol li[data-groupdate]').length;
		var currentOwnerShip = $(parentGrup).attr('data-groupdate');
		var i,j, needOwner;
		var allLiSelect = "li[data-groupdate]";
		$(parentGrup).children('section').removeClass('open').animate({height: "0"}, 800).fadeOut(0);
		$(parentGrup).animate({height: "32"}, 800);
		$(parentGrup).nextUntil(allLiSelect).find('.btn.date-set').removeClass('btn-default').addClass('btn-primary').children('em').html(value);
		mtg.fullDateView(value,parentGrup);
		for(i=1; i<=totalOwner; i++){
			var ownerId = "li[data-groupdate="+i+"]";
			var ownerDate = $(ownerId).find('input.specific-date-input').val();
			// check if another owner is found with same date
			//console.log('Total value/Owner/ownerDate',ownerId,ownerDate,value);
			if( ownerDate != undefined && value == ownerDate && parentGrup != ownerId ){
				var ownerGropId = $(ownerId).attr('data-groupdate')
				//var length = $(parentGrup).nextUntil('li[data-groupdate]').length;
				//console.log('Owner Found For Move/Number Of Child',ownerId,length);
				var kk = $(parentGrup).nextUntil('.date-group-select');
				
				var nwKK = ''; 
				kk.each(function(index, element) {
					var newid = $(this).attr('data-id');
                    nwKK = nwKK +"<li class='dd-item dd3-item' data-id='"+ newid +"' mtg-owner='"+ ownerGropId +"'>"+$(this).html()+"</li>"
					$(this).empty().remove();
                });
				//console.log('KK:'+nwKK);
				$(nwKK).insertAfter(ownerId);
				setTimeout(mtg.deleteOwner, 3100);
			}
		}
	},
	// Your Item Card Button Color by date
	dateButtonColor : function(date,value){
		var dataDate = $(date).children('em').html();
		//var parentGrup =  $(date).children('em').html();
		if(value == "Reset"){
			$(date).children('em').html("Set Date");
			$(date).removeClass('btn-primary').addClass('btn-default');
			$('.date-select').removeClass('open').animate({height: "0"}, 800).fadeOut(0);
			$('.cardHolder').animate({height: "112"}, 800);
		}
		else{
			$(date).removeClass('btn-default').addClass('btn-primary');
			$(date).children('em').html(value);
			$('.date-select').removeClass('open').animate({height: "0"}, 800).fadeOut(0);
			$('.cardHolder').animate({height: "112"}, 800);
			//console.log('dateButtonColor',parentGrup,value);
		} 
	},
	// Your Item Card Button Color by time
	timeButtonColor : function(time,value){
		var dataTime = $(time).children('em').html();
		if(value == "Reset"){
			$(time).children('em').html("Set Time");
			$(time).removeClass('btn-primary').addClass('btn-default');
			$('.time-select').removeClass('open').animate({height: "0"}, 800).fadeOut(0);
			$('.cardHolder').animate({height: "112"}, 800);
		}
		else{
			$(time).removeClass('btn-default').addClass('btn-primary');
			$('.time-select').removeClass('open').animate({height: "0"}, 800).fadeOut(0);
			$('.cardHolder').animate({height: "112"}, 800);
			$(time).children('em').html(value);
		} 
	},
	// Your Item Card Time Input Focus
	timepicker: function(){
		var $this = $(timepickerInputId);
		var value = $this.val();
		var time = $this.parents('.cardHolder').find('.btn.time-set');
		mtg.timeButtonColor(time,value);
	},
	// Your Item Card Date Input Focus
	datepicker: function(){
		var $this = $(datepickerInputId);
		var value = $this.val();
		parentMove = $this.parents('li').attr('data-id');
		ownerMove = $this.parents('li').attr('mtg-owner');
		var date = $this.parents('.cardHolder').find('.btn.date-set');
		$this.find('input.generic-date-input').val(undefined);
		mtg.dateButtonColor(date,value);
		$('#ui-datepicker-div').fadeOut();
		setTimeout(mtg.calldelay, 1000);
	},
	datepickerGeneric: function(){
		var $this = $(datepickerInputId);
		var value = $this.val();
		parentMove = $this.parents('li').attr('data-id');
		ownerMove = $this.parents('li').attr('mtg-owner');
		var date = $this.parents('.cardHolder').find('.btn.date-set');
		$this.find('input.specific-date-input').val(undefined);
		mtg.dateButtonColor(date,value);
		$('#ui-datepicker-div').fadeOut();
		setTimeout(mtg.calldelayGeneric, 500);
	},
	// Your Item - Card Move Function Call
	calldelay:function(){
		var parent = parentMove;
		var owner = ownerMove;
		var parentId = "li[data-id="+parent+"]";
		var ownerId = "li[data-groupdate="+owner+"]";
		var parentDate = $(parentId).find('input.specific-date-input').val();
		var ownerDate = $(ownerId).find('input.specific-date-input').val();
		mtg.clickBut(parent,parentDate,owner,ownerDate);
	},
	calldelayGeneric:function(){
		var parent = parentMove;
		var owner = ownerMove;
		var parentId = "li[data-id="+parent+"]";
		var ownerId = "li[data-groupdate="+owner+"]";
		var parentDate = $(parentId).find('input.generic-date-input').val();
		var ownerDate = $(ownerId).find('input.generic-date-input').val();
		mtg.clickBut(parent,parentDate,owner,ownerDate);
	},
	// Your Item - Card Group Date Set
	datepickerGroup: function(){
		var $this = $(datepickerInputGroupId);
		var value = $this.val();
		$this.parents('li').find('input.generic-date-input').val(undefined);
		mtg.dateGroupCalendar(value);
		$('#ui-datepicker-div').fadeOut();
	},
	calenderOnclickDate : function(){
		$('a.ui-state-default').attr("onClick","setTimeout(mtg.datepicker, 500);");
	},
	calenderOnclickTime : function(){
		$('button.ui-datepicker-close').removeAttr('onClick').attr("onClick","mtg.timepicker()");
	},
	calenderOnclickGroup : function(){
		$('a.ui-state-default').attr("onClick","setTimeout(mtg.datepickerGroup, 500);");
	},
	// Your Item - Card Remove animation Classes
	removeClassUpDown : function(){
		$('#nestable2 > ol > li').removeClass('animated slideOutUp slideOutDown');
		$('.moving-up-arrow, .moving-down-arrow').fadeOut(0).removeClass('animated fadeOutUp fadeOutDown');
	},
	// Your Item - Card Move Function
	clickBut : function(parent,parentDate,owner,ownerDate) {
		console.log('clickBut function Inititated',parent,parentDate,owner,ownerDate);
		var parentId = "li[data-id="+parent+"]";
		var ownerId = "li[data-groupdate="+owner+"]";
		if(owner.valueOf() == 0){
		// if card have no date yet
			console.log('Owner Search Initiated for No Parrent',parent,parentId,parentDate);
			$(parentId).addClass('animated slideOutDown').css({'min-height':'0','z-index':'99999'});
			$('.moving-down-arrow').fadeIn(0).addClass('animated fadeOutDown');
			mtg.owenerSearch(parent,parentId,parentDate);
			setTimeout(mtg.removeClassUpDown, 3000);
		}
		else if(ownerDate == ""){
				console.log('clickBut function Inititated',parent,parentDate,owner,'undefined');
				$(parentId).addClass('animated slideOutDown').css({'min-height':'0','z-index':'99999'});
				$('.moving-down-arrow').fadeIn(0).addClass('animated fadeOutDown');
				mtg.owenerSearch(parent,parentId,parentDate);
				setTimeout(mtg.removeClassUpDown, 3000);
			}
		else{
			console.log('Owner Search Initiated for Existing Parrent',parent,parentId,parentDate);
			if( parentDate == "Day 1" || parentDate == "Day 2" || parentDate == "Day 3" || parentDate == "Day 4" || parentDate == "Day 5" || parentDate == "Day 6" || parentDate == "Day 7" || parentDate == "Monday" || parentDate == "Tuesday" || parentDate == "Wednesday" || parentDate == "Thursday" || parentDate == "Friday" || parentDate == "Saturday" || parentDate == "Sunday" ){
				
				 //if card have date
				if( parentDate == ownerDate ){
				//If card already belongs to the same date owner
					console.log('generic date are equal, No action Need for',parentDate,ownerDate);
				}
				else{
					console.log('Owner Search Initiated for Existing Parent, Generic',parent,parentId,parentDate);
					$(parentId).addClass('animated slideOutDown').css({'min-height':'0','z-index':'99999'});
					$('.moving-up-arrow').fadeIn(0).addClass('animated fadeOutUp');
					mtg.owenerSearch(parent,parentId,parentDate);
					setTimeout(mtg.removeClassUpDown, 3000);
				}
			}
			else{
				 //if card have date
				if( parentDate.valueOf() == ownerDate.valueOf() && ownerDate != undefined ){
				//If card already belongs to the same date owner
					console.log('Specific date are equal, No action Need for',parentDate,ownerDate);
				}
				else{
					console.log('Specific date are not equal ClickBut',parentDate,ownerId);
				//If card belongs to the another date owner
					if( new Date(parentDate).getTime() > new Date(ownerDate).getTime()  && ownerDate != undefined ){
						console.log('Owner Search Initiated greater for Existing Parent, Specific',parent,parentId,parentDate);
						$(parentId).addClass('animated slideOutDown').css({'min-height':'0','z-index':'99999'});
						$('.moving-down-arrow').fadeIn(0).addClass('animated fadeOutDown');
						mtg.owenerSearch(parent,parentId,parentDate);
						setTimeout(mtg.removeClassUpDown, 3000);
					}
					else if( new Date(parentDate).getTime() < new Date(ownerDate).getTime()  && ownerDate != undefined ){
						console.log('Owner Search Initiated Smaller for Existing Parent, Specific',parent,parentId,parentDate);
						$(parentId).addClass('animated slideOutUp').css({'min-height':'0','z-index':'99999'});
						$('.moving-up-arrow').fadeIn(0).addClass('animated fadeOutUp');
						mtg.owenerSearch(parent,parentId,parentDate);
						setTimeout(mtg.removeClassUpDown, 3000);
					}
				}
				
			}
		}
	},
	// Your Item - Card New Owner Search
	owenerSearch : function(parent,parentId,parentDate){
		var copyParent = $(parentId).html();
		var newParent = totalparents+1;
		totalparents = totalparents+1;
		var newparentId = "li[data-id="+newParent+"]";
		var newOwner = totalOwner+1;
		var newOwnerId = "li[data-groupdate="+newOwner+"]";
		parentReadyToDelete = parentId;
		var i, needOwner;
		//console.log('Owner Search Running for:',parentId,parentDate,totalOwner);
		if( parentDate == "Day 1" || parentDate == "Day 2" || parentDate == "Day 3" || parentDate == "Day 4" || parentDate == "Day 5" || parentDate == "Day 6" || parentDate == "Day 7" || parentDate == "Monday" || parentDate == "Tuesday" || parentDate == "Wednesday" || parentDate == "Thursday" || parentDate == "Friday" || parentDate == "Saturday" || parentDate == "Sunday" ){
			//console.log('Generic Date: Owner Search:',parentDate);
			for(i=1; i<=totalOwner; i++){
				// Check for owner Exist or NOT	
				var ownerId = "li[data-groupdate="+i+"]";
				var ownerDate = $(ownerId).find('input.generic-date-group-input').val();
				//console.log('Owner Searching for Generic value:',parentDate,ownerId,ownerDate);
				//console.log(parentDate,ownerDate);
				if( ownerDate != undefined){
					if( parentDate == ownerDate ){
						//console.log('generic Date: Owner Found',parentDate,ownerDate,ownerId);
						// Check for owner Found
						needOwner = 'No';
						// Your Item - Card Move into existing Owner
						var buttonClickDate = "mtg.cardDateSet('" + newParent + "')";
						var buttonClickTime = "mtg.cardTimeSet('" + newParent + "')";
						$("<li data-id="+newParent+" mtg-owner="+i+" class='dd-item dd3-item' >"+copyParent+"</li>").insertAfter("#nestable2 ol li[data-groupdate="+i+"]");
						$(newparentId).find('button.date-set').attr('onClick',buttonClickDate);
						$(newparentId).find('button.time-set').attr('onClick',buttonClickTime);
						$(newparentId).find('section.date-select').attr('data-carddateedit',newParent);
						$(newparentId).find('section.time-select').attr('data-cardtimeedit',newParent);
						$(newOwnerId).find('input.specific-date-input').val(parentDate).removeAttr('id');
						$(newparentId).find('.specific-date-input').addClass('usedatepicker').removeClass('hasDatepicker').removeAttr('id');
						$(newparentId).find('.specific-time-input').addClass('usetimepicker').removeClass('hasDatepicker').removeAttr('id');
					}
				}
			}
		}
		else{
			//console.log('Specific Date: Owner Search:',parentDate);
			for(i=1; i<=totalOwner; i++){
				// Check for owner Exist or NOT	
				var ownerId = "li[data-groupdate="+i+"]";
				var ownerDate = $(ownerId).find('input.specific-date-input').val();
				//console.log('Owner Searching for Specific value:',parentDate,ownerId,ownerDate);
				if( ownerDate != undefined){
					if( parentDate.valueOf() == ownerDate.valueOf() ){
						//console.log('Specific Date: Owner Found:',parentDate,ownerDate,ownerId);
						// Check for owner Found
						needOwner = 'No';
						// Your Item - Card Move into existing Owner
						var buttonClickDate = "mtg.cardDateSet('" + newParent + "')";
						var buttonClickTime = "mtg.cardTimeSet('" + newParent + "')";
						$("<li data-id="+newParent+" mtg-owner="+i+" class='dd-item dd3-item' >"+copyParent+"</li>").insertAfter("#nestable2 ol li[data-groupdate="+i+"]");
						$(newparentId).find('button.date-set').attr('onClick',buttonClickDate);
						$(newparentId).find('button.time-set').attr('onClick',buttonClickTime);
						$(newparentId).find('section.date-select').attr('data-carddateedit',newParent);
						$(newparentId).find('section.time-select').attr('data-cardtimeedit',newParent);
						$(newOwnerId).find('input.specific-date-input').val(parentDate).removeAttr('id');
						$(newparentId).find('.specific-date-input').addClass('usedatepicker').removeClass('hasDatepicker').removeAttr('id');
						$(newparentId).find('.specific-time-input').addClass('usetimepicker').removeClass('hasDatepicker').removeAttr('id');
					}	
				}
			}
		}
		setTimeout(mtg.deleteParent, 500);
		setTimeout(mtg.owenerCreate(parentId,parentDate,newParent,newparentId,newOwner,newOwnerId,needOwner), 2000);
	},
	// Your Item - Card : Create New Owner
	owenerCreate : function(parentId,parentDate,newParent,newparentId,newOwner,newOwnerId,needOwner){
		var text = needOwner;
		if( needOwner == 'No'){
			//Owner is already existing
			//console.log('New Owner Create Not Initiated',parentDate,newOwner,needOwner);
		}
		else{
			//Create New Owner
			//console.log('New Owner Create Initiated',parentId,parentDate,newOwner);
			var currentOwner = $('#mtgEditdate').find('li[data-groupdate]').length;
			totalOwner = totalOwner+1;
			var copyOwner = $('#nestableSample').html();
			var copyParent = $(parentId).html();
			var buttonClickDate = "mtg.cardDateSet('" + newParent + "')";
			var buttonClickTime = "mtg.cardTimeSet('" + newParent + "')";
			var newOwnerIdhref = "javascript:mtg.cardGroupDateSet('" + newOwner + "','" + newParent + "')"
			if( parentDate == "Day 1" || parentDate == "Day 2" || parentDate == "Day 3" || parentDate == "Day 4" || parentDate == "Day 5" || parentDate == "Day 6" || parentDate == "Day 7" || parentDate == "Monday" || parentDate == "Tuesday" || parentDate == "Wednesday" || parentDate == "Thursday" || parentDate == "Friday" || parentDate == "Saturday" || parentDate == "Sunday" ){
				if(currentOwner == 0){
					$("<li data-groupdate="+newOwner+" class='date-group-select' >"+copyOwner+"</li>").insertAfter("#nestable2 ol > li:last-child");
				}
				else{
					$("<li data-groupdate="+newOwner+" class='date-group-select' >"+copyOwner+"</li>").insertBefore("#nestable2 ol li[data-groupdate]:eq(0)");
				}
				$(newOwnerId).find('a.date-group').html(parentDate);
				$(newOwnerId).find('a.date-group').attr('href',newOwnerIdhref);
				$(newOwnerId).children('a.date-group').html(parentDate);
				$(newOwnerId).find('input.generic-date-group-input').val(parentDate).removeAttr('id');
				$(newOwnerId).find('input.specific-date-input').val("");
				//console.log('New Owner Creating For Generic',newOwner,newOwnerId,parentDate);
			}
			else{
				if(currentOwner == 0){
					$("<li data-groupdate="+newOwner+" class='date-group-select' >"+copyOwner+"</li>").insertAfter("#nestable2 ol > li:last-child");
				}
				else{
					$("<li data-groupdate="+newOwner+" class='date-group-select' >"+copyOwner+"</li>").insertBefore("#nestable2 ol li[data-groupdate]:eq(0)");
				}
				$(newOwnerId).find('a.date-group').html(parentDate);
				$(newOwnerId).find('a.date-group').attr('href',newOwnerIdhref);
				$(newOwnerId).children('a.date-group').html(parentDate);
				$(newOwnerId).find('input.specific-date-input').val(parentDate).removeAttr('id');
				$(newOwnerId).find('input.generic-date-group-input').val("");
				mtg.fullDateView(parentDate,newOwnerId);
				//console.log('New Owner Creating For Specific',newOwner,newOwnerId,parentDate);
			}
			$(newOwnerId).find('.specific-date-input').addClass('usedatepicker').removeClass('hasDatepicker').removeAttr('id');
			$(newOwnerId).find('.specific-time-input').addClass('usetimepicker').removeClass('hasDatepicker').removeAttr('id');
			// Your Item - Card Move into New Created Owner
			//console.log('Parent Copy Creating',newParent,parentDate,newparentId,newOwnerId); 
			$("<li data-id="+newParent+" mtg-owner="+newOwner+" class='dd-item dd3-item' >"+copyParent+"</li>").insertAfter(newOwnerId);
			$(newparentId).find('button.date-set').attr('onClick',buttonClickDate);
			$(newparentId).find('button.time-set').attr('onClick',buttonClickTime);
			$(newparentId).find('section.date-select').attr('data-carddateedit',newParent);
			$(newparentId).find('section.time-select').attr('data-cardtimeedit',newParent);
			$(newparentId).find('.specific-date-input').addClass('usedatepicker').removeClass('hasDatepicker').removeAttr('id');
			$(newparentId).find('.specific-time-input').addClass('usetimepicker').removeClass('hasDatepicker').removeAttr('id');
		}
	},
	removeLi : function(){
		var parentId = $(datepickerInputId).parents('li[data-id]');
		//console.log('Moving the Parent Top Side if Value=Reset:',parentId);
		var copyParent = $(parentId).html();
		var newParent = totalparents+1;
		totalparents = totalparents+1;
		var newparentId = "li[data-id="+newParent+"]";
		var buttonClickDate = "mtg.cardDateSet('" + newParent + "')";
		var buttonClickTime = "mtg.cardTimeSet('" + newParent + "')";
		$("<li data-id="+newParent+" mtg-owner='0' class='dd-item dd3-item' >"+copyParent+"</li>").insertBefore("#nestable2 ol li:first");
		$(newparentId).find('button.date-set').attr('onClick',buttonClickDate);
		$(newparentId).find('button.time-set').attr('onClick',buttonClickTime);
		$(newparentId).find('section.date-select').attr('data-carddateedit',newParent);
		$(newparentId).find('section.time-select').attr('data-cardtimeedit',newParent);
		$(newparentId).find('.specific-date-input').removeClass('hasDatepicker usedatepicker').addClass('usedatepicker').removeAttr('id');
		$(newparentId).find('.specific-time-input').removeClass('hasDatepicker usetimepicker').addClass('usetimepicker').removeAttr('id');
		$(parentId).addClass('animated slideOutUp').css({'min-height':'0','z-index':'99999'});
		$('.moving-up-arrow').fadeIn(0).addClass('animated fadeOutUp');
		setTimeout(mtg.removeClassUpDown, 2000);
		setTimeout(mtg.deleteOwner, 3100);
		$(parentId).animate({height: "0"}, 1000).empty().remove();
	},
	// Your Item - Card Moved and Deleted
	deleteParent : function(){
		//console.log('Removing the Parent after Succefuul Move:',parentReadyToDelete);
		$(parentReadyToDelete).animate({height: "0"}, 1000).empty().remove();
		setTimeout(mtg.deleteOwner, 3100);
	},
	deleteOwner : function(){
		//console.log('Removing the Owner Initiated');
		$(".usetimepicker").timepicker(); // or 
        $(".usetimepicker").timepicker("refresh"); 
		$(".usedatepicker").datepicker(); // or 
        $(".usedatepicker").datepicker("refresh"); 
		$('.dd3-content.cardHolder').removeClass('openDate openTime').removeAttr('style');
		$('.date-select.col-xs-12').removeClass('open').removeAttr('style');
		$('.time-select.col-xs-12').removeClass('open').removeAttr('style');
		//$('.specific-time-input').timepicker({timeFormat: "hh:mm tt"}); //,controlType: 'select'
		for( var i = 1; i<=totalOwner; i++){
			var owe = "li[data-groupdate='"+i+"']"
			var oweDateSpe = $(owe).find('input.specific-date-input').val();
			var oweDateGen = $(owe).find('input.generic-date-group-input').val();
			//console.log(i,'-Owner Details: id=',owe,'Spe:',oweDateSpe,'Gen:',oweDateGen);
			var thisOwner = "li[data-groupdate='"+ i +"']";
			var ownerGap = $(thisOwner).nextUntil('li[data-groupdate]').length;
			if( ownerGap == 0 ){
				$(thisOwner).fadeOut(333).empty().remove();
				//console.log('Removing the Owner:',thisOwner);
			}
		}
	},
	deleteOwnerForDrag : function(){
		//console.log('Removing the Owner Initiated');
		$('li.animated.flipOutX').remove();
		for( var i = 1; i<=totalOwner; i++){
			var owe = "li[data-groupdate='"+i+"']"
			var oweDateSpe = $(owe).find('input.specific-date-input').val();
			var oweDateGen = $(owe).find('input.generic-date-group-input').val();
			//console.log(i,'-Owner Details: id=',owe,'Spe:',oweDateSpe,'Gen:',oweDateGen);
			var thisOwner = "li[data-groupdate='"+ i +"']";
			var ownerGap = $(thisOwner).nextUntil('li[data-groupdate]').length;
			if( ownerGap == 0 ){
				$(thisOwner).fadeOut(333).empty().remove();
				//console.log('Removing the Owner:',thisOwner);
			}
		}
	},
	dateSetcardDelete  : function(){
		setTimeout(mtg.deleteOwnerForDrag, 3100);
	},
	cardLocationCheck : function(){
		var totalLiToCheck = $('li[data-id]').length;
		var i,needToCheck;
		//console.log(totalOwner);
		for( var i = 1; i<=totalOwner; i++){
			var targetId = "li[data-groupdate='" + i + "']"
			var targetInputValueSpe = $(targetId).find('input.specific-date-input').val();
			var targetInputValueGen = $(targetId).find('input.generic-date-group-input').val();
			var needToCheckReset = $('#mtgEditdate ol.dd-list li.dd-item:first-child').nextUntil('.date-group-select');	
			needToCheckReset.each(function(index, element) {
				$(this).attr('mtg-owner','0').find('input.specific-date-input').val("");
				$(this).find('input.generic-date-input').val("Set Date");
				$(this).find('.btn.date-set').removeClass('btn-default btn-primary').addClass('btn-default').children('em').html("Set Date");
			});
			if(targetInputValueSpe != undefined && targetInputValueSpe != ""){
				//console.log(targetId,'has Specific Date:',targetInputValueSpe);
				var needToCheckSpe = $(targetId).nextUntil('.date-group-select');	
				needToCheckSpe.each(function(index, element) {
					$(this).attr('mtg-owner',i).find('input.specific-date-input').val(targetInputValueSpe);
					$(this).find('input.generic-date-input').val("");
					$(this).find('.btn.date-set').removeClass('btn-default btn-primary').addClass('btn-primary').children('em').html(targetInputValueSpe);
				});	
			}
			else if(targetInputValueGen != undefined && targetInputValueGen != ""){
				//console.log(targetId,'has Generic Date:',targetInputValueGen);
				var needToCheckGen = $(targetId).nextUntil('.date-group-select');	
				needToCheckGen.each(function(index, element) {
					$(this).attr('mtg-owner',i).find('input.specific-date-input').val("");
					$(this).find('input.generic-date-input').val(targetInputValueGen);
					$(this).find('.btn.date-set').removeClass('btn-default btn-primary').addClass('btn-primary').children('em').html(targetInputValueGen);
				});	
			}
		}
	},
	animationFirst : function(){
		target= "#mtgEditdate li.dd-item:first";
		targetChildStart="input.itinerary-title";
		textStart="Itinerary Title";
		targetChild1="button.btn.date-set";
		text1="Manually edit your card Date";
		targetChild2="button.btn.time-set";
		text2="Set your card time with Specific and Generic";
		targetChild3="button.btn.card-delete";
		text3="Delete Itinerary in one click";
		targetChild4="div.dd-handle";
		text4="Drag and Drop your card to asign date";
		var animationImg = $('.mtg-first-time-animation').fadeIn(333);
		var targetPosition = $(targetChildStart).offset();
		var marginLeftFor = 44 + targetPosition.left;
		var marginTopFor = 10 + targetPosition.top;
		var script = "javascript:mtg.targetChild1('"+ target +"','"+ targetChild1 +"','"+ text1 +"','"+ targetChild2 +"','"+ text2 +"','"+ targetChild3 +"','"+ text3 +"','"+ targetChild4 +"','"+ text4+"')";
		$(animationImg).find('.mtg-animation-show').animate({marginLeft:marginLeftFor , marginTop:marginTopFor });
		$(animationImg).find('.mtg-animation-ok span h6').html(textStart);
		$(animationImg).find('.mtg-animation-ok a').css('visibility','visible');
		$(animationImg).find('.mtg-animation-ok a.mtgNextTour').html("Next <i class='fa fa-chevron-right'></i>").fadeIn(333).attr('href',script);
	},
	targetChild1 : function(target,targetChild1,text1,targetChild2,text2,targetChild3,text3,targetChild4,text4){
		//console.log(target,targetChild1,text1,targetChild2,text2,targetChild3,text3,targetChild4,text4);
		var targetPosition = $(target).find(targetChild1).offset();
		var marginLeftFor = 44 + targetPosition.left;
		var marginTopFor = 10 + targetPosition.top;
		var script = "javascript:mtg.targetChild2('"+ target +"','"+ targetChild2 +"','"+ text2 +"','"+  targetChild3 +"','"+  text3 +"','"+ targetChild4 +"','"+ text4 + "')";
		$('.mtg-first-time-animation').find('.mtg-animation-show').animate({marginLeft:marginLeftFor , marginTop:marginTopFor });
		$('.mtg-first-time-animation').find('.mtg-animation-ok span h6').html(text1);
		$('.mtg-first-time-animation').find('.mtg-animation-ok a.mtgNextTour').attr('href',script);
	},
	targetChild2 : function(target,targetChild2,text2,targetChild3,text3,targetChild4,text4){
		//console.log(target,targetChild);
		var targetPosition = $(target).find(targetChild2).offset();
		var marginLeftFor = 44 + targetPosition.left;
		var marginTopFor = 10 + targetPosition.top;
		var script = "javascript:mtg.targetChild3('" + target +"','"+ targetChild3 +"','"+ text3 +"','"+ targetChild4 +"','"+text4 + "')";
		$('.mtg-first-time-animation').find('.mtg-animation-show').animate({marginLeft:marginLeftFor , marginTop:marginTopFor });
		$('.mtg-first-time-animation').find('.mtg-animation-ok span h6').html(text2);
		$('.mtg-first-time-animation').find('.mtg-animation-ok a.mtgNextTour').attr('href',script);
	},
	targetChild3 : function(target,targetChild3,text3,targetChild4,text4){
		//console.log(target,targetChild);
		var targetPosition = $(target).find(targetChild3).offset();
		var marginLeftFor = 15 + targetPosition.left;
		var marginTopFor = 10 + targetPosition.top;
		var script = "javascript:mtg.targetChild4('"+ target +"','"+ targetChild4 +"','"+ text4 + "')"
		$('.mtg-first-time-animation').find('.mtg-animation-show').animate({marginLeft:marginLeftFor , marginTop:marginTopFor });
		$('.mtg-first-time-animation').find('.mtg-animation-ok span h6').html(text3);
		$('.mtg-first-time-animation').find('.mtg-animation-ok a.mtgNextTour').attr('href',script);
	},
	targetChild4 : function(target,targetChild4,text4){
		//console.log(targetChild4,text4);
		var targetPosition = $(target).find(targetChild4).offset();
		var targetPositionwidth = $(target).find(targetChild4).width();
		$(target).find(targetChild4).addClass('before-visible');
		var marginLeftFor = targetPosition.left + targetPositionwidth - 20 ;
		var marginTopFor = 20 + targetPosition.top;
		var script = "javascript:mtg.targetChild5('"+ target +"','"+ targetChild4 + "')"
		$('.mtg-first-time-animation').find('.mtg-animation-show').animate({marginLeft:marginLeftFor , marginTop:marginTopFor });
		$('.mtg-first-time-animation').find('.mtg-animation-ok span h6').html(text4);
		$('.mtg-first-time-animation').find('.mtg-animation-ok a.mtgNextTour').html('OK').attr('href',script);
	},
	targetChild5 : function(target,targetChild4){
		$('.mtg-first-time-animation').find('.mtg-animation-ok a').css('visibility','hidden');
		$('.mtg-first-time-animation').find('.mtg-animation-ok span h6').html("You are ready");
		$(target).find(targetChild4).removeClass('before-visible');
		$('.mtg-first-time-animation').show(0).delay(1000).fadeOut(1000);
	},
	endtour : function(){
		$('.mtg-first-time-animation').find('.mtg-animation-ok a').css('visibility','hidden');
		$(target).find(targetChild4).removeClass('before-visible');
		$('.mtg-first-time-animation').fadeOut(1000);
	},
	animationFirstLocalStorage : function(){
		if (typeof(Storage) != "undefined") {
			localStorage.setItem("animationFirstLocalStorageValue", 1);
			var outpot = localStorage.getItem("animationFirstLocalStorageValue");
		} else {
			document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
		}
	} 	
}
$(window).load(function(e) {
	totalparents = $('ol li[data-id]').length;
	totalOwner = $('#nestable2 ol li[data-groupdate]').length; 
	$('.timeSet').delay(444).removeClass('timepicker hasDatepicker');
	$('.specific-time-input').timepicker({timeFormat: "hh:mm tt"}); //,controlType: 'select'
	$('.specific-date-input').datepicker();
	//mtg.calenderAdd();
	//$('').datepicker();   
});
//Short Menu on header
$(document).on('click','.selectFill > ul li a',function(){
	var $this = $(this);
	var $value = $this.text();
	$this.parents('.selectFill').find('input').val($value).attr('readonly','true');
});
// Set date
$('.timeSet').on('blur', function(){
	$(this).attr('disabled','true').removeClass('timepicker hasDatepicker');
});
//Short Menu on header
$(document).on('click','.setFill > .generic-time-input ~ ul li a',function(){
	var $this = $(this);
	var value = $this.text();
	var time = $(this).parents('.cardHolder').find('.btn.time-set');
	$this.parents('.setFill').find('input').val(value).attr('readonly','true');
	mtg.timeButtonColor(time,value);
});
$(document).on('click','.setFill > .generic-date-input ~ ul li a',function(){
	var $this = $(this);
	var value = $this.text();
	var date = $(this).parents('.cardHolder').find('.btn.date-set');
	var parentGrup =  $(date).children('em').html();
	var target = $(this).parents('.input.setFill').find('.generic-date-input').attr('id');
	datepickerInputId = "#"+target;
	$this.parents('li').find('input.specific-date-input').val(undefined);
	$this.parents('.setFill').find('input.generic-date-input').val(value).attr('readonly','true');
	$this.parents('.setFill').prev('.form-group').find('input.specific-date-input').val(value);
	mtg.dateButtonColor(date,value);
	//mtg.fullDateView(value,parentGrup);
	if(value == "Reset"){
		//Move to the ol as a first child
		console.log('Move to the ol as a first child');
		setTimeout(mtg.removeLi, 500);
	}
	else{
		setTimeout(mtg.datepickerGeneric, 500);
	} 
});
$(document).on('click','.setFill > .generic-date-group-input ~ ul li a',function(){
	var $this = $(this);
	var value = $this.text();
	$this.parents('li').find('input.specific-date-input').val(undefined);
	$this.parents('.setFill').find('input.generic-date-group-input').val(value).attr('readonly','true');
	var groupValue = $this.parents('.setFill').find('input.generic-date-group-input').val(value);
	mtg.dateGroup(value);
});
$(document).on('focus','.cardHolder .form-control.specific-time-input',function(){
	var $this = $(this);
	var target = $this.attr('id');
	timepickerInputId = "#"+target;
	setTimeout(mtg.calenderOnclickTime, 300);
});
$(document).on('focus','.cardHolder .form-control.specific-date-input',function(){
	var $this = $(this);
	var target = $this.attr('id');
	datepickerInputId = "#"+target;
	setTimeout(mtg.calenderOnclickDate, 300);
});
$(document).on('focus','.date-group-select .form-control.specific-date-input',function(){
	var $this = $(this);
	var target = $this.attr('id');
	datepickerInputGroupId = "#"+target;
	setTimeout(mtg.calenderOnclickGroup, 300);
});
$(document).on('click','.date-group-select .form-control.specific-date-input',function(){
	var $this = $(this);
	var target = $this.attr('id');
	datepickerInputGroupId = "#"+target;
	setTimeout(mtg.calenderOnclickGroup, 300);
});
$(document).on('change','.dd', function() {
	setTimeout(mtg.cardSetToReset, 2000);
	setTimeout(mtg.cardLocationCheck, 2100);
	setTimeout(mtg.deleteOwnerForDrag, 3100);
});

$(document).on('click','li .card-delete',function(){
	var target = $(this).parents('li[data-id]');
	$(target).show(0).addClass('animated flipOutX').delay(1000).slideUp(333);
	mtg.dateSetcardDelete();
});
