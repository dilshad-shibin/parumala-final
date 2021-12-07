<!DOCTYPE html>
<html lang="en" style="scroll-behavior: smooth;">
<head>
<title>Appointment</title>
<!-- Style Links -->
<?php include('header/head.php'); ?>
</head>

<body>
    
    <div class="body_wraper">


            <!-- Header -->
            <?php include('header/header.php'); ?>

            <!-- banner start -->
            <section class="section about-banner">
                <div class="innerbanner-overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="bread-text bread-text2">
                                <h1><span>Appointment</span></h1>
                                <!-- <p>St. Gregorios Medical Mission Hospital</p> -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Appointment Area -->
            <section class="appointment-area section">
                <div class="container">
                    <div class="appointment-form-two">
                        <div class="appointment-image" style="background-image:url(assets/img/apmnt.jpg)"></div>
                        <div class="form-wrap">
                            <div class="section-heading">
                                <span class="tagline">Make an Appointment</span>
                                <h2 class="title">Fill up the form to get our Medical Services</h2>
                            </div>
                            <form action="">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="input-field">
                                            <input type="text" name="" id="" placeholder="Your Full Name">
                                        </div>
                                    </div>
                                    <div class="col-md-6">  
                                        <div class="input-field">
                                            <input type="text" name="" id="" placeholder="Your Number">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-field">
                                            <input type="email" name="" id="" placeholder="Your Email">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-field">
                                            <input type="date" name="" id="">
                                        </div>
                                    </div>
                                    <!-- <div class="col-md-6">
                                        <div class="input-field">
                                            <input type="text" name="" id="" placeholder="Your Number">
                                        </div>
                                    </div> -->
                                    <div class="col-md-6">
                                    <div class="input-field">
                                            <button type="submit" class="apt-btn"> Make an Appointment <i class="fas fa-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            

            <!-- Footer -->
            <?php include('footer/footer.php'); ?>
            
    </div>
    <!-- close body wrapper -->

    <!-- Scripts -->
    <?php include('footer/script.php'); ?>


</body>
</html>