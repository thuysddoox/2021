<style type="text/css">
    #slapedform {
    display: block;
}
</style>
<?php
 $file = fopen("data.txt",'a+');
 $name = $_POST['name'];
 $cmt = $_POST['comment'];
 fwrite($file,date('Y-m-d H:i:s'));
 fwrite($file,"\n");
 fwrite($file,$name);
 fwrite($file," : ");
 fwrite($file,$cmt);
 fwrite($file,"\n");
 echo '<script type="text/javascript">
           window.location = "../../indexsc.html"
      </script>';
?>


