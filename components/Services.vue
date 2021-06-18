<template>
  <section class="services" id="servicos">
    <div class="imageBG"></div>
    <div class="container">
      <div class="title">
        <h2>SERVIÇOS</h2>
        <div class="bg"></div>
      </div>

      <div class="allServices">
        <div class="allServices__item" v-for="(corte, i) in cortes" :key="i">
          <p>{{ corte.descricao }}</p>
          <p>{{ corte.valor }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cortes: [
        {
          descricao: "CORTE MASCULINO",
          valor: "R$ 35,00"
        },
        {
          descricao: "CORTE MASCULINO + BARBA",
          valor: "R$ 60,00"
        },
        {
          descricao: "BARBA",
          valor: "R$ 35,00"
        },
        {
          descricao: "CORTE INFANTIL",
          valor: "R$ 25,00"
        },
        {
          descricao: "OUTROS CORTES",
          valor: "R$ 35,00"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.services {
  margin-top: 80px;
  position: relative;
  .imageBG {
    &::after {
      content: "";
      background: url("@/assets/img/servicos.jpg") no-repeat;
      background-size: cover;
      background-attachment: fixed;
      position: absolute;
      z-index: -999;
      width: 100%;
      height: 110%;
    }
  }

  .container {
    max-width: 95%;
    margin: 0 auto;
    padding-top: 50px;

    @media (min-width: 800px) {
      max-width: 75%;
    }

    .title {
      h2 {
        color: var(--white);
        text-align: center;
        font: 700 2rem "Mate SC", serif;
        letter-spacing: 3px;

        @media (min-width: 800px) {
          font: 700 5rem "Mate SC", serif;
        }
      }

      .bg {
        background: var(--gray-800);
        width: 155px;
        height: 25px;
        margin: 0 auto;
        position: relative;
        top: -20px;
        z-index: -1;

        @media (min-width: 769px) {
          width: 335px;
          height: 50px;
          top: -50px;
        }
      }
    }

    .allServices {
      padding-top: 40px;
      &__item {
        display: flex;
        justify-content: space-between;
        padding: 15px 0;
        border-bottom: 1px dashed var(--white);

        p {
          color: var(--white);
          font-weight: 800;

          @media (min-width: 800px) {
            font-size: 1.7rem;
          }

          &:nth-child(2) {
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
