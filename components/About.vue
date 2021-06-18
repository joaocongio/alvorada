<template>
  <section class="about" id="quemSomos">
    <div class="container">
      <div class="image">
        <img src="@/assets/img/image-quem-somos2.png" alt="Quem somos" />
      </div>
      <div class="description">
        <h1 class="title">QUEM SOMOS</h1>
        <img
          src="@/assets/img/logo-preto.png"
          class="img"
          alt="Logo Alvorada"
        />

        <p class="text">Barbearia tradicional, localizada em Assis-SP/Brasil</p>
        <p class="text">Corte de cabelo masculino na pegada clássica.</p>
        <p class="text">
          Barba feita com navalha, toalha quente e todo o processo que há anos é
          praticado nas melhores barbearias do mundo.
        </p>
        <p class="text">Agende seu horário</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  margin-top: 60px;

  @media (min-width: 769px) {
    margin-top: 80px;
  }

  .container {
    max-width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 500px) and (max-width: 799px) {
      flex-direction: row;
    }

    @media (min-width: 800px) {
      max-width: 75%;
      flex-direction: row;
      align-items: flex-start;
    }

    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 40px;

      @media (min-width: 500px) {
        flex-direction: column;
        justify-content: initial;
        align-items: initial;
        flex: 1;
        margin-right: 30px;
        padding-top: 0;
      }
      img {
        max-width: 100%;
        height: auto;
      }
    }

    .description {
      display: flex;
      flex-direction: column;

      @media (min-width: 500px) {
        flex: 1;
        justify-content: flex-start;
        align-items: flex-start;
      }

      .title {
        font: 700 2rem "Mate SC", serif;
        letter-spacing: 3px;
        color: var(--secondary);
        padding-bottom: 40px;
        text-align: left;

        @media (min-width: 800px) {
          font: 700 5.3rem "Mate SC", serif;
          text-align: left;
          padding-bottom: 0;
          text-align: center;
        }
      }

      .img {
        padding: 40px 0;
        display: none;

        @media (min-width: 769px) {
          display: block;
        }
      }

      .text {
        font: 500 1rem "Montserrat", sans-serif;
        padding: 10px 0;
        line-height: 1.6;
        color: var(--black-200);
      }
    }
  }
}
</style>
