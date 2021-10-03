$(document).ready(function(){

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 340 ) {
            
            $('.test_btn_1').css({"display":"block"});
            }
        else if ($(window).scrollTop() >= 600 ) {
            $('.covid_stats_map_div').css({"top":"10px","position": "fixed"});
            
        }
        else {
            $('.covid_stats_map_div').css({"position": "relative"});
            $('.test_btn_1').css({"display":"none"});
        }
    });



    
});