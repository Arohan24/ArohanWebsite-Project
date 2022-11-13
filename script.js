const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");
const a = document.getElementsByClassName("heart")
if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
};
function glow() {
    let light = document.getElementsByClassName('heart');
    // if(light.classList==="fa-regular"){
    //     light.classList.remove('fa-regular');
    //     light.classList.add('fa-solid');
    // }
    // else{
    //     light.classList.remove('fa-solid');
    //     light.classList.add('fa-regular');
    // let flag=2;

    // console.log("clicked");
    // }
}
$(document).ready(function () {
    $(document).on('click','i.heart',function(){
        // console.log("clicked...")
        // console.log($(this).css("color"))
        if($(this).css("color")!="rgb(255, 255, 255)") //if color is not white
            $(this).css("color","white")
        else
            $(this).css("color","red")
    });
    $("#loginbtn").click(() => {
        $(".logform").slideToggle(1000);
    })
    $("#logbutton").click(() => {
        $("#login").show();
        $("#signup").hide();
    })
    $("#signbutton").click(() => {
        $("#login").hide();
        $("#signup").show();
    })
});
