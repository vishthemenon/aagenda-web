
$(function(){

    var triggered = false;

    $(window).on('scroll touchmove', function() {
            var scroll_pos = window.pageYOffset + window.innerHeight;

            if (window.innerWidth < 800) {
                var slack_scroll_pos = 730;
            }
            else {
                var slack_scroll_pos = 810;
            }

            if(scroll_pos > slack_scroll_pos && triggered == false ) {
            // if(triggered == false ) {
                $(document).ready().delay(200)
                .queue(function(){
                    $('#boss_type').show();
                    $(this).dequeue();
                }).delay(500)
                .queue(function(){
                    $('#boss_type').hide();
                    $('#boss-msg').show();
                    $(this).dequeue();
                }).delay(800)
                .queue(function(){
                    typeMsges();
                    $(this).dequeue();
                });
                triggered = true;   // to make sure the above action triggers only once
            }
    });

})

var msges = [];
var msges_raw = [
    {
        pic_url: "'./images/logo.png'",
        sender_name: "aagenda",
        sent_time: "2.35PM",
        msg_text: "1. Buy more biscuit [<span style='color: #1673db;'>@intern</span>]<br><i>2. Build a robot army</i><br>3. Make a Todo app for slack [<span style='color: #1673db;'>@intern</span>]"
    },
    {
        pic_url: "'./images/logo.png'",
        sender_name: "aagenda",
        sent_time: "2.36PM",
        msg_text: "<i>1. Buy more biscuit [<span style='color: #1673db;'>@intern</span>]</i><br><i>2. Build a robot army</i><br>3. Make a Todo app for slack [<span style='color: #1673db;'>@intern</span>]"
    },
    {
        pic_url: "'./images/logo.png'",
        sender_name: "aagenda",
        sent_time: "2.36PM",
        msg_text: "'Make Todo app for slack' assigned to <span style='color: #1673db;'>@intern2</span> by <span style='color: #1673db;'>@intern</span>"
    },
    {
        pic_url: "'./images/jethro.jpg'",
        sender_name: "intern",
        sent_time: "2.36PM",
        msg_text: "<span style='color: #1673db;'>@intern2</span>, Sorry Bro."
    },
    {
        pic_url: "'./images/logo.png'",
        sender_name: "aagenda",
        sent_time: "2.36PM",
        msg_text: "Nothing left on your agenda :)"
    }
]
var generateMsges = function(msges_raw){
$.each(msges_raw, function(index, msg) {
    msges.push("<li class='slack-msg';'><img class='slack-msg-avatar' src="+msg.pic_url+" alt=''><div class='slack-msg-text'><p class='title'>"+msg.sender_name+"<i>"+msg.sent_time+"</i></p><p class='msg'>"+msg.msg_text+"</p></div></li>");
});

};

var typeMsges = function(){
    var i = -1;
    generateMsges(msges_raw);
    $("#slack-comd>span").typed({
        strings: ["<i>/aa </i><i>list</i>",
        "<i>/aa </i><i>done</i> 1",
        "<i>/aa </i><i>arrow</i> 3 [<span style='color: #1673db;'>@intern2</span>]",
        "<span style='color: #1673db;'>@intern2</span>, Sorry Bro.",
        "<i>/aa </i>me<i></i>",
        ""],
        typeSpeed: 10,
        onStringTyped: function() {
                setTimeout(function(){
                    $('#slack-msg-list').prepend(msges[i])
                }, 500);``
                i++;
            }
        });
    };
