document.addEventListener('DOMContentLoaded', function() {


    var openFAQ = document.querySelectorAll('.ques-click');
    var allCallIcons = document.querySelectorAll(".icon_showhide");
    var allAsnwerFaq = document.querySelectorAll(".asnwerfaq");


    // Add a click event listener to it
    openFAQ.forEach(function(faq_quest) {
        
        faq_quest.addEventListener('click', () => {

            var call_icons = faq_quest.querySelector(".icon_showhide");

            var answerFaq = faq_quest.querySelector(".asnwerfaq");

            console.log(answerFaq);

            if (call_icons.src.endsWith('icon-plus.svg')) {
                allCallIcons.forEach(icon => {
                    icon.src = '/assets/images/icon-plus.svg';
                });
                call_icons.src = '/assets/images/icon-minus.svg';
            } 

            if(answerFaq.classList.contains("hideAnswer")){
                allAsnwerFaq.forEach(answer => {
                    answer.classList.replace("showAnswer", "hideAnswer")
                });
                answerFaq.classList.replace("hideAnswer", "showAnswer")
            }
            



        })

    });


});