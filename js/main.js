$(document).ready(function () {

        function changeDot() {
            var scrollTop = $('html, body').scrollTop(),
                section = $('.main__section');
    
            section.each(function (i, elem) {
                var that = $(elem),
                    sectionScroll = that.offset().top,
                    sectionHeigth = that.outerHeight(),
                    distance = sectionScroll - scrollTop,
                    procent = (-distance * 100) / (sectionHeigth);
                
                if (procent >= -10 && procent <= 90) {
                   
                    var dots = $('.dot');
                    var dotsEq = dots.eq(i) 
                    
                    dotsEq.prev().removeClass('active');
                    dotsEq.next().removeClass('active');
                    dotsEq.addClass('active');
                }
            }) //.each
        } //.fn

    $(document).on("scroll", changeDot)

});
