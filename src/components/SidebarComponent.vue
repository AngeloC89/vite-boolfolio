<template>
  <button id="btnC" class="btn d-none d-lg-block" type="button" data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i
      class="fa-solid fa-arrow-right-to-bracket fs-1"></i></button>

  <button id="btnMobile" class="btn d-lg-none" type="button" data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i
      class="fa-solid fa-bars fs-1"></i></button>

  <div class="offcanvas offcanvas-start" data-bs-dismiss="offcanvas" data-bs-scroll="true" tabindex="-1"
    id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
    <div class="offcanvas-header d-flex flex-column">
      <!-- <h5 class="offcanvas-title" id="offcanvasLabel">possibilmente un logo</h5> -->
      <ul class="d-flex flex-column align-items-start">
        <li v-for="(item, index) in menuItems" :key="index" class="list-unstyled">
          <router-link :to="{ name: item.name }" class="nav-link" active-class="active">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SidebarComponent",
    data() {
      return {
        menuItems: [
          {
            name: "home",
            label: "#Home",
          },
          {
            name: "projects",
            label: "#Projects",
          },
          {
            name: "about-me",
            label: "#About Me"
          },


          // {
          //     name: 'contact',
          //     label: 'Contact'
          // }
        ],

        nam: "",
      };
    },

    methods: {
      changeClass() {
        const offcanvas = document.getElementById("offcanvasWithBothOptions");

        if (window.innerWidth < 576) {
          offcanvas.classList.add("offcanvas-top");
        } else {
          offcanvas.classList.add("offcanvas-start");
        }
      }
    },

    mounted() {
      this.changeClass();
    }

  };
</script>

<style lang="scss" scoped>
  #btnC {
    position: fixed;
    top: 45%;
    z-index: 1000;

  }


  .offcanvas {
    width: 25%;
    background-color: transparent;
    box-shadow: inset 400px 0px 108px -64px rgb(255, 255, 255);
    border: none;

    ul {
      margin-top: 200px;


      li {
        color: rgb(22, 22, 130);
        font-size: 6rem;
        font-weight: 500;
        font-family: "Caveat", cursive;

        a {
          width: 400px;
        }
      }
    }
  }


  @media screen and (max-width: 576px) {

    #btnMobile {
      position: fixed;
      top: 20px;
      right: 9px;
      z-index: 1000;
    }

    .offcanvas {
      width: 100%;
      height: 100%;
      background-color: transparent;
      //box-shadow: inset 400px 0px 108px -64px rgb(255, 255, 255);
      border: none;
    }

  }

</style>
