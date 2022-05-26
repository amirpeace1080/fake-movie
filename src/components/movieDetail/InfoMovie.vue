<template>
  <div>
    <section class="bg-dark pt-3 pb-5">
      <div class="container p-0 bg-dark">
        <!-- ROW TITLE -->
        <div class="row">
          <div class="col">
            <h5 id="movie-title" class="starwars-yellow text-center">
              {{ titleMovie }}
            </h5>
          </div>
        </div>
        <!-- ROW VIDEO -->
        <div class="row d-flex justify-content-center">
          <div class="col">
            <div>
              <v-img class="img-movie" width="800" height="700" :src="picMovie" />
            </div>
          </div>
        </div>
        <!-- ROW DESCRIPTION -->
        <div class="row p-0">
          <div class="col text-white mx-5">
            <p class="pt-3">
              <span class="text-danger">Description</span>
              {{ descriptionMovie }}.
            </p>
            <p><span class="text-danger">Director:</span> {{ directMovie }}</p>
            <!-- <p>
            <span class="text-danger">Writer:</span> George Lucas
          </p> -->
            <p>
              <span class="text-danger">Stars:</span> Ewan McGregor, Liam
              Neeson, Natalie Portman
            </p>
            <p>
              <a
                :href="linkMovie"
                class="btn btn-outline-warning"
                target="_blank"
                >Download</a
              >
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      directMovie: this.$route.params.direct,
      dateMovie: this.$route.params.create,
      descriptionMovie: this.$route.params.description,
      titleMovie: this.$route.params.title,
      linkMovie: this.$route.params.link,
      picMovie: this.$route.params.poster,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  border-bottom: 5px solid orange;
  background-color: #010101;
  font-size: 1.2em;
}

#movie-title {
  font-family: "Poller One", cursive;
  font-size: 2em;
}

.starwars-yellow {
  color: #ffe81f;
}
.img-movie{
  margin-left: auto;
  margin-right: auto;
}
</style>