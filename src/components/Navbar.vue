<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="background-color: #9e9e9e">
      <b-navbar-brand class="d-none d-sm-block" to="/">
        <v-img width="30" height="30" src="../../public/logo.png" />
      </b-navbar-brand>

      <b-navbar-brand class="d-block d-sm-none" to="/cart">
        <v-icon style="color: white">mdi-cart</v-icon>
        <span>{{ this.$store.state.cart.length }}</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/movieDetail">MovieDetails</b-nav-item>
          <b-nav-item to="/product">Product</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="cart-item">
          <b-nav-item class="d-none d-sm-block" to="/cart">
            <v-icon style="color: white">mdi-cart</v-icon>
            <span>{{ this.$store.state.cart.length }}</span>
          </b-nav-item>
          <!-- <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
          </b-nav-form> -->

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->

          <!-- <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cart-item {
  position: absolute;
  padding: 20px;
  right: 0px;
}
</style>