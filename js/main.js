$(function(){
    $('#jihun').fullpage({
        anchors : ['page1', 'page2','page3', 'page4', 'page5', 'page6', 'page7'],
        navigation : true,
        // navigationTooltips : ['메뉴1','메뉴2','메뉴3','메뉴4','푸터'],
        navigationPosition : 'right',
        responsiveWidth : 1000,
        afterLoad : function(anchorslink,index){
            console.log(index)
            if(index==1){
                $('#scrollToTopBtn').hide()
            }
           else {
                $('#scrollToTopBtn').show()
            }
        }
    })
})

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("scrollToTopBtn");

    function checkScroll() {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (scrollY > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }

    window.addEventListener("scroll", checkScroll);
    window.addEventListener("load", checkScroll); // 로딩 직후에도 체크

    btn.addEventListener("click", function () {
        // 클릭 시 색상 변경
        btn.style.backgroundColor = "#f52A60";

        // 부드럽게 스크롤
        window.scrollTo({ top: 0, behavior: "smooth" });

        // 약 800ms 후 색상 복원
        setTimeout(function () {
            btn.style.backgroundColor = "#222";
        }, 800); // 스크롤 속도에 따라 조절 가능
    });
});