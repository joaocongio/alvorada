<template>
  <section class="galery" id="galeria">
    <div class="container">
      <h2 class="title">GALERIA</h2>

      <div class="images">
        <div class="images__item">
          <img
            src="@/assets/img/galeria1-min.jpg"
            alt="Imagem"
            @click="abrirImagem"
          />
        </div>
        <div class="images__item">
          <img
            src="@/assets/img/galeria2-min.jpg"
            alt="Imagem"
            @click="abrirImagem"
          />
        </div>
        <div class="images__item">
          <img
            src="@/assets/img/galeria3-min.jpg"
            alt="Imagem"
            @click="abrirImagem"
          />
        </div>
        <div class="images__item">
          <img
            src="@/assets/img/galeria4-min.jpg"
            alt="Imagem"
            @click="abrirImagem"
          />
        </div>
        <div class="images__item">
          <img
            src="@/assets/img/galeria5-min.jpg"
            alt="Imagem"
            @click="abrirImagem"
          />
        </div>
        <div class="images__item">
          <img
            src="@/assets/img/galeria6-min.jpg"
            alt="Imagem"
            @click="abrirImagem"
          />
        </div>
      </div>

      <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <div id="imageModal">
          <img id="img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    abrirImagem() {
      let img = document.getElementsByClassName("images__item");
      let modal = document.getElementById("myModal");
      let imgMod = document.getElementById("img");
      let close = document.getElementsByClassName("close")[0];

      for (let i = 0; i < img.length; i++) {
        img[i].addEventListener("click", () => {
          if ((modal.style.display = "none")) {
            modal.style.display = "block";
            imgMod.src = event.target.currentSrc;
          } else {
            modal.style.display = "block";
          }
        });
      }

      close.addEventListener("click", function() {
        modal.style.display = "none";
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.galery {
  margin-top: 80px;

  @media (min-width: 800px) {
    margin-top: 140px;
  }
  .container {
    max-width: 95%;
    margin: 0 auto;

    @media (min-width: 800px) {
      max-width: 75%;
    }

    .title {
      text-align: center;
      font: 700 2rem "Mate SC", serif;
      letter-spacing: 3px;
      color: var(--secondary);

      @media (min-width: 800px) {
        font: 700 5rem "Mate SC", serif;
      }
    }

    .images {
      padding-top: 60px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      &__item {
        width: 48%;
        margin: 0 5px 3px 0;
        cursor: pointer;

        @media (min-width: 800px) {
          width: 32%;
        }

        img {
          max-width: 100%;
          height: auto;

          @media (min-width: 800px) {
            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
    }

    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      padding-top: 150px;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.9);
    }

    .close {
      position: absolute;
      top: 100px;
      right: 35px;
      color: #f1f1f1;
      font-size: 40px;
      font-weight: bold;
      transition: 0.3s;
    }

    .close:hover,
    .close:focus {
      color: #bbb;
      text-decoration: none;
      cursor: pointer;
    }

    #img {
      margin: auto;
      display: block;
      width: 80%;
      max-width: 700px;

      @media (max-width: 700px) {
        width: 100%;
      }
    }
  }
}
</style>
