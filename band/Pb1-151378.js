function gnuplot_canvas() {
canvas = document.getElementById("gnuplot_canvas");
ctx = canvas.getContext("2d");
// Suppress refresh on mouseover if this was the plot we just left
if ((gnuplot.active_plot == gnuplot_canvas && gnuplot.display_is_uptodate)) return;
else gnuplot.display_is_uptodate = true;
// Reinitialize mouse tracking and zoom for this particular plot
if ((typeof(gnuplot.active_plot) == "undefined" || gnuplot.active_plot != gnuplot_canvas)  &&  typeof(gnuplot.mouse_update) != "undefined") {
  gnuplot.active_plot_name = "gnuplot_canvas";
  gnuplot.active_plot = gnuplot_canvas;
  canvas.onmousemove = gnuplot.mouse_update;
  canvas.onmouseup = gnuplot.zoom_in;
  canvas.onmousedown = gnuplot.saveclick;
  canvas.onkeypress = gnuplot.do_hotkey;
  if (canvas.attachEvent) {canvas.attachEvent('mouseover', gnuplot_canvas);}
  else if (canvas.addEventListener) {canvas.addEventListener('mouseover', gnuplot_canvas, false);} 
  gnuplot.zoomed = false;
  gnuplot.zoom_axis_width = 0;
  gnuplot.zoom_in_progress = false;
  gnuplot.polar_mode = false;
  gnuplot.polar_theta0 = 0;
  gnuplot.polar_sense = 1;
  ctx.clearRect(0,0,600,400);
}
// Gnuplot version 5.4.2
// short forms of commands provided by gnuplot_common.js
function DT  (dt)  {gnuplot.dashtype(dt);};
function DS  (x,y) {gnuplot.dashstart(x,y);};
function DL  (x,y) {gnuplot.dashstep(x,y);};
function M   (x,y) {if (gnuplot.pattern.length > 0) DS(x,y); else gnuplot.M(x,y);};
function L   (x,y) {if (gnuplot.pattern.length > 0) DL(x,y); else gnuplot.L(x,y);};
function Dot (x,y) {gnuplot.Dot(x/10.,y/10.);};
function Pt  (N,x,y,w) {gnuplot.Pt(N,x/10.,y/10.,w/10.);};
function R   (x,y,w,h) {gnuplot.R(x,y,w,h);};
function T   (x,y,fontsize,justify,string) {gnuplot.T(x,y,fontsize,justify,string);};
function TR  (x,y,angle,fontsize,justify,string) {gnuplot.TR(x,y,angle,fontsize,justify,string);};
function bp  (x,y) {gnuplot.bp(x,y);};
function cfp () {gnuplot.cfp();};
function cfsp() {gnuplot.cfsp();};

gnuplot.hypertext_list = [];
gnuplot.on_hypertext = -1;
function Hypertext(x,y,w,text) {
    newtext = {x:x, y:y, w:w, text:text};
    gnuplot.hypertext_list.push(newtext);
}
gnuplot.dashlength = 400;
ctx.lineCap = "round"; ctx.lineJoin = "round";
CanvasTextFunctions.enable(ctx);
ctx.strokeStyle = " rgb(215,215,215)";
ctx.lineWidth = 1;

ctx.lineWidth = 1;
ctx.strokeStyle = " rgb(000,000,000)";
ctx.beginPath();
M(800,3639);
L(900,3639);
M(4619,3639);
L(4519,3639);
ctx.stroke();
ctx.closePath();
ctx.fillStyle = " rgb(000,000,000)";
T(720,3689,18.0,"Right","-12");
ctx.beginPath();
M(800,3318);
L(900,3318);
M(4619,3318);
L(4519,3318);
ctx.stroke();
ctx.closePath();
T(720,3368,18.0,"Right","-10");
ctx.beginPath();
M(800,2996);
L(900,2996);
M(4619,2996);
L(4519,2996);
ctx.stroke();
ctx.closePath();
T(720,3046,18.0,"Right","-8");
ctx.beginPath();
M(800,2674);
L(900,2674);
M(4619,2674);
L(4519,2674);
ctx.stroke();
ctx.closePath();
T(720,2724,18.0,"Right","-6");
ctx.beginPath();
M(800,2353);
L(900,2353);
M(4619,2353);
L(4519,2353);
ctx.stroke();
ctx.closePath();
T(720,2403,18.0,"Right","-4");
ctx.beginPath();
M(800,2031);
L(900,2031);
M(4619,2031);
L(4519,2031);
ctx.stroke();
ctx.closePath();
T(720,2081,18.0,"Right","-2");
ctx.beginPath();
M(800,1709);
L(900,1709);
M(4619,1709);
L(4519,1709);
ctx.stroke();
ctx.closePath();
T(720,1759,18.0,"Right"," 0");
ctx.beginPath();
M(800,1388);
L(900,1388);
M(4619,1388);
L(4519,1388);
ctx.stroke();
ctx.closePath();
T(720,1438,18.0,"Right"," 2");
ctx.beginPath();
M(800,1066);
L(900,1066);
M(4619,1066);
L(4519,1066);
ctx.stroke();
ctx.closePath();
T(720,1116,18.0,"Right"," 4");
ctx.beginPath();
M(800,744);
L(900,744);
M(4619,744);
L(4519,744);
ctx.stroke();
ctx.closePath();
T(720,794,18.0,"Right"," 6");
ctx.beginPath();
M(800,423);
L(900,423);
M(4619,423);
L(4519,423);
ctx.stroke();
ctx.closePath();
T(720,473,18.0,"Right"," 8");
ctx.beginPath();
M(800,101);
L(900,101);
M(4619,101);
L(4519,101);
ctx.stroke();
ctx.closePath();
T(720,151,18.0,"Right"," 10");
ctx.beginPath();
M(800,3800);
L(800,3700);
M(800,101);
L(800,201);
ctx.stroke();
ctx.closePath();
T(800,3950,18.0,"Center","G");
ctx.beginPath();
M(1651,3800);
L(1651,3700);
M(1651,101);
L(1651,201);
ctx.stroke();
ctx.closePath();
T(1651,3950,18.0,"Center","X");
ctx.beginPath();
M(1952,3800);
L(1952,3700);
M(1952,101);
L(1952,201);
ctx.stroke();
ctx.closePath();
T(1952,3950,18.0,"Center","UK");
ctx.beginPath();
M(2855,3800);
L(2855,3700);
M(2855,101);
L(2855,201);
ctx.stroke();
ctx.closePath();
T(2855,3950,18.0,"Center","G");
ctx.beginPath();
M(3592,3800);
L(3592,3700);
M(3592,101);
L(3592,201);
ctx.stroke();
ctx.closePath();
T(3592,3950,18.0,"Center","L");
ctx.beginPath();
M(4193,3800);
L(4193,3700);
M(4193,101);
L(4193,201);
ctx.stroke();
ctx.closePath();
T(4193,3950,18.0,"Center","W");
ctx.beginPath();
M(4619,3800);
L(4619,3700);
M(4619,101);
L(4619,201);
ctx.stroke();
ctx.closePath();
T(4619,3950,18.0,"Center","X");
ctx.lineWidth = 2;
DT(gnuplot.dashpattern2);
ctx.strokeStyle = " rgb(160,160,160)";
ctx.beginPath();
M(800,1709);
L(4619,1709);
ctx.stroke();
ctx.closePath();
ctx.lineWidth = 1;
ctx.strokeStyle = " rgb(000,000,000)";
DT(gnuplot.solid);
ctx.beginPath();
M(800,101);
L(800,3800);
L(4619,3800);
L(4619,101);
L(800,101);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
M(330,1951);
M(331,3089);
ctx.stroke();
ctx.closePath();
TR(331,3139,270,18.0,"","Energy from ");
TR(330,1671,270,18.0,"","E");
TR(384,1542,270,14.4,"","F");
TR(330,1439,270,18.0,""," [eV]");
if (typeof(gnuplot.hide_gnuplot_canvas_plot_1) == "undefined"|| !gnuplot.hide_gnuplot_canvas_plot_1) {
ctx.strokeStyle = "rgba(148,000,211,1.00)";
ctx.fillStyle = "rgba(148,000,211,1.00)";
ctx.strokeStyle = " rgb(000,000,000)";
ctx.fillStyle = " rgb(000,000,000)";
T(5339,214,10.0,"Right","Pb6S");
ctx.strokeStyle = "rgba(148,000,211,1.00)";
ctx.fillStyle = "rgba(148,000,211,1.00)";
Pt(0,800,3618,60.0);
Pt(0,847,3615,58.9);
Pt(0,942,3589,52.5);
Pt(0,1013,3553,47.1);
Pt(0,1084,3503,42.7);
Pt(0,1155,3438,39.7);
Pt(0,1226,3359,38.0);
Pt(0,1296,3267,37.6);
Pt(0,1367,3164,38.6);
Pt(0,1438,3051,41.3);
Pt(0,1509,2938,46.4);
Pt(0,1580,2839,54.0);
Pt(0,1651,2795,59.2);
Pt(0,1726,2794,59.2);
Pt(0,1801,2792,59.3);
Pt(0,1877,2793,59.5);
Pt(0,1952,2808,59.0);
Pt(0,1952,2808,59.0);
Pt(0,2021,2844,56.8);
Pt(0,2091,2907,52.7);
Pt(0,2160,2992,47.8);
Pt(0,2230,3089,43.7);
Pt(0,2299,3189,40.9);
Pt(0,2369,3284,39.5);
Pt(0,2438,3370,39.4);
Pt(0,2507,3445,40.7);
Pt(0,2577,3507,43.5);
Pt(0,2646,3556,47.6);
Pt(0,2716,3591,52.8);
Pt(0,2785,3611,57.8);
Pt(0,2855,3618,60.0);
Pt(0,2922,3612,57.9);
Pt(0,2989,3593,53.2);
Pt(0,3056,3560,48.2);
Pt(0,3123,3515,44.2);
Pt(0,3190,3457,41.7);
Pt(0,3257,3387,40.7);
Pt(0,3324,3307,41.4);
Pt(0,3391,3219,44.0);
Pt(0,3458,3130,48.9);
Pt(0,3525,3057,55.2);
Pt(0,3592,3026,58.9);
Pt(0,3659,3021,58.5);
Pt(0,3725,3006,57.3);
Pt(0,3792,2982,56.1);
Pt(0,3859,2950,55.1);
Pt(0,3926,2910,54.9);
Pt(0,3993,2866,55.6);
Pt(0,4060,2823,57.1);
Pt(0,4127,2790,58.9);
Pt(0,4193,2777,59.8);
Pt(0,4264,2778,59.7);
Pt(0,4335,2782,59.5);
Pt(0,4406,2786,59.4);
Pt(0,4477,2791,59.3);
Pt(0,4548,2794,59.2);
Pt(0,4619,2795,59.2);
Pt(0,847,533,1.0);
Pt(0,942,684,7.3);
Pt(0,1013,834,12.7);
Pt(0,1084,995,17.1);
Pt(0,1155,1166,20.1);
Pt(0,1226,1345,21.6);
Pt(0,1296,1530,21.8);
Pt(0,1367,1717,20.6);
Pt(0,1438,1898,17.8);
Pt(0,1509,2064,12.8);
Pt(0,1580,2194,5.2);
Pt(0,2091,2018,6.8);
Pt(0,2160,1991,11.6);
Pt(0,2230,1922,15.6);
Pt(0,2299,1818,18.4);
Pt(0,2369,1687,19.7);
Pt(0,2438,1533,19.6);
Pt(0,2507,1359,18.3);
Pt(0,2577,1170,15.7);
Pt(0,2646,970,11.8);
Pt(0,2716,769,6.8);
Pt(0,2785,592,2.1);
Pt(0,2922,598,1.9);
Pt(0,2989,794,6.3);
Pt(0,3056,1022,10.8);
Pt(0,3123,1255,14.4);
Pt(0,3190,1482,16.8);
Pt(0,3257,1698,17.8);
Pt(0,3324,1901,17.2);
Pt(0,3391,2084,14.7);
Pt(0,3458,2241,10.0);
Pt(0,3525,2357,3.7);
Pt(0,1726,1461,0.1);
Pt(0,1801,1621,0.1);
Pt(0,1952,1916,0.5);
Pt(0,1952,1916,0.5);
Pt(0,2021,1994,2.7);
Pt(0,3659,879,0.6);
Pt(0,3725,1039,1.9);
Pt(0,3792,1221,3.3);
Pt(0,3859,1401,4.4);
Pt(0,3926,1568,4.7);
Pt(0,3993,1715,4.1);
Pt(0,4060,1833,2.6);
Pt(0,4127,1912,0.8);
Pt(0,4264,1661,0.1);
Pt(0,4335,1622,0.2);
Pt(0,4406,1561,0.2);
Pt(0,4477,1486,0.2);
Pt(0,4548,1414,0.1);
Pt(0,1296,592,0.3);
Pt(0,1367,689,0.5);
Pt(0,1438,760,0.6);
Pt(0,1509,808,0.5);
Pt(0,1580,836,0.4);
Pt(0,1651,845,0.4);
Pt(0,1726,799,0.3);
Pt(0,1801,748,0.3);
Pt(0,1877,708,0.2);
Pt(0,1952,665,0.2);
Pt(0,1952,665,0.2);
Pt(0,2021,615,0.2);
Pt(0,2091,556,0.2);
Pt(0,2160,486,0.2);
Pt(0,2230,405,0.3);
Pt(0,2299,311,0.3);
Pt(0,2369,205,0.3);
Pt(0,2922,111,0.0);
Pt(0,2989,149,0.2);
Pt(0,3056,184,0.4);
Pt(0,3123,212,0.7);
Pt(0,3190,233,0.7);
Pt(0,3257,246,0.7);
Pt(0,3324,251,0.5);
Pt(0,3391,247,0.3);
Pt(0,3458,234,0.2);
Pt(0,3525,212,0.1);
Pt(0,3592,178,0.3);
Pt(0,4335,285,0.1);
Pt(0,4406,484,0.1);
Pt(0,4477,659,0.2);
Pt(0,4548,791,0.3);
Pt(0,4619,845,0.4);
Pt(0,5629,164,60.0);
} // End gnuplot_canvas_plot_1 
if (typeof(gnuplot.hide_gnuplot_canvas_plot_2) == "undefined"|| !gnuplot.hide_gnuplot_canvas_plot_2) {
ctx.lineWidth = 1;
ctx.strokeStyle = " rgb(000,000,000)";
DT(gnuplot.solid);
ctx.strokeStyle = "rgba(000,158,115,1.00)";
ctx.fillStyle = "rgba(000,158,115,1.00)";
ctx.strokeStyle = " rgb(000,000,000)";
ctx.fillStyle = " rgb(000,000,000)";
T(5339,339,10.0,"Right","Pb6P");
ctx.strokeStyle = "rgba(000,158,115,1.00)";
ctx.fillStyle = "rgba(000,158,115,1.00)";
Pt(1,847,3615,1.0);
Pt(1,942,3589,7.4);
Pt(1,1013,3553,12.9);
Pt(1,1084,3503,17.2);
Pt(1,1155,3438,20.2);
Pt(1,1226,3359,21.8);
Pt(1,1296,3267,22.1);
Pt(1,1367,3164,21.1);
Pt(1,1438,3051,18.3);
Pt(1,1509,2938,13.2);
Pt(1,1580,2839,5.4);
Pt(1,1726,2794,0.0);
Pt(1,1801,2792,0.0);
Pt(1,1877,2793,0.0);
Pt(1,1952,2808,0.6);
Pt(1,1952,2808,0.6);
Pt(1,2021,2844,2.8);
Pt(1,2091,2907,6.8);
Pt(1,2160,2992,11.6);
Pt(1,2230,3089,15.8);
Pt(1,2299,3189,18.7);
Pt(1,2369,3284,20.2);
Pt(1,2438,3370,20.3);
Pt(1,2507,3445,19.1);
Pt(1,2577,3507,16.4);
Pt(1,2646,3556,12.3);
Pt(1,2716,3591,7.1);
Pt(1,2785,3611,2.2);
Pt(1,2922,3612,2.0);
Pt(1,2989,3593,6.7);
Pt(1,3056,3560,11.7);
Pt(1,3123,3515,15.7);
Pt(1,3190,3457,18.2);
Pt(1,3257,3387,19.1);
Pt(1,3324,3307,18.2);
Pt(1,3391,3219,15.4);
Pt(1,3458,3130,10.4);
Pt(1,3525,3057,3.8);
Pt(1,3659,3021,0.5);
Pt(1,3725,3006,1.7);
Pt(1,3792,2982,3.1);
Pt(1,3859,2950,4.2);
Pt(1,3926,2910,4.5);
Pt(1,3993,2866,4.0);
Pt(1,4060,2823,2.5);
Pt(1,4127,2790,0.8);
Pt(1,4264,2778,0.0);
Pt(1,4335,2782,0.1);
Pt(1,4406,2786,0.1);
Pt(1,4477,2791,0.1);
Pt(1,4548,2794,0.0);
Pt(1,800,509,58.4);
Pt(1,847,533,57.3);
Pt(1,942,684,51.1);
Pt(1,1013,834,45.9);
Pt(1,1084,995,41.8);
Pt(1,1155,1166,39.0);
Pt(1,1226,1345,37.2);
Pt(1,1296,1530,36.7);
Pt(1,1367,1717,37.7);
Pt(1,1438,1898,40.7);
Pt(1,1509,2064,46.2);
Pt(1,1580,2194,54.4);
Pt(1,1651,2249,60.0);
Pt(1,1726,2239,59.9);
Pt(1,1801,2208,59.8);
Pt(1,1877,2158,59.6);
Pt(1,1952,2088,59.4);
Pt(1,1952,2088,59.4);
Pt(1,2021,2008,59.1);
Pt(1,2091,2018,52.0);
Pt(1,2160,1991,47.2);
Pt(1,2230,1922,43.0);
Pt(1,2299,1818,40.1);
Pt(1,2369,1687,38.3);
Pt(1,2438,1533,37.9);
Pt(1,2507,1359,38.8);
Pt(1,2577,1170,41.2);
Pt(1,2646,970,45.1);
Pt(1,2716,769,50.4);
Pt(1,2785,592,55.7);
Pt(1,2855,509,58.4);
Pt(1,2922,598,55.5);
Pt(1,2989,794,49.7);
Pt(1,3056,1022,44.3);
Pt(1,3123,1255,40.6);
Pt(1,3190,1482,38.6);
Pt(1,3257,1698,38.5);
Pt(1,3324,1901,40.0);
Pt(1,3391,2084,43.5);
Pt(1,3458,2241,49.0);
Pt(1,3525,2357,56.0);
Pt(1,3592,2401,59.9);
Pt(1,3659,2394,59.9);
Pt(1,3725,2371,59.8);
Pt(1,3792,2334,59.7);
Pt(1,3859,2282,59.5);
Pt(1,3926,2218,59.4);
Pt(1,3993,2143,59.2);
Pt(1,4060,2061,59.1);
Pt(1,4127,1981,59.0);
Pt(1,4193,1940,59.0);
Pt(1,4264,2030,59.2);
Pt(1,4335,2107,59.4);
Pt(1,4406,2168,59.6);
Pt(1,4477,2213,59.8);
Pt(1,4548,2240,59.9);
Pt(1,4619,2249,60.0);
Pt(1,800,509,58.4);
Pt(1,847,525,58.1);
Pt(1,942,630,56.9);
Pt(1,1013,739,56.8);
Pt(1,1084,855,57.2);
Pt(1,1155,967,57.7);
Pt(1,1226,1070,58.2);
Pt(1,1296,1161,58.6);
Pt(1,1367,1238,58.9);
Pt(1,1438,1300,59.1);
Pt(1,1509,1344,59.2);
Pt(1,1580,1372,59.3);
Pt(1,1651,1381,59.4);
Pt(1,1726,1461,57.6);
Pt(1,1801,1621,57.2);
Pt(1,1877,1784,57.9);
Pt(1,1952,1916,57.8);
Pt(1,1952,1916,57.8);
Pt(1,2021,1994,55.9);
Pt(1,2091,1914,58.9);
Pt(1,2160,1806,58.5);
Pt(1,2230,1686,58.0);
Pt(1,2299,1555,57.3);
Pt(1,2369,1413,56.3);
Pt(1,2438,1263,55.0);
Pt(1,2507,1106,53.6);
Pt(1,2577,945,52.6);
Pt(1,2646,786,52.7);
Pt(1,2716,644,54.7);
Pt(1,2785,544,57.5);
Pt(1,2855,509,58.4);
Pt(1,2922,518,58.2);
Pt(1,2989,542,57.8);
Pt(1,3056,576,57.5);
Pt(1,3123,616,57.4);
Pt(1,3190,658,57.5);
Pt(1,3257,698,57.8);
Pt(1,3324,734,58.2);
Pt(1,3391,764,58.5);
Pt(1,3458,787,58.8);
Pt(1,3525,801,58.9);
Pt(1,3592,806,59.0);
Pt(1,3659,879,57.2);
Pt(1,3725,1039,55.5);
Pt(1,3792,1221,54.5);
Pt(1,3859,1401,53.9);
Pt(1,3926,1568,53.9);
Pt(1,3993,1715,54.7);
Pt(1,4060,1833,56.3);
Pt(1,4127,1912,58.1);
Pt(1,4193,1940,59.0);
Pt(1,4264,1838,58.7);
Pt(1,4335,1728,58.4);
Pt(1,4406,1613,58.1);
Pt(1,4477,1504,58.1);
Pt(1,4548,1416,58.7);
Pt(1,4619,1381,59.4);
Pt(1,800,509,58.4);
Pt(1,847,525,58.1);
Pt(1,942,630,56.9);
Pt(1,1013,739,56.8);
Pt(1,1084,855,57.2);
Pt(1,1155,967,57.7);
Pt(1,1226,1070,58.2);
Pt(1,1296,1161,58.6);
Pt(1,1367,1238,58.9);
Pt(1,1438,1300,59.1);
Pt(1,1509,1344,59.2);
Pt(1,1580,1372,59.3);
Pt(1,1651,1381,59.4);
Pt(1,1726,1371,59.3);
Pt(1,1801,1342,59.2);
Pt(1,1877,1295,59.0);
Pt(1,1952,1230,58.7);
Pt(1,1952,1230,58.7);
Pt(1,2021,1156,58.3);
Pt(1,2091,1071,57.9);
Pt(1,2160,976,57.5);
Pt(1,2230,874,57.1);
Pt(1,2299,770,57.1);
Pt(1,2369,670,57.7);
Pt(1,2438,585,58.7);
Pt(1,2507,526,59.6);
Pt(1,2577,497,59.7);
Pt(1,2646,492,59.2);
Pt(1,2716,498,58.8);
Pt(1,2785,506,58.5);
Pt(1,2855,509,58.4);
Pt(1,2922,518,58.2);
Pt(1,2989,542,57.8);
Pt(1,3056,576,57.5);
Pt(1,3123,616,57.4);
Pt(1,3190,658,57.5);
Pt(1,3257,698,57.8);
Pt(1,3324,734,58.2);
Pt(1,3391,764,58.5);
Pt(1,3458,787,58.8);
Pt(1,3525,801,58.9);
Pt(1,3592,806,59.0);
Pt(1,3659,825,58.6);
Pt(1,3725,886,56.7);
Pt(1,3792,987,54.1);
Pt(1,3859,1114,52.6);
Pt(1,3926,1251,52.6);
Pt(1,3993,1387,53.5);
Pt(1,4060,1516,54.7);
Pt(1,4127,1623,55.6);
Pt(1,4193,1674,55.9);
Pt(1,4264,1661,55.8);
Pt(1,4335,1622,55.6);
Pt(1,4406,1561,55.6);
Pt(1,4477,1486,56.1);
Pt(1,4548,1414,57.8);
Pt(1,4619,1381,59.4);
Pt(1,1226,475,0.0);
Pt(1,1296,592,0.6);
Pt(1,1367,689,0.8);
Pt(1,1438,760,0.7);
Pt(1,1509,808,0.4);
Pt(1,1580,836,0.1);
Pt(1,1726,799,0.8);
Pt(1,1801,748,0.5);
Pt(1,1877,708,0.2);
Pt(1,1952,665,0.2);
Pt(1,1952,665,0.2);
Pt(1,2021,615,0.2);
Pt(1,2091,556,0.2);
Pt(1,2160,486,0.2);
Pt(1,2230,405,0.3);
Pt(1,2299,311,0.3);
Pt(1,2369,205,0.4);
Pt(1,2646,116,5.0);
Pt(1,2716,133,2.9);
Pt(1,2785,112,0.4);
Pt(1,2922,111,0.3);
Pt(1,2989,149,1.3);
Pt(1,3056,184,1.9);
Pt(1,3123,212,1.9);
Pt(1,3190,233,1.7);
Pt(1,3257,246,1.3);
Pt(1,3324,251,0.9);
Pt(1,3391,247,0.6);
Pt(1,3458,234,0.3);
Pt(1,3525,212,0.1);
Pt(1,3659,236,0.2);
Pt(1,3725,302,1.9);
Pt(1,3792,324,4.6);
Pt(1,3859,303,6.2);
Pt(1,3926,253,6.3);
Pt(1,3993,181,5.4);
Pt(1,4335,285,3.0);
Pt(1,4406,484,3.2);
Pt(1,4477,659,3.0);
Pt(1,4548,791,1.5);
Pt(1,5629,289,60.0);
} // End gnuplot_canvas_plot_2 
if (typeof(gnuplot.hide_gnuplot_canvas_plot_3) == "undefined"|| !gnuplot.hide_gnuplot_canvas_plot_3) {
ctx.lineWidth = 1;
ctx.strokeStyle = " rgb(000,000,000)";
DT(gnuplot.solid);
ctx.strokeStyle = "rgba(086,180,233,1.00)";
ctx.fillStyle = "rgba(086,180,233,1.00)";
ctx.strokeStyle = " rgb(000,000,000)";
ctx.fillStyle = " rgb(000,000,000)";
T(5339,464,10.0,"Right","Pb5D");
ctx.strokeStyle = "rgba(086,180,233,1.00)";
ctx.fillStyle = "rgba(086,180,233,1.00)";
Pt(2,942,3589,0.0);
Pt(2,1013,3553,0.0);
Pt(2,1084,3503,0.0);
Pt(2,1155,3438,0.1);
Pt(2,1226,3359,0.1);
Pt(2,1296,3267,0.2);
Pt(2,1367,3164,0.3);
Pt(2,1438,3051,0.3);
Pt(2,1509,2938,0.3);
Pt(2,1580,2839,0.3);
Pt(2,1651,2795,0.3);
Pt(2,1726,2794,0.3);
Pt(2,1801,2792,0.3);
Pt(2,1877,2793,0.2);
Pt(2,1952,2808,0.2);
Pt(2,1952,2808,0.2);
Pt(2,2021,2844,0.2);
Pt(2,2091,2907,0.3);
Pt(2,2160,2992,0.4);
Pt(2,2230,3089,0.4);
Pt(2,2299,3189,0.4);
Pt(2,2369,3284,0.3);
Pt(2,2438,3370,0.2);
Pt(2,2507,3445,0.1);
Pt(2,2577,3507,0.1);
Pt(2,2646,3556,0.0);
Pt(2,2716,3591,0.0);
Pt(2,3056,3560,0.0);
Pt(2,3123,3515,0.0);
Pt(2,3190,3457,0.1);
Pt(2,3257,3387,0.2);
Pt(2,3324,3307,0.3);
Pt(2,3391,3219,0.4);
Pt(2,3458,3130,0.6);
Pt(2,3525,3057,0.7);
Pt(2,3592,3026,0.8);
Pt(2,3659,3021,0.8);
Pt(2,3725,3006,0.7);
Pt(2,3792,2982,0.7);
Pt(2,3859,2950,0.6);
Pt(2,3926,2910,0.4);
Pt(2,3993,2866,0.3);
Pt(2,4060,2823,0.2);
Pt(2,4127,2790,0.1);
Pt(2,4193,2777,0.1);
Pt(2,4264,2778,0.1);
Pt(2,4335,2782,0.1);
Pt(2,4406,2786,0.2);
Pt(2,4477,2791,0.3);
Pt(2,4548,2794,0.3);
Pt(2,4619,2795,0.3);
Pt(2,1438,1898,0.0);
Pt(2,1509,2064,0.0);
Pt(2,1580,2194,0.0);
Pt(2,1726,2239,0.0);
Pt(2,1801,2208,0.2);
Pt(2,1877,2158,0.3);
Pt(2,1952,2088,0.5);
Pt(2,1952,2088,0.5);
Pt(2,2021,2008,0.6);
Pt(2,2091,2018,0.6);
Pt(2,2160,1991,0.4);
Pt(2,2230,1922,0.2);
Pt(2,2299,1818,0.1);
Pt(2,2369,1687,0.1);
Pt(2,2438,1533,0.1);
Pt(2,2507,1359,0.0);
Pt(2,2577,1170,0.0);
Pt(2,2646,970,0.0);
Pt(2,2716,769,0.0);
Pt(2,2785,592,0.0);
Pt(2,2922,598,0.0);
Pt(2,2989,794,0.0);
Pt(2,3056,1022,0.1);
Pt(2,3123,1255,0.1);
Pt(2,3190,1482,0.1);
Pt(2,3257,1698,0.1);
Pt(2,3324,1901,0.2);
Pt(2,3391,2084,0.1);
Pt(2,3458,2241,0.1);
Pt(2,3525,2357,0.0);
Pt(2,3659,2394,0.0);
Pt(2,3725,2371,0.1);
Pt(2,3792,2334,0.3);
Pt(2,3859,2282,0.4);
Pt(2,3926,2218,0.5);
Pt(2,3993,2143,0.6);
Pt(2,4060,2061,0.7);
Pt(2,4127,1981,0.6);
Pt(2,4193,1940,0.6);
Pt(2,4264,2030,0.5);
Pt(2,4335,2107,0.4);
Pt(2,4406,2168,0.3);
Pt(2,4477,2213,0.1);
Pt(2,4548,2240,0.0);
Pt(2,847,525,0.0);
Pt(2,942,630,0.0);
Pt(2,1013,739,0.1);
Pt(2,1084,855,0.1);
Pt(2,1155,967,0.1);
Pt(2,1226,1070,0.1);
Pt(2,1296,1161,0.1);
Pt(2,1367,1238,0.1);
Pt(2,1438,1300,0.1);
Pt(2,1509,1344,0.0);
Pt(2,1580,1372,0.0);
Pt(2,1726,1461,0.1);
Pt(2,1801,1621,0.3);
Pt(2,1877,1784,0.6);
Pt(2,1952,1916,0.7);
Pt(2,1952,1916,0.7);
Pt(2,2021,1994,0.8);
Pt(2,2091,1914,0.7);
Pt(2,2160,1806,0.7);
Pt(2,2230,1686,0.7);
Pt(2,2299,1555,0.6);
Pt(2,2369,1413,0.5);
Pt(2,2438,1263,0.4);
Pt(2,2507,1106,0.3);
Pt(2,2577,945,0.2);
Pt(2,2646,786,0.1);
Pt(2,2716,644,0.0);
Pt(2,2785,544,0.0);
Pt(2,2922,518,0.0);
Pt(2,2989,542,0.0);
Pt(2,3056,576,0.0);
Pt(2,3123,616,0.0);
Pt(2,3190,658,0.0);
Pt(2,3257,698,0.0);
Pt(2,3324,734,0.0);
Pt(2,3391,764,0.0);
Pt(2,3458,787,0.0);
Pt(2,3525,801,0.0);
Pt(2,3659,879,0.0);
Pt(2,3725,1039,0.1);
Pt(2,3792,1221,0.3);
Pt(2,3859,1401,0.4);
Pt(2,3926,1568,0.5);
Pt(2,3993,1715,0.5);
Pt(2,4060,1833,0.5);
Pt(2,4127,1912,0.6);
Pt(2,4193,1940,0.6);
Pt(2,4264,1838,0.5);
Pt(2,4335,1728,0.4);
Pt(2,4406,1613,0.3);
Pt(2,4477,1504,0.2);
Pt(2,4548,1416,0.0);
Pt(2,847,525,0.0);
Pt(2,942,630,0.0);
Pt(2,1013,739,0.1);
Pt(2,1084,855,0.1);
Pt(2,1155,967,0.1);
Pt(2,1226,1070,0.1);
Pt(2,1296,1161,0.1);
Pt(2,1367,1238,0.1);
Pt(2,1438,1300,0.1);
Pt(2,1509,1344,0.0);
Pt(2,1580,1372,0.0);
Pt(2,1726,1371,0.0);
Pt(2,1801,1342,0.0);
Pt(2,1877,1295,0.1);
Pt(2,1952,1230,0.1);
Pt(2,1952,1230,0.1);
Pt(2,2021,1156,0.1);
Pt(2,2091,1071,0.1);
Pt(2,2160,976,0.1);
Pt(2,2230,874,0.1);
Pt(2,2299,770,0.1);
Pt(2,2369,670,0.0);
Pt(2,2438,585,0.0);
Pt(2,2507,526,0.0);
Pt(2,2577,497,0.0);
Pt(2,2922,518,0.0);
Pt(2,2989,542,0.0);
Pt(2,3056,576,0.0);
Pt(2,3123,616,0.0);
Pt(2,3190,658,0.0);
Pt(2,3257,698,0.0);
Pt(2,3324,734,0.0);
Pt(2,3391,764,0.0);
Pt(2,3458,787,0.0);
Pt(2,3525,801,0.0);
Pt(2,3659,825,0.0);
Pt(2,3725,886,0.0);
Pt(2,3792,987,0.1);
Pt(2,3859,1114,0.1);
Pt(2,3926,1251,0.2);
Pt(2,3993,1387,0.3);
Pt(2,4060,1516,0.4);
Pt(2,4127,1623,0.6);
Pt(2,4193,1674,0.7);
Pt(2,4264,1661,0.6);
Pt(2,4335,1622,0.5);
Pt(2,4406,1561,0.3);
Pt(2,4477,1486,0.2);
Pt(2,4548,1414,0.0);
Pt(2,942,192,0.0);
Pt(2,1013,272,0.0);
Pt(2,1084,348,0.0);
Pt(2,1155,417,0.0);
Pt(2,1226,475,0.0);
Pt(2,1296,592,0.0);
Pt(2,1367,689,0.0);
Pt(2,1438,760,0.0);
Pt(2,1509,808,0.0);
Pt(2,1580,836,0.0);
Pt(2,1651,845,0.0);
Pt(2,1726,799,0.0);
Pt(2,1801,748,0.0);
Pt(2,1877,708,0.0);
Pt(2,1952,665,0.0);
Pt(2,1952,665,0.0);
Pt(2,2021,615,0.0);
Pt(2,2091,556,0.0);
Pt(2,2160,486,0.0);
Pt(2,2230,405,0.0);
Pt(2,2299,311,0.0);
Pt(2,3926,253,0.0);
Pt(2,3993,181,0.0);
Pt(2,4335,285,0.0);
Pt(2,4406,484,0.0);
Pt(2,4619,845,0.0);
Pt(2,5629,414,60.0);
} // End gnuplot_canvas_plot_3 
if (typeof(gnuplot.hide_gnuplot_canvas_plot_4) == "undefined"|| !gnuplot.hide_gnuplot_canvas_plot_4) {
ctx.lineWidth = 1;
ctx.strokeStyle = " rgb(000,000,000)";
DT(gnuplot.solid);
ctx.strokeStyle = " rgb(000,171,000)";
ctx.strokeStyle = " rgb(000,000,000)";
ctx.fillStyle = " rgb(000,000,000)";
T(5339,589,10.0,"Right","Wannier");
ctx.strokeStyle = " rgb(000,171,000)";
ctx.beginPath();
M(5419,539);
L(5839,539);
M(800,509);
L(821,515);
L(843,525);
L(864,540);
L(885,560);
L(906,584);
L(928,612);
L(949,644);
L(970,680);
L(991,720);
L(1013,764);
L(1034,811);
L(1055,861);
L(1077,914);
L(1098,969);
L(1119,1028);
L(1140,1088);
L(1162,1150);
L(1183,1214);
L(1204,1279);
L(1226,1345);
L(1247,1411);
L(1268,1478);
L(1289,1544);
L(1311,1610);
L(1332,1674);
L(1353,1737);
L(1374,1799);
L(1396,1858);
L(1417,1915);
L(1438,1968);
L(1460,2018);
L(1481,2064);
L(1502,2106);
L(1523,2143);
L(1545,2174);
L(1566,2201);
L(1587,2222);
L(1609,2237);
L(1630,2246);
L(1651,2249);
L(1659,2249);
L(1666,2249);
L(1674,2248);
L(1681,2248);
L(1689,2248);
L(1696,2247);
L(1704,2246);
L(1711,2245);
L(1719,2244);
L(1726,2243);
L(1734,2242);
L(1741,2240);
L(1749,2239);
L(1756,2237);
L(1764,2235);
L(1771,2233);
L(1779,2231);
L(1786,2229);
L(1794,2226);
L(1802,2224);
L(1809,2221);
L(1817,2218);
L(1824,2215);
L(1832,2211);
L(1839,2208);
L(1847,2204);
L(1854,2200);
L(1862,2196);
L(1869,2192);
L(1877,2187);
L(1884,2182);
L(1892,2177);
L(1899,2172);
L(1907,2167);
L(1914,2161);
L(1922,2155);
L(1929,2149);
L(1937,2143);
L(1944,2137);
L(1952,2130);
L(1975,2108);
L(1997,2086);
L(2020,2064);
L(2042,2054);
L(2065,2053);
L(2087,2049);
L(2110,2039);
L(2132,2023);
L(2155,2001);
L(2178,1975);
L(2200,1945);
L(2223,1911);
L(2245,1875);
L(2268,1836);
L(2290,1795);
L(2313,1753);
L(2336,1710);
L(2358,1664);
L(2381,1617);
L(2403,1568);
L(2426,1517);
L(2448,1462);
L(2471,1406);
L(2494,1346);
L(2516,1284);
L(2539,1219);
L(2561,1151);
L(2584,1082);
L(2606,1013);
L(2629,943);
L(2652,874);
L(2674,808);
L(2697,746);
L(2719,688);
L(2742,637);
L(2764,593);
L(2787,558);
L(2810,532);
L(2832,516);
L(2855,509);
L(2873,513);
L(2891,526);
L(2910,546);
L(2928,574);
L(2947,610);
L(2965,652);
L(2984,701);
L(3002,755);
L(3020,815);
L(3039,878);
L(3057,944);
L(3076,1014);
L(3094,1085);
L(3113,1158);
L(3131,1231);
L(3149,1305);
L(3168,1378);
L(3186,1450);
L(3205,1522);
L(3223,1592);
L(3242,1660);
L(3260,1726);
L(3278,1791);
L(3297,1853);
L(3315,1912);
L(3334,1969);
L(3352,2024);
L(3371,2075);
L(3389,2124);
L(3407,2169);
L(3426,2211);
L(3444,2249);
L(3463,2284);
L(3481,2314);
L(3500,2340);
L(3518,2362);
L(3536,2379);
L(3555,2392);
L(3573,2399);
L(3592,2401);
L(3607,2401);
L(3622,2400);
L(3637,2398);
L(3652,2396);
L(3667,2392);
L(3682,2388);
L(3697,2384);
L(3712,2379);
L(3727,2373);
L(3742,2366);
L(3757,2358);
L(3772,2350);
L(3787,2342);
L(3802,2333);
L(3817,2323);
L(3832,2312);
L(3847,2301);
L(3862,2289);
L(3878,2277);
L(3893,2264);
L(3908,2250);
L(3923,2236);
L(3938,2221);
L(3953,2206);
L(3968,2189);
L(3983,2173);
L(3998,2155);
L(4013,2137);
L(4028,2119);
L(4043,2099);
L(4058,2080);
L(4073,2060);
L(4088,2040);
L(4103,2020);
L(4118,2001);
L(4133,1982);
L(4148,1966);
L(4163,1953);
L(4178,1944);
L(4193,1940);
L(4204,1956);
L(4215,1972);
L(4225,1987);
L(4236,2002);
L(4247,2016);
L(4257,2030);
L(4268,2044);
L(4279,2057);
L(4289,2069);
L(4300,2082);
L(4310,2093);
L(4321,2104);
L(4332,2115);
L(4342,2126);
L(4353,2135);
L(4364,2145);
L(4374,2154);
L(4385,2162);
L(4396,2170);
L(4406,2178);
L(4417,2185);
L(4428,2192);
L(4438,2198);
L(4449,2204);
L(4459,2210);
L(4470,2215);
L(4481,2220);
L(4491,2224);
L(4502,2228);
L(4513,2232);
L(4523,2235);
L(4534,2238);
L(4545,2241);
L(4555,2243);
L(4566,2245);
L(4576,2246);
L(4587,2247);
L(4598,2248);
L(4608,2249);
L(4619,2249);
L(4619,1381);
L(4608,1382);
L(4598,1385);
L(4587,1389);
L(4576,1393);
L(4566,1399);
L(4555,1405);
L(4545,1413);
L(4534,1421);
L(4523,1431);
L(4513,1441);
L(4502,1452);
L(4491,1464);
L(4481,1476);
L(4470,1489);
L(4459,1503);
L(4449,1518);
L(4438,1533);
L(4428,1549);
L(4417,1565);
L(4406,1581);
L(4396,1599);
L(4385,1616);
L(4374,1634);
L(4364,1652);
L(4353,1670);
L(4342,1688);
L(4332,1707);
L(4321,1726);
L(4310,1744);
L(4300,1763);
L(4289,1781);
L(4279,1800);
L(4268,1818);
L(4257,1836);
L(4247,1854);
L(4236,1872);
L(4225,1889);
L(4215,1907);
L(4204,1923);
L(4193,1940);
L(4178,1938);
L(4163,1935);
L(4148,1930);
L(4133,1922);
L(4118,1912);
L(4103,1900);
L(4088,1886);
L(4073,1870);
L(4058,1850);
L(4043,1829);
L(4028,1805);
L(4013,1778);
L(3998,1749);
L(3983,1717);
L(3968,1683);
L(3953,1647);
L(3938,1608);
L(3923,1568);
L(3908,1525);
L(3893,1481);
L(3878,1436);
L(3862,1390);
L(3847,1343);
L(3832,1295);
L(3817,1248);
L(3802,1201);
L(3787,1155);
L(3772,1110);
L(3757,1067);
L(3742,1025);
L(3727,987);
L(3712,951);
L(3697,919);
L(3682,890);
L(3667,865);
L(3652,844);
L(3637,827);
L(3622,815);
L(3607,808);
L(3592,806);
L(3573,805);
L(3555,803);
L(3536,799);
L(3518,794);
L(3500,789);
L(3481,782);
L(3463,774);
L(3444,766);
L(3426,758);
L(3407,749);
L(3389,741);
L(3371,733);
L(3352,725);
L(3334,718);
L(3315,711);
L(3297,704);
L(3278,698);
L(3260,691);
L(3242,685);
L(3223,679);
L(3205,672);
L(3186,665);
L(3168,657);
L(3149,649);
L(3131,640);
L(3113,631);
L(3094,620);
L(3076,610);
L(3057,598);
L(3039,587);
L(3020,575);
L(3002,563);
L(2984,552);
L(2965,542);
L(2947,532);
L(2928,524);
L(2910,518);
L(2891,513);
L(2873,510);
L(2855,509);
L(2832,510);
L(2810,518);
L(2787,531);
L(2764,549);
L(2742,572);
L(2719,600);
L(2697,632);
L(2674,668);
L(2652,708);
L(2629,752);
L(2606,798);
L(2584,847);
L(2561,897);
L(2539,950);
L(2516,1004);
L(2494,1060);
L(2471,1116);
L(2448,1172);
L(2426,1229);
L(2403,1286);
L(2381,1342);
L(2358,1398);
L(2336,1452);
L(2313,1506);
L(2290,1559);
L(2268,1610);
L(2245,1660);
L(2223,1708);
L(2200,1755);
L(2178,1799);
L(2155,1842);
L(2132,1882);
L(2110,1920);
L(2087,1955);
L(2065,1987);
L(2042,2012);
L(2020,2018);
L(1997,2001);
L(1975,1974);
L(1952,1938);
L(1944,1925);
L(1937,1910);
L(1929,1895);
L(1922,1880);
L(1914,1863);
L(1907,1847);
L(1899,1829);
L(1892,1812);
L(1884,1794);
L(1877,1775);
L(1869,1756);
L(1862,1738);
L(1854,1719);
L(1847,1699);
L(1839,1680);
L(1832,1661);
L(1824,1642);
L(1817,1624);
L(1809,1605);
L(1802,1587);
L(1794,1569);
L(1786,1552);
L(1779,1535);
L(1771,1519);
L(1764,1504);
L(1756,1489);
L(1749,1475);
L(1741,1461);
L(1734,1449);
L(1726,1437);
L(1719,1427);
L(1711,1417);
L(1704,1409);
L(1696,1401);
L(1689,1395);
L(1681,1390);
L(1674,1386);
L(1666,1383);
L(1659,1381);
L(1651,1381);
L(1630,1380);
L(1609,1378);
L(1587,1375);
L(1566,1371);
L(1545,1365);
L(1523,1358);
L(1502,1349);
L(1481,1339);
L(1460,1327);
L(1438,1313);
L(1417,1297);
L(1396,1280);
L(1374,1261);
L(1353,1239);
L(1332,1216);
L(1311,1190);
L(1289,1163);
L(1268,1134);
L(1247,1103);
L(1226,1070);
L(1204,1036);
L(1183,1000);
L(1162,963);
L(1140,926);
L(1119,887);
L(1098,849);
L(1077,811);
L(1055,774);
L(1034,737);
L(1013,702);
L(991,669);
L(970,638);
L(949,609);
L(928,584);
L(906,562);
L(885,543);
L(864,528);
L(843,518);
L(821,511);
L(800,509);
L(821,508);
L(843,512);
L(864,521);
L(885,534);
L(906,552);
L(928,574);
L(949,600);
L(970,629);
L(991,661);
L(1013,695);
L(1034,732);
L(1055,769);
L(1077,808);
L(1098,847);
L(1119,886);
L(1140,925);
L(1162,963);
L(1183,1000);
L(1204,1035);
L(1226,1070);
L(1247,1103);
L(1268,1134);
L(1289,1163);
L(1311,1190);
L(1332,1215);
L(1353,1239);
L(1374,1260);
L(1396,1279);
L(1417,1297);
L(1438,1312);
L(1460,1326);
L(1481,1338);
L(1502,1348);
L(1523,1357);
L(1545,1365);
L(1566,1370);
L(1587,1375);
L(1609,1378);
L(1630,1380);
L(1651,1381);
L(1659,1381);
L(1666,1380);
L(1674,1380);
L(1681,1380);
L(1689,1380);
L(1696,1379);
L(1704,1379);
L(1711,1379);
L(1719,1378);
L(1726,1377);
L(1734,1376);
L(1741,1376);
L(1749,1375);
L(1756,1373);
L(1764,1372);
L(1771,1371);
L(1779,1369);
L(1786,1368);
L(1794,1366);
L(1802,1364);
L(1809,1361);
L(1817,1359);
L(1824,1356);
L(1832,1353);
L(1839,1350);
L(1847,1347);
L(1854,1343);
L(1862,1340);
L(1869,1335);
L(1877,1331);
L(1884,1326);
L(1892,1322);
L(1899,1316);
L(1907,1311);
L(1914,1305);
L(1922,1299);
L(1929,1293);
L(1937,1286);
L(1944,1279);
L(1952,1272);
L(1952,1271);
L(1975,1248);
L(1997,1221);
L(2020,1193);
L(2042,1162);
L(2065,1129);
L(2087,1095);
L(2110,1060);
L(2132,1024);
L(2155,988);
L(2178,952);
L(2200,916);
L(2223,882);
L(2245,850);
L(2268,818);
L(2290,789);
L(2313,762);
L(2336,737);
L(2358,714);
L(2381,693);
L(2403,674);
L(2426,657);
L(2448,642);
L(2471,628);
L(2494,615);
L(2516,603);
L(2539,593);
L(2561,583);
L(2584,573);
L(2606,565);
L(2629,556);
L(2652,548);
L(2674,541);
L(2697,534);
L(2719,528);
L(2742,522);
L(2764,518);
L(2787,514);
L(2810,511);
L(2832,510);
L(2855,509);
L(2873,510);
L(2891,513);
L(2910,518);
L(2928,524);
L(2947,532);
L(2965,542);
L(2984,552);
L(3002,563);
L(3020,575);
L(3039,587);
L(3057,598);
L(3076,610);
L(3094,620);
L(3113,631);
L(3131,640);
L(3149,649);
L(3168,657);
L(3186,665);
L(3205,672);
L(3223,679);
L(3242,685);
L(3260,691);
L(3278,698);
L(3297,704);
L(3315,711);
L(3334,718);
L(3352,725);
L(3371,733);
L(3389,741);
L(3407,749);
L(3426,758);
L(3444,766);
L(3463,774);
L(3481,782);
L(3500,789);
L(3518,794);
L(3536,799);
L(3555,803);
L(3573,805);
L(3592,806);
L(3607,806);
L(3622,809);
L(3637,813);
L(3652,819);
L(3667,826);
L(3682,835);
L(3697,846);
L(3712,858);
L(3727,872);
L(3742,887);
L(3757,904);
L(3772,922);
L(3787,942);
L(3802,964);
L(3817,986);
L(3832,1010);
L(3847,1036);
L(3862,1062);
L(3878,1090);
L(3893,1118);
L(3908,1148);
L(3923,1178);
L(3938,1210);
L(3953,1242);
L(3968,1274);
L(3983,1307);
L(3998,1340);
L(4013,1373);
L(4028,1407);
L(4043,1440);
L(4058,1473);
L(4073,1505);
L(4088,1536);
L(4103,1566);
L(4118,1594);
L(4133,1619);
L(4148,1641);
L(4163,1659);
L(4178,1670);
L(4193,1674);
L(4204,1674);
L(4215,1672);
L(4225,1670);
L(4236,1667);
L(4247,1663);
L(4257,1658);
L(4268,1652);
L(4279,1645);
L(4289,1638);
L(4300,1630);
L(4310,1621);
L(4321,1612);
L(4332,1602);
L(4342,1592);
L(4353,1581);
L(4364,1570);
L(4374,1559);
L(4385,1547);
L(4396,1535);
L(4406,1523);
L(4417,1511);
L(4428,1500);
L(4438,1488);
L(4449,1477);
L(4459,1465);
L(4470,1455);
L(4481,1445);
L(4491,1435);
L(4502,1426);
L(4513,1417);
L(4523,1410);
L(4534,1403);
L(4545,1397);
L(4555,1392);
L(4566,1387);
L(4576,1384);
L(4587,1382);
L(4598,1380);
L(4608,1380);
L(4619,1381);
ctx.stroke();
ctx.closePath();
} // End gnuplot_canvas_plot_4 
ctx.lineWidth = 2;
ctx.strokeStyle = " rgb(000,000,000)";
DT(gnuplot.solid);
ctx.lineWidth = 1;
ctx.beginPath();
M(800,101);
L(800,3800);
L(4619,3800);
L(4619,101);
L(800,101);
ctx.closePath();
ctx.stroke();
ctx.lineWidth = 2;
ctx.strokeStyle = " rgb(160,160,160)";
ctx.beginPath();
M(801,3799);
L(801,100);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = " rgb(000,000,000)";
ctx.strokeStyle = " rgb(160,160,160)";
ctx.beginPath();
M(1652,3799);
L(1652,100);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = " rgb(000,000,000)";
ctx.strokeStyle = " rgb(160,160,160)";
ctx.beginPath();
M(1953,3799);
L(1953,100);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = " rgb(000,000,000)";
ctx.strokeStyle = " rgb(160,160,160)";
ctx.beginPath();
M(2856,3799);
L(2856,100);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = " rgb(000,000,000)";
ctx.strokeStyle = " rgb(160,160,160)";
ctx.beginPath();
M(3593,3799);
L(3593,100);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = " rgb(000,000,000)";
ctx.strokeStyle = " rgb(160,160,160)";
ctx.beginPath();
M(4194,3799);
L(4194,100);
ctx.stroke();
ctx.closePath();
ctx.strokeStyle = " rgb(000,000,000)";
ctx.strokeStyle = " rgb(160,160,160)";
ctx.beginPath();
M(4620,3799);
L(4620,100);
ctx.stroke();
ctx.closePath();
ctx.lineWidth = 1;
ctx.strokeStyle = " rgb(000,000,000)";

// plot boundaries and axis scaling information for mousing 
gnuplot.plot_term_xmax = 600;
gnuplot.plot_term_ymax = 400;
gnuplot.plot_xmin = 80.0;
gnuplot.plot_xmax = 461.9;
gnuplot.plot_ybot = 380.0;
gnuplot.plot_ytop = 10.1;
gnuplot.plot_width = 381.9;
gnuplot.plot_height = 369.9;
gnuplot.plot_axis_xmin = 0;
gnuplot.plot_axis_xmax = 3.17303;
gnuplot.plot_axis_ymin = -13;
gnuplot.plot_axis_ymax = 10;
gnuplot.plot_axis_x2min = "none"
gnuplot.plot_axis_y2min = "none"
gnuplot.plot_logaxis_x = 0;
gnuplot.plot_logaxis_y = 0;
gnuplot.plot_timeaxis_x = "";
gnuplot.plot_timeaxis_y = "";
gnuplot.plot_axis_width = gnuplot.plot_axis_xmax - gnuplot.plot_axis_xmin;
gnuplot.plot_axis_height = gnuplot.plot_axis_ymax - gnuplot.plot_axis_ymin;
}
