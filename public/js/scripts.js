$(document).ready(function(){
  var cloud1 = $("#2")
  var cloud2 = $("#3")
  var cloud3 = $("#4")
  var cloud4 = $("#5")
  var cloud5 = $("#6")
  var cloud6 = $("#7")
  var clouds = $(".cloud")

  function moveCloud(cloud){

    cloud.animate({ "left": "+=2500px" }, cloud.attr('id') * 8100, function(){
        cloud.removeAttr('style')
        moveCloud(cloud)
      });

    cloud.animate({ "top": "-=50px" }, {
        queue: false,
        duration: 4000
      });

    window.setTimeout(function() {
      cloud.animate({ "top": "+=100px" }, {
          queue: false,
          duration: 5000
        });
    }, 4000);

    window.setTimeout(function() {
      cloud.animate({ "top": "-=100px" }, {
          queue: false,
          duration: 5000
        });
    }, 7000);
  }
    moveCloud(cloud1);
    moveCloud(cloud2);
    moveCloud(cloud3);
    moveCloud(cloud4);
    moveCloud(cloud5);
    // moveCloud(cloud6);
});

$('#2 img').hover(function () {
        this.src = 'https://s3-us-west-2.amazonaws.com/gabe-random/dlp_up_side.png';
        $('.desc').children().hide();
        $('.desc').css('display', 'block')
        $('#dlpcontent').css('display', 'block');
        $('#hidelink').css('display', 'block');
    }, function () {
        this.src = 'https://s3-us-west-2.amazonaws.com/gabe-random/1-cloud_upside.png';
    });


$('#4 img').hover(function () {
        this.src = 'https://s3-us-west-2.amazonaws.com/gabe-random/smitten4.png';
        $('.desc').children().hide();
        $('.desc').css('display', 'block')
        $('#smittencontent').css('display', 'block');
        $('#hidelink').css('display', 'block');
    }, function () {
        this.src = 'https://s3-us-west-2.amazonaws.com/gabe-random/1-cloud_upside.png';
    });

$('#6 img').hover(function () {
        this.src = 'https://s3-us-west-2.amazonaws.com/gabe-random/linked_up_side.png';
    }, function () {
        this.src = 'https://s3-us-west-2.amazonaws.com/gabe-random/1-cloud_upside.png';
    });

$('#3 img').hover(function () {
        console.log(this)
        this.src = 'https://s3-us-west-2.amazonaws.com/gabe-random/github_right_side.png';
    }, function () {
        this.src = 'http://i287.photobucket.com/albums/ll124/falk826/Secert%20of%20The%20Black%20Unicorn/1-cloud.png';
    });

$('#5 img').hover(function () {
        this.src = 'https://s3-us-west-2.amazonaws.com/gabe-random/twitter_right_side.png';
    }, function () {
        this.src = 'http://i287.photobucket.com/albums/ll124/falk826/Secert%20of%20The%20Black%20Unicorn/1-cloud.png';
    });

$("#linkedinicon").hover(function () {
        $('#6 img')[0].src = 'https://s3-us-west-2.amazonaws.com/gabe-random/linked_up_side.png';
    }, function () {
        $('#6 img')[0].src = 'https://s3-us-west-2.amazonaws.com/gabe-random/1-cloud_upside.png';
    });

$("#githubicon").hover(function () {
        $('#3 img')[0].src = 'https://s3-us-west-2.amazonaws.com/gabe-random/github_right_side.png';
    }, function () {
        $('#3 img')[0].src = 'http://i287.photobucket.com/albums/ll124/falk826/Secert%20of%20The%20Black%20Unicorn/1-cloud.png';
    });

$("#twittericon").hover(function () {
        $('#5 img')[0].src = 'https://s3-us-west-2.amazonaws.com/gabe-random/twitter_right_side.png';
    }, function () {
        $('#5 img')[0].src = 'http://i287.photobucket.com/albums/ll124/falk826/Secert%20of%20The%20Black%20Unicorn/1-cloud.png';
    });

$("#hidelink").on('click', function(){
  $(".desc").hide()
})












