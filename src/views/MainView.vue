<!-- eslint-disable -->
<template>
  <div class="row">
    <div class="container">
      <div class="row flex-lg-row-reverse align-items-center g-5 px-2 py-1">
        <div class="col-10 col-sm-8 col-lg-6">
          <img src="../assets/images/hero.png" class="d-block mx-lg-auto img-fluid" alt="Image by pch.vector on Freepik" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-6 fw-bold text-body-emphasis lh-1 mb-3">La tua libereria sempre a portata di click</h1>
          <p class="lead">Scegli il tuo libro preferito e ricevilo a casa tua</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Come funziona?</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <h1 display-6 fw-bold>I libri più venduti</h1>
      <div id="carouselExampleCaptions" class="carousel slide p-4 mb-5 mb-sm-3">
        <div class="carousel-indicators d-none d-lg-flex">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href="#"><img src="../assets/images/img1.png" class="d-block" alt="test"></a>
            <div class="carousel-caption text-start">
              <h5 class="fs-4"><a href="#">Maria Rossi</a></h5>
              <h5 class="fs-3"><a href="#">Titolo libro 1</a></h5>
              <p><a href="#">13.00 €</a></p>
              <p class="d-none d-xl-block">Violette Toussaint è guardiana di un cimitero di una cittadina della Borgogna. Ricorda un po' Renée, la protagonista dell'Eleganza del riccio, perché come lei nasconde dietro un'apparenza sciatta una grande personalità e una vita piena di misteri. Durante le visite tante persone si avvicinano a questa donna generosa.</p>
              <a href="#" class="btn btn-primary">Dettagli</a>
            </div>
          </div>
          <div class="carousel-item">
            <a href="#"><img src="../assets/images/img2.png" class="d-block" alt="test"></a>
            <div class="carousel-caption text-start">
              <h5><a href="#">Rita Verdi</a></h5>
              <h5><a href="#">Titolo libro 2</a></h5>
              <p><a href="#">18.00 €</a></p>
              <p class="d-none d-xl-block">Violette Toussaint è guardiana di un cimitero di una cittadina della Borgogna. Ricorda un po' Renée, la protagonista dell'Eleganza del riccio, perché come lei nasconde dietro un'apparenza sciatta una grande personalità e una vita piena di misteri. Durante le visite.</p>
              <a href="#" class="btn btn-primary">Dettagli</a>
            </div>
          </div>
          <div class="carousel-item">
            <a href="#"><img src="../assets/images/img3.png" class="d-block" alt="test"></a>
            <div class="carousel-caption text-start">
              <h5><a href="#">Antonio Bianchi</a></h5>
              <h5><a href="#">Titolo libro 3</a></h5>
              <p><a href="#">16.00 €</a></p>
              <p class="d-none d-xl-block">Violette Toussaint è guardiana di un cimitero di una cittadina della Borgogna. Ricorda un po' Renée, la protagonista dell'Eleganza del riccio, perché come lei nasconde dietro un'apparenza sciatta una grande personalità e una vita piena di misteri. Durante le visite.</p>
              <a href="#" class="btn btn-primary">Dettagli</a>
            </div>
          </div>
          <div class="carousel-item">
            <a href="#"><img src="../assets/images/img1.png" class="d-block" alt="test"></a>
            <div class="carousel-caption text-start">
              <h5 class="fs-4"><a href="#">Gianni Neri</a></h5>
              <h5 class="fs-3"><a href="#">Titolo libro 4</a></h5>
              <p><a href="#">15.50 €</a></p>
              <p class="d-none d-xl-block">Violette Toussaint è guardiana di un cimitero di una cittadina della Borgogna. Ricorda un po' Renée, la protagonista dell'Eleganza del riccio, perché come lei nasconde dietro un'apparenza sciatta una grande personalità e una vita piena di misteri. Durante le visite.</p>
              <a href="#" class="btn btn-primary">Dettagli</a>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="px-4 py-5 my-5 text-center blue-light">
    <h1 class="display-6 fw-bold">Sconto del 10% sul primo ordine</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Registrati gratuitamente e ottieni subito un codice sconto per il tuo primo acquisto.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Registrati ora!</button>
      </div>
    </div>
  </div>
  </div>
</template>