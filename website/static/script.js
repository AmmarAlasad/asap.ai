//corser

document.addEventListener("DOMContentLoaded", function(event) {
  var cursor = document.querySelector(".custom-cursor");
  var links = document.querySelectorAll("a");
  var initCursor = false;

  for (var i = 0; i < links.length; i++) {
    var selfLink = links[i];

    selfLink.addEventListener("mouseover", function() {
      cursor.classList.add("custom-cursor--link");
    });
    selfLink.addEventListener("mouseout", function() {
      cursor.classList.remove("custom-cursor--link");
    });
  }

  window.onmousemove = function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    if (!initCursor) {
      // cursor.style.opacity = 1;
      TweenLite.to(cursor, 0.3, {
        opacity: 1
      });
      initCursor = true;
    }

    TweenLite.to(cursor, 0, {
      top: mouseY + "px",
      left: mouseX + "px"
    });
  };

  window.onmouseout = function(e) {
    TweenLite.to(cursor, 0.3, {
      opacity: 0
    });
    initCursor = false;
  };
});

////
//form
var current = null;
document.querySelector('#email').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '110 2000',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#password').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -468,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '110 2000',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#firstName').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -670,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '110 2000',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#lastName').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -1141,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '110 2000',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});

document.querySelector('#password2').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -1339,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '110 2000',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});




document.querySelector('#submit').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -2000,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '110 2000',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});






