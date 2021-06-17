<template>
  <header class="header">
    <nav class="navbar">
      <a href="/"
        ><img
          src="@/assets/img/logo.png"
          class="navbar__logo"
          alt="Logo Barbearia Alvorada"
      /></a>

      <svg
        @click="openMenu"
        id="icon-menu"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="none"
        width="40px"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
      </svg>

      <div class="overlay" v-if="isActive" @click="closeMenu"></div>

      <div id="menu" :class="{ active: isActive }">
        <img
          src="@/assets/img/logo.png"
          class="logo-menu"
          alt="Logo Barbearia Alvorada"
        />
        <ul class="nav">
          <li class="nav__item">
            <a href="#quemSomos" class="nav__link" @click="menu">QUEM SOMOS</a>
          </li>
          <li class="nav__item">
            <a href="#servicos" class="nav__link" @click="menu">SERVIÇOS</a>
          </li>
          <li class="nav__item">
            <a href="#galeria" class="nav__link" @click="menu">GALERIA</a>
          </li>
          <li class="nav__item">
            <a href="#barbeiros" class="nav__link" @click="menu">BARBEIROS</a>
          </li>
          <li class="nav__item">
            <a href="#contato" class="nav__link" @click="menu">CONTATO</a>
          </li>
        </ul>

        <div class="schedule">
          <a href="https://api.whatsapp.com/send/?phone=5518998076397&text&app_absent=0" target="_blank" rel="noopener">AGENDAR HORÁRIO</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    openMenu() {
      this.isActive = true;
    },
    closeMenu() {
      this.isActive = false;
    },
    menu() {
      const menuItems = document.querySelectorAll(".nav__item");

      menuItems.forEach((item) =>
        item.addEventListener("click", scrollToIdOnClick)
      );

      function scrollToIdOnClick(event) {
        event.preventDefault();
        const toSection = getScrollTopByHref(event.target);

        scrollToPosition(toSection);
      }

      const getScrollTopByHref = (element) => {
        const id = element.getAttribute("href");
        return document.querySelector(id).offsetTop;
      };

      const scrollToPosition = (toSection) => {
        window.scroll({
          top: toSection - 85,
          behavior: "smooth",
        });
      };
    },
  },
};
</script>


<style lang="scss" scoped>
.header {
  background: var(--primary);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99999999;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 95%;
    margin: 0 auto;
    height: 80px;

    @media (min-width: 800px) {
      max-width: 75%;
    }

    &__logo {
      width: 70px;
    }

    #icon-menu {
      @media (min-width: 800px) {
        display: none;
      }
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 40%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.8);

      @media (min-width: 800px) {
        display: none;
      }
    }

    #menu {
      position: fixed;
      top: 0;
      right: 0;
      background: var(--primary);
      width: 60%;
      height: 100vh;
      display: none;

      @media (min-width: 800px) {
        position: static;
        display: flex;
        height: 80px;
        width: auto;
      }

      .logo-menu {
        width: 60px;
        margin-top: 30px;

        @media (min-width: 800px) {
          display: none;
        }
      }

      .nav {
        margin-top: 35px;

        @media (min-width: 800px) {
          display: flex;
          align-items: center;
          margin: 0 50px 0 0;
        }

        &__item {
          list-style: none;
          padding: 8px 0;
          text-align: center;

          @media (min-width: 800px) {
            margin: 0 20px;
          }
        }

        &__link {
          text-decoration: none;
          color: var(--white);
          font-size: 1.1rem;
          transition: 0.3s;

          &:hover {
            color: var(--secondary);
          }
        }
      }

      .schedule {
        margin-top: 40px;
        display: flex;
        align-items: center;

        a {
          background: var(--secondary);
          padding: 10px;
          border-radius: 10px;
          color: var(--black-500);
          text-decoration: none;
          box-shadow: 5px 5px 10px var(--black-500);

          &:hover {
            background: #df9a4c;
          }
        }

        @media (min-width: 800px) {
          margin-top: 0;
        }
      }
    }

    .active {
      display: flex !important;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>