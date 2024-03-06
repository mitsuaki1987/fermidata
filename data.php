<?php
  $name = $_GET['name'];
  $obj = json_decode( file_get_contents("data.json"), TRUE )[$name];
  $nat = 0;
  foreach($obj['type'] as $element_val) $nat += $element_val["nat"];
?>

<!DOCTYPE html>
<html>
  <head>
    <title><?=$_GET['name']?></title>
    <meta charset="utf-8">
    <script type="text/javascript" src="./JSmol.min.js"></script>
    <script type="text/javascript"> 

// supersimple2.htm - illustrating the use of jQuery(document).ready to 
// populate all spans and divs AFTER the page is loaded.
// This is good programming practice.

$(document).ready(

function() {

Info = {
	width: 600,
	height: 600,
	debug: false,
	j2sPath: "./j2s",
	color: "0xC0C0C0",
  disableJ2SLoadMonitor: true,
  disableInitialConsole: true,
	addSelectionOptions: false,
	serverURL: "https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
	use: "HTML5",
	readyFunction: null,
    script: "load ./structure/<?=$name?>.xsf {3,3,3}; set perspectiveDepth ON; select;set defaultLabelXYZ \"%e\"; set labelToggle; set labelAtom; set labelOffset 0 0; color labels black"
}

$("#mydiv").html(Jmol.getAppletHtml("jmolApplet0",Info))
}
);

    </script>

<!-- gnuplot head start -->
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <!--[if IE]><script type="text/javascript" src="excanvas.js"></script><![endif]-->
    <script src="./gnuplot/canvastext.js"></script>
    <script src="./gnuplot/gnuplot_common.js"></script>
    <script src="./gnuplot/gnuplot_dashedlines.js"></script>
    <script src="./gnuplot/gnuplot_mouse.js"></script>
    <script type="text/javascript"> gnuplot.help_URL = "/canvas_help.html"; </script>
    <script type="text/javascript">
var canvas, ctx;
gnuplot.grid_lines = true;
gnuplot.zoomed = false;
gnuplot.active_plot_name = "gnuplot_canvas";
    </script>
    <script src="./band/<?=$name?>.js"></script>
    <link type="text/css" href="./gnuplot/gnuplot_mouse.css" rel="stylesheet">
	<!-- gnuplot head end -->
  </head>
  <body bgcolor="CCFFCC" onload="gnuplot_canvas(); gnuplot.init();" oncontextmenu="return false;">

	<h1><?=$name?></h1>
    
	<h2>Crystal structure</h2>
	<span id=mydiv></span>

  <h2>Properties</h2>

  <p>Number of atoms per unit cell : <?=$nat?></p>
  <p>Formation energy : <?=$obj['eform']?> eV/atom</p>
  <p>Magnetization : <?=$obj['magt']?> &mu;<sub>B</sub>/atom</p>
  <p>DOS at E<sub>F</sub> : <?=$obj['dosf']?> /eV/atom (both spin)</p>

	<h2>Band structure</h2>
    <div class="gnuplot">
      <canvas id="Tile" width="32" height="32" hidden></canvas>
      <table class="mbleft">
        <tr>
          <td class="mousebox">
            <table class="mousebox" border=0>
              <tr>
                <td class="mousebox">
                  <table class="mousebox" id="gnuplot_mousebox" border=0>
                    <tr><td class="mbh"></td></tr>
                    <tr>
                      <td class="mbh">
                        <table class="mousebox">
                          <tr>
                            <td class="icon"></td>
                            <td class="icon" onclick=gnuplot.toggle_grid><img src="./gnuplot/grid.png" id="gnuplot_grid_icon" class="icon-image" alt="#" title="toggle grid"></td>
                            <td class="icon" onclick=gnuplot.unzoom><img src="./gnuplot/previouszoom.png" id="gnuplot_unzoom_icon" class="icon-image" alt="unzoom" title="unzoom"></td>
                            <td class="icon" onclick=gnuplot.rezoom><img src="./gnuplot/nextzoom.png" id="gnuplot_rezoom_icon" class="icon-image" alt="rezoom" title="rezoom"></td>
                            <td class="icon" onclick=gnuplot.toggle_zoom_text><img src="./gnuplot/textzoom.png" id="gnuplot_textzoom_icon" class="icon-image" alt="zoom text" title="zoom text with plot"></td>
                            <td class="icon" onclick=gnuplot.popup_help()><img src="./gnuplot/help.png" id="gnuplot_help_icon" class="icon-image" alt="?" title="help"></td>
                          </tr>
                          <tr>
                            <td class="icon" onclick=gnuplot.toggle_plot("gp_plot_1")>1</td>
                            <td class="icon" > </td>
                            <td class="icon" > </td>
                            <td class="icon" > </td>
                            <td class="icon" > </td>
                            <td class="icon" > </td>
	                        </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td class="mousebox">
                  <table class="mousebox" id="gnuplot_mousebox" border=1>
                    <tr>
                      <td class="mb0">x&nbsp;</td>
                      <td class="mb1"><span id="gnuplot_canvas_x">&nbsp;</span></td>
                    </tr>
                    <tr>
                      <td class="mb0">y&nbsp;</td>
                      <td class="mb1"><span id="gnuplot_canvas_y">&nbsp;</span></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          <td>
            <table class="plot">
              <tr>
                <td>
                  <canvas id="gnuplot_canvas" width="600" height="400" tabindex="0">
                    Sorry, your browser seems not to support the HTML 5 canvas element
                  </canvas>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
    <h2>Fermi surface and PDOS (/eV/atom both spin)</h2>
    
    <?php
    foreach($obj['type'] as $element => $val1){
      foreach($val1 as $n => $val2){
        foreach($val2 as $l => $tnl_obj){
          $orb = $element . $n . $l;
          $pdos0 = 0.0;
          foreach($tnl_obj["pdos"] as $pdos) $pdos0 += $pdos;
          $pdos0 /= $nat;
          ?>
          <li><a href="./fermisurfer/index.php?frmsf=../fermi/<?=$name?>-<?=$orb?>.js" 
          target="_blank"><?=$orb?></a>
           : <?=$pdos0?></li>
          <?php
        }
      }
    }
    ?>

    <h2>Input and output</h2>
    <ul>
      <li><a href="./scfin/scf_<?=$name?>.in">SCF input</a></li>
      <li><a href="./scfout/scf_<?=$name?>.out">SCF output</a></li>
    </ul>

  </body>
</html>
