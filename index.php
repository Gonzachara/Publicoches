<?php 
  session_start();
  if(isset($_SESSION['unique_id'])){
    header("location: index.html");
  }
?>


<?php include_once "header.php"; ?>



<body>
  <div class="wrapper">
    <section class="form signup">
      <header><img src="images/publicoches logo byw.png" alt=""></header>
      <form action="#" method="POST" enctype="multipart/form-data" autocomplete="off">
        <div class="error-text"></div>
        <div class="name-details">
          <div class="field input">
            <label>Nombre</label>
            <input type="text" name="fname" placeholder="Nombre" required>
          </div>
          <div class="field input">
            <label>Apellido</label>
            <input type="text" name="lname" placeholder="Apellido" required>
          </div>
        </div>
        <div class="field input">
          <label>Dirección de correo electrónico</label>
          <input type="text" name="email" placeholder="Ingresa un correo electrónico" required>
        </div>
        <div class="field input">
          <label>Contraseña</label>
          <input type="password" name="password" placeholder="Ingresa una contraseña" required>
          <i class="fas fa-eye"></i>
        </div>
    
        <div class="field button">
          <input type="submit" name="submit" value="Registrarse">
        </div>
      </form>
      <div class="link">¿Ya te registraste? <a href="login.php">Inicia sesión ahora</a></div>
    </section>
  </div>

  <script src="js/pass-show-hide.js"></script>
  <script src="js/signup.js"></script>

</body>
</html>
