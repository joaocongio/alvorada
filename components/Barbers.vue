<template>
  <section class="barbers" id="barbeiros">
    <div class="container">
      <div class="title">
        <h1>BARBEIROS</h1>
        <p>
          Nossos barbeiros estão esperando por você! Conheça um pouco mais, cada
          um deles ;D
        </p>
      </div>

      <div class="allBarbers">
        <div class="allBarbers__item">
          <img src="@/assets/img/logo-preto.png" alt="barbeiro" />
          <p class="name">Lorem, <span>20 anos</span></p>
          <p class="text">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div class="allBarbers__item">
          <img src="@/assets/img/logo-preto.png" alt="barbeiro" />
          <p class="name">Lorem, <span>20 anos</span></p>
          <p class="text">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div class="allBarbers__item">
          <img src="@/assets/img/logo-preto.png" alt="barbeiro" />
          <p class="name">Lorem, <span>20 anos</span></p>
          <p class="text">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.barbers {
  background: var(--secondary);
  margin-top: 80px;

  .container {
    max-width: 95%;
    margin: 0 auto;
    padding: 30px 0;

    @media (min-width: 800px) {
      max-width: 75%;
      padding: 30px 0 100px 0;
    }

    .title {
      h1 {
        color: var(--white);
        font-size: 2rem;
        padding-bottom: 10px;

        @media (min-width: 800px) {
          font-size: 4rem;
        }
      }

      p {
        color: var(--gray-500);
        line-height: 1.6;
      }
    }

    .allBarbers {
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;

      &__item {
        background-color: #dfdfdf;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 30px;
        width: 100%;
        padding: 30px 10px;
        box-shadow: 5px 10px 8px var(--primary);

        @media (min-width: 500px) {
          width: 30%;
          margin: 0 10px;

          &:hover {
            position: relative;
            top: -20px;
          }
        }

        .name {
          font-weight: 700;
          padding: 15px 0 20px 0;

          span {
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>