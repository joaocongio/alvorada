<template>
  <section class="about" id="quemSomos">
    <div class="container">
      <div class="image">
        <img
          src="@/assets/img/image-quem-somos.png"
          alt="Quem somos"
          class="image__one"
        />
        <img src="@/assets/img/image-quem-somos.png" alt="Quem somos" />
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
  margin-top: 80px;

  .container {
    max-width: 95%;
    margin: 0 auto;

    @media (min-width: 800px) {
      max-width: 75%;
      display: flex;
      align-items: flex-start;
    }

    .image {
      display: none;

      @media (min-width: 800px) {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-right: 30px;
      }
      img {
        max-width: 100%;
        height: auto;
      }

      &__one {
        margin-bottom: -5px;
      }
    }

    .description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (min-width: 800px) {
        flex: 1;
        justify-content: flex-start;
        align-items: flex-start;
      }

      .title {
        font-size: 2rem;
        color: var(--secondary);

        @media (min-width: 800px) {
          font-size: 4rem;
        }
      }

      img {
        padding: 40px 0;
      }

      .text {
        font-size: 1rem;
        padding: 10px 0;
        line-height: 1.6;
      }
    }
  }
}
</style>