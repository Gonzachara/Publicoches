<?php 
  session_start();
  if(isset($_SESSION['unique_id'])){
    header("location: index.html");
  }
?>

<?php include_once "header.php"; ?>



<body>
  <div class="wrapper">
    <section class="form login">
    <a href="index.html" class="back-icon"><i class="fas fa-arrow-left"></i></a>
      <header><img src="images/publicoches logo byw.png" alt=""></header>
      <form action="#" method="POST" enctype="multipart/form-data" autocomplete="off">
        <div class="error-text"></div>
        <div class="field input">
          <label>Dirección de correo electrónico</label>
          <input type="text" name="email" placeholder="Ingresa tu correo electrónico" required>
        </div>
        <div class="field input">
          <label>Contraseña</label>
          <input type="password" name="password" placeholder="Ingresa tu contraseña" required>
          <i class="fas fa-eye"></i>
        </div>
        <div class="field button">
        <input type="submit" name="submit" value="Iniciar Sesión">
        </div>
        <br>
        <div class="google-login">
        
        <?php require ('autentificacion.php')?>
        <center><button><a href="<?php echo $client->createAuthUrl() ?>"><img class="logo-google" src="images/google logo.png" width="20px" height="20px" alt="">Iniciar sesión con Google</a></button></center>
        </div>

      </form>
      <div class="link">¿Aún no te has registrado? <a href="register.php">Regístrate ahora</a></div>
    </section>
  </div>
  
  <script src="js/pass-show-hide.js"></script>
  <script src="js/login.js"></script>

</body>
</html>
