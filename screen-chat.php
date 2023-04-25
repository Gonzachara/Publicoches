<?php 
  session_start();
  include_once "php/config.php";
  if(!isset($_SESSION['unique_id'])){
    header("location: login.php");
  }
?>
<?php include_once "header.php"; ?>


<body>



  <div class="wrapper">
    <section class="users">
    <a href="index.html" class="back-icon"><i class="fas fa-arrow-left"></i></a>
      <div class="search">
        <span class="text">Seleccione un usuario para iniciar el chat</span>
        <input type="text" placeholder="Introduce el nombre para buscar...">
        <button><i class="fas fa-search"></i></button>
      </div>
      <div class="users-list">
  
      </div>
    </section>
  </div>

  <script src="js/users.js"></script>

</body>
</html>