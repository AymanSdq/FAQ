document.addEventListener('DOMContentLoaded', function() {


    var openFAQ = document.querySelectorAll('.ques-click');
    var allCallIcons = document.querySelectorAll(".icon_showhide");
    var allAsnwerFaq = document.querySelectorAll(".asnwerfaq");


    // Add a click event listener to it
    openFAQ.forEach(function(faq_quest) {
        
        faq_quest.addEventListener('click', () => {

            var call_icons = faq_quest.querySelector(".icon_showhide");

            var answerFaq = faq_quest.querySelector(".asnwerfaq");

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

        document.addEventListener('keydown', function(event) {
            // Check if the pressed key is "1" (keyCode 49)
            if (event.keyCode === 49) {
                var firstQuestion = document.getElementById("first-question");
                firstQuestion.click();
            }else if(event.keyCode === 50){
                var secondQuestion = document.getElementById("second-question");
                secondQuestion.click();
            }else if(event.keyCode === 51){
                var thirdQuestion = document.getElementById("third-question");
                thirdQuestion.click();
            }else if(event.keyCode === 52){
                var fourthQuestion = document.getElementById("fourth-question");
                fourthQuestion.click();
            }
        });


    });



    
    



});