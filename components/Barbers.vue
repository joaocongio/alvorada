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
          <img src="@/assets/img/barber1.jpg" alt="barbeiro" />
          <p class="name">Nome <span>(Apelido)</span></p>
        </div>
        <div class="allBarbers__item">
          <img src="@/assets/img/barber2.jpg" alt="barbeiro" />
          <p class="name">Nome <span>(Apelido)</span></p>
        </div>
        <div class="allBarbers__item">
          <img src="@/assets/img/barber3.jpg" alt="barbeiro" />
          <p class="name">Nome <span>(Apelido)</span></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.barbers {
  background: var(--primary);
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
        font: 700 2rem "Mate SC", serif;
        letter-spacing: 3px;
        padding-bottom: 10px;

        @media (min-width: 800px) {
          font: 700 5.3rem "Mate SC", serif;
        }
      }

      p {
        color: rgb(235, 235, 235);
        line-height: 1.6;
        font-family: "Montserrat", sans-serif;
      }
    }

    .allBarbers {
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;

      @media (min-width: 800px) {
        margin-top: 50px;
      }

      &__item {
        background-color: var(--white);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 30px;
        width: 100%;
        padding: 30px 10px;

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
          font-family: "Montserrat", sans-serif;

          span {
            font-weight: 500;
            font-family: "Montserrat", sans-serif;
          }
        }

        img {
          max-width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>
