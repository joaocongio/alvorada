<template>
  <footer class="footer">
    <div class="container">
      <div class="logo">
        <img
          src="@/assets/img/logo-branco-pequeno.png"
          alt="Logo Barbearia Alvorada"
        />
      </div>

      <div class="socials">
        <a
          href="https://api.whatsapp.com/send/?phone=5518998076397&text&app_absent=0"
          target="_blank"
          rel="noopener"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.821 14.1211C15.58 14.8033 14.622 15.3677 13.858 15.5327C13.335 15.6437 12.653 15.7316 10.355 14.7793C7.774 13.71 4.19 9.90097 4.19 7.36621C4.19 6.07582 4.934 4.57324 6.235 4.57324C6.861 4.57324 6.999 4.58545 7.205 5.07959C7.446 5.66177 8.034 7.09612 8.104 7.24316C8.393 7.84634 7.80999 8.19945 7.38699 8.72461C7.25199 8.88265 7.099 9.05358 7.27 9.34766C7.44 9.63575 8.028 10.5941 8.892 11.3633C10.008 12.3576 10.913 12.675 11.237 12.8101C11.478 12.9101 11.766 12.8868 11.942 12.6987C12.165 12.4577 12.442 12.0577 12.724 11.6636C12.923 11.3815 13.176 11.3463 13.441 11.4463C13.62 11.5083 15.895 12.5648 15.991 12.7339C16.062 12.8569 16.062 13.4389 15.821 14.1211ZM10.002 0H9.99699C4.48399 0 0 4.48535 0 10C0 12.1867 0.705007 14.2153 1.90401 15.8608L0.658005 19.5767L4.50101 18.3486C6.08201 19.395 7.969 20 10.002 20C15.515 20 20 15.5147 20 10C20 4.48535 15.515 0 10.002 0Z"
              fill="white"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/barbeariaalvorada/"
          target="_blank"
          rel="noopener"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/barbeariaalvorada/"
          target="_blank"
          rel="noopener"
        >
          <svg
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.82129 20V11H9.55368L10 7H6.82129V5.05176C6.82129 4.02176 6.8476 3 8.2869 3H9.74469V0.140137C9.74469 0.0971367 8.49249 0 7.22568 0C4.57999 0 2.9234 1.6572 2.9234 4.7002V7H0V11H2.9234V20H6.82129Z"
              fill="white"
            />
          </svg>
        </a>
      </div>

      <div class="texts">
        <p>
          R. Antônio Luciano Gomes, 141 - Jardim Canada, Assis - SP, 19801-000
        </p>
        <p>Copyright © 2021. Todos os direitos reservados</p>
      </div>

      <div class="created">
        <p>Feito por <a href="">João Goularte</a></p>
      </div>

      <div class="whatsapp">
        <span class="close" v-if="closeWhats" @click="closeWhats = !closeWhats"
          >&times;</span
        >
        <a
          href="https://api.whatsapp.com/send/?phone=5518998076397&text&app_absent=0"
          target="_blank"
          rel="noopener"
          class="agendar"
          v-if="closeWhats"
          >AGENDAR HORÁRIO</a
        >
        <a
          href="https://api.whatsapp.com/send/?phone=5518998076397&text&app_absent=0"
          target="_blank"
          rel="noopener"
        >
          <img
            src="@/assets/img/whatsapp-alvorada.png"
            alt="WhatsApp Alvorada"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      closeWhats: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: var(--primary);
  margin-top: 80px;

  .container {
    max-width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px 0;

    .logo {
      img {
        max-width: 100%;
        height: auto;
      }
    }

    .socials {
      padding: 20px 0;

      a {
        margin: 0 10px;
      }
    }

    .texts {
      p {
        color: var(--white);
        line-height: 1.6;
        padding: 5px 0;
        text-align: center;
      }
    }

    .created {
      padding-top: 20px;
      p {
        color: var(--white);

        a {
          font-weight: 700;
          text-decoration: none;
          color: var(--white);
        }
      }
    }

    .whatsapp {
      position: fixed;
      right: 20px;
      bottom: 20px;
      display: flex;
      align-items: center;

      a {
        img {
          width: 80px;
        }
      }

      .agendar {
        background: #16ca5b;
        color: var(--white);
        font-size: 1.1rem;
        padding: 20px;
        border-radius: 10px;
        text-decoration: none;
        margin-right: 15px;
      }

      .close {
        position: absolute;
        right: 0;
        top: -40px;
        font-size: 2rem;
        color: #16ca5b;
        cursor: pointer;
      }
    }
  }
}
</style>