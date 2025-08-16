const birds = [
  {
    src: "http://www.outgrabe.net/bird00.jpg",
    caption: "Pardalote by fir0002 (CC-by-NC)"
  },
  {
    src: "http://www.outgrabe.net/bird01.jpg",
    caption: "Purple swamp hen by Toby Hudson (CC-by-SA)"
  },
  {
    src: "http://www.outgrabe.net/bird02.jpg",
    caption: "White-headed Stilt by JJ Harrison (CC-by-SA)"
  },
  {
    src: "http://www.outgrabe.net/bird03.jpg",
    caption: "Inland Thornbill by Peter Jacobs (CC-by-SA)"
  },
  {
    src: "http://www.outgrabe.net/bird04.jpg",
    caption: "Rose Robin by JJ Harrison (CC-by-SA)"
  }
];

function showBird(index) {
  document.getElementById("bird-img").src = birds[index].src;
  document.getElementById("caption").textContent = birds[index].caption;
}
  function toggleTheme() {
  const html = document.documentElement; // select the <html> element
  if (html.getAttribute("data-theme") === "light") {
    html.setAttribute("data-theme", "dark"); 
  } else {
    html.setAttribute("data-theme", "light"); 
  }
}