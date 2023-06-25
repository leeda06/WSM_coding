function change1() {
    $('#scene2').show();
    $('#scene1').hide();
}

$(document).ready(function() {
    $("#eyes > .wear-button").click(function() {
        var imgFilename = $(this).find("img").attr("src").split('/').pop();
        var newImgSrc = "../file/img/character/eyes/" + imgFilename;
        $(".chara_eye").attr("src", newImgSrc);
    });

    $("#head > .wear-button").click(function() {
        var imgFilename = $(this).find("img").attr("src").split('/').pop();
        var newImgSrc = "../file/img/character/head/" + imgFilename;
        $(".chara_hair").attr("src", newImgSrc);
    });
    
    $("#cloth > .wear-button").click(function() {
        var imgFilename = $(this).find("img").attr("src").split('/').pop();
        var newImgSrc = "../file/img/character/cloth/" + imgFilename;
        $(".chara_cloth").attr("src", newImgSrc);
    });
    
    $("#shoose > .wear-button").click(function() {
        var imgFilename = $(this).find("img").attr("src").split('/').pop();
        var newImgSrc = "../file/img/character/shoose/" + imgFilename;
        $(".chara_shoose").attr("src", newImgSrc);
    });




    // var paths = [
    //     "student.html",
    //     "cute.html",
    //     "sexy.html",
    //     "men.html",
    //     "clean.html"
    //   ];

    // $(".change2").click(function() {
    //     $('#scene3').show();
    //     $('#scene2').hide();
    //     setTimeout(function() {
    //         var randomIndex = Math.floor(Math.random() * paths.length);
    //         var randomPath = paths[randomIndex];
      
    //         location.href = randomPath;
    //     }, 2000);
    // });



    $(".change2").click(function() {
        $('#scene3').show();
        $('#scene2').hide();
        setTimeout(function() {
            location.href = '../file/student.html';
        }, 2000);
    });

    $(".icon-list").eq(0).show();

    $(".list-button").click(function() {
        var index = $(this).index();
        $(".icon-list").hide();
        $(".icon-list").eq(index).show();
    });
});






