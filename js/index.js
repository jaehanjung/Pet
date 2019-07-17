$('.menu1').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('.sub1').toggleClass('active');
});
$('.menu2').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('.sub2').toggleClass('active');
});
$('.menu3').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('.sub3').toggleClass('active');
});
// NOTE: This method bypasses the need for pulling in external scripts, and is especially for people having issues pulling in the .json files hosted elsewhere, and the CORS permission problems associated with your site & codepen. This allows the bodymovin .json data to be loaded within animData, bypassing the need to use the external path further below.

// PS: My knowledge of Javascript is pretty dodgey, so some of my jargon may be a little off.

var animData ={"v":"5.1.5","fr":30,"ip":0,"op":30,"w":150,"h":150,"nm":"Dot Com Menu Reverse","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Bottom","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.232],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p232_1_0p333_0"],"t":4,"s":[0],"e":[90]},{"t":20}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.009,"y":1},"o":{"x":0.425,"y":0},"n":"0p009_1_0p425_0","t":4,"s":[75.25,99,0],"e":[95.25,74.328,0],"to":[0,-4.22010803222656,0],"ti":[0,4.90002679824829,0]},{"t":18}],"ix":2},"a":{"a":0,"k":[1.75,-21,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-42.5,-21],[46,-21]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":2,"s":[0],"e":[25]},{"t":14}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":2,"s":[100],"e":[75]},{"t":14}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":30,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Middle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.329],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p329_1_0p333_0"],"t":4,"s":[0],"e":[47.8]},{"t":20}],"ix":10},"p":{"a":0,"k":[75.25,74,0],"ix":2},"a":{"a":0,"k":[1.75,-21,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-42.5,-21],[46,-21]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":4,"s":[0],"e":[20]},{"t":14}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":4,"s":[100],"e":[80]},{"t":14}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":30,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Top","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.232],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p232_1_0p333_0"],"t":4,"s":[0],"e":[-90]},{"t":20}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.009,"y":1},"o":{"x":0.425,"y":0},"n":"0p009_1_0p425_0","t":4,"s":[75.25,50,0],"e":[55.25,73.985,0],"to":[0,4.10713291168213,0],"ti":[0,-4.76762866973877,0]},{"t":18}],"ix":2},"a":{"a":0,"k":[1.75,-21,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-42.5,-21],[46,-21]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":2,"s":[0],"e":[25]},{"t":14}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":2,"s":[100],"e":[75]},{"t":14}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":30,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Circle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[75,75,0],"ix":2},"a":{"a":0,"k":[-1.355,-1.121,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.837,-7.077],[18.999,0],[0,27.614],[-27.614,0],[-8.745,-14.537]],"o":[[-8.461,15.605],[-27.614,0],[0,-27.614],[18.201,0],[4.523,7.519]],"v":[[43.984,23.799],[0,50],[-50,0],[0,-50],[42.876,-25.738]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-1.355,-1.121],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100.242,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.159],"y":[1]},"o":{"x":[0.506],"y":[0]},"n":["0p159_1_0p506_0"],"t":1,"s":[0],"e":[100]},{"t":20}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":30,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Dot Com Menu","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.058],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p058_1_0p333_0"],"t":0,"s":[-180],"e":[0]},{"t":20}],"ix":10},"p":{"a":0,"k":[75,75,0],"ix":2},"a":{"a":0,"k":[75,75,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":150,"h":150,"ip":0,"op":30,"st":0,"bm":0}],"markers":[]};

var myAnim = bodymovin.loadAnimation({
  wrapper: menuButton, // the dom element that will contain the animation
  animationData: animData,
  animType: 'svg',
  loop: false,
  prerender: false,
  autoplay: false,
  rendererSettings: { 
    progressiveLoad: false,
  //path: the relative path to the animation object. (animationData and path are mutually exclusive. because our bodymovin data is already here, we do not need to include)
}
});

menuButton.onclick = function(e) { // sets up the on-click function
  if(myAnim.currentFrame > 0){ // *if* anim.current frame is after 0 frame, reverse animation
    myAnim.playSegments([myAnim.currentFrame, 0], true); // *then* anim.current frame is the ending frame, second numeral is start frame
  }
    else {
    myAnim.playSegments([myAnim.currentFrame, 20], true) // otherwise, anim.current frame is the starting frame, second numeral is end frame
    }
}

// This Javascript is waaayy hokey, but seems to work to a certain degree! If it's stupid and it works, is it still stupid?