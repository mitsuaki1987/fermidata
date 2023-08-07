<html>
  <head>
    <meta http-equiv="Content-Type"
          content="text/html; charset=utf-8">
    <script type="text/x-mathjax-config">
      MathJax.Hub.Config({ tex2jax: { inlineMath: [['$','$'], ["\\(","\\)"]] } });
    </script>
    <script type="text/javascript"
            src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML">
    </script>
    <meta http-equiv="X-UA-Compatible" CONTENT="IE=EmulateIE7" />

    <title>Database</title>

  </head>
  <body bgcolor="CCFFCC">

    <h2>Search result</h2>

    <?php
    $name = $_GET['name'];
    $obj = json_decode( file_get_contents("data.json"), TRUE );
    // serch reslt
    $names = ["Pb1-151378", "B2Mg1-108064"];
    // search key & value
    $search = ["eform" => "<-0.1", "dosf" => ">0.2"];
    ?>
    search with : 
    <?php
    foreach($search as $key => $value){
      ?>
      <?=$key?><?=$value?> &amp;
      <?php
    }
    ?>

    <table border="1">
      <tr>
        <td>Name</td>
        <?php
        foreach($search as $key => $value){
        ?>
          <td><?=$key?></td>
        <?php
        }
        ?>
      </tr>
    <?php
    foreach($names as $name){
      ?>
      <tr>
        <td><a href="data.php?name=<?=$name?>"><?=$name?></a></td>
        <?php
        foreach($search as $key => $value){
          ?>
            <td><?=$obj[$name][$key]?></td>
          <?php
        }
        ?>
        </tr>
        <?php
      }
    ?>
    </table>

  </body>
</html>

