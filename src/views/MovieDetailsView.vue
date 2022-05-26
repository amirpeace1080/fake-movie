<template>
  <div>
    <router-view />
    <div class="myList">
      <v-container>
        <v-row>
          <v-col
            lg="3"
            sm="6"
            cols="12"
            v-for="(movie, index) in lists"
            :key="index"
          >
            <router-link
              :to="{
                name: 'movie.info',
                params: {
                  direct: movie.directed_by,
                  pic: movie.poster,
                  title: movie.title,
                  link: movie.url,
                  create: movie.crawled_at,
                  description: movie.description,
                  poster: movie.poster,
                },
              }"
            >
              <div class="movie-card">
                <div class="movie-header babyDrive">
                  <img
                    class="image-movie"
                    :src="movie.poster"
                    alt=""
                    srcset=""
                  />
                  <div class="header-icon-container"></div>
                </div>
                <!--movie-header-->
                <div class="movie-content">
                  <div class="movie-content-header">
                    <a href="#">
                      <h3 class="movie-title">{{ movie.title }}</h3>
                    </a>
                    <div class="imax-logo"></div>
                  </div>
                  <div class="movie-info">
                    <div class="info-section">
                      <label>Date &amp; Time</label>
                      <span>{{ movie.crawled_at }}</span>
                    </div>
                    <!--date,time-->
                    <div class="info-section">
                      <label>Screen</label>
                      <span>01</span>
                    </div>
                    <!--screen-->
                    <div class="info-section">
                      <label>Row</label>
                      <span>H</span>
                    </div>
                    <!--row-->
                    <div class="info-section">
                      <label>Seat</label>
                      <span>15</span>
                    </div>
                    <!--seat-->
                  </div>
                </div>
                <!--movie-content-->
              </div>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
      <b-pagination
        class="pagging"
        :total-rows="totalRows"
        v-model="currentPage"
        :per-page="perPage"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      currentPage: 1,
      perPage: 16,
    };
  },
  computed: {
    movieDetail() {
      return this.$store.state.movieDetail.data;
    },
    lists() {
      const items = this.data;
      // Return just page of items needed
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    totalRows() {
      return this.data.length;
    },
  },
  created() {
    // this.loading = true
    this.$store.dispatch("loadMovieDetail").then((res) => {
      //   this.loading = false
      this.data = res.data.data;
    });
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Arimo:400,700");

$manOfSteel: url("http://henrycavill.org/images/Films/2013-Man-of-Steel/posters/3-Walmart-Superman-a.jpg");

$babyDriver: url("https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg");

$theDarkTower: url("http://cdn.collider.com/wp-content/uploads/2017/03/the-dark-tower-poster.jpg");

$bladeRunner2049: url("http://cdn.collider.com/wp-content/uploads/2017/05/blade-runner-2049-poster-ryan-gosling.jpeg");

$text-color: #010b26;

body {
  height: 100%;
  width: 100%;
  background: #e9e9e9;
  font-family: "Arimo", Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: $text-color;
}

* {
  transition: 300ms;
}

.intro {
  text-align: center;
}

ul {
  list-style-type: none;
}

h1,
h2,
h3,
h4,
h5,
p {
  font-weight: 400;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #6abcea;
}

.movie-card {
  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 90%;
  max-width: 315px;
  margin: 2em;
  border-radius: 10px;
  display: inline-block;
}

.movie-header {
  padding: 0;
  margin: 0;
  height: 367px;
  width: 100%;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.manOfSteel {
  background: $manOfSteel;
  background-size: cover;
}

.babyDriver {
  // background: $babyDriver;
  background-size: cover;
}

.theDarkTower {
  background: $theDarkTower;
  background-size: cover;
  background-position: 100% 100%;
}

.bladeRunner2049 {
  background: $bladeRunner2049;
  background-size: cover;
  background-position: 100% 80%;
}

.header-icon-container {
  position: relative;
}

.header-icon {
  width: 100%;
  height: 367px;
  line-height: 367px;
  text-align: center;
  vertical-align: middle;
  margin: 0 auto;
  color: #ffffff;
  font-size: 54px;
  text-shadow: 0px 0px 20px #6abcea, 0px 5px 20px #6abcea;
  opacity: 0.85;
}

.header-icon:hover {
  background: rgba(0, 0, 0, 0.15);
  font-size: 74px;
  text-shadow: 0px 0px 20px #6abcea, 0px 5px 30px #6abcea;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  opacity: 1;
}

.movie-card:hover {
  transform: scale(1.03);
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
}

.movie-content {
  padding: 18px 18px 24px 18px;
  margin: 0;
}

.movie-content-header,
.movie-info {
  display: table;
  width: 100%;
}

.movie-title {
  font-size: 24px;
  margin: 0;
  display: table-cell;
}

.imax-logo {
  width: 50px;
  height: 15px;
  background: url("https://6a25bbd04bd33b8a843e-9626a8b6c7858057941524bfdad5f5b0.ssl.cf5.rackcdn.com/media_kit/3e27ede823afbf139c57f1c78a03c870.jpg")
    no-repeat;
  background-size: contain;
  display: table-cell;
  float: right;
  position: relative;
  margin-top: 5px;
}

.movie-info {
  margin-top: 1em;
}

.info-section {
  display: table-cell;
  text-transform: uppercase;
  text-align: center;
}

.info-section:first-of-type {
  text-align: left;
}

.info-section:last-of-type {
  text-align: right;
}

.info-section label {
  display: block;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 0.5em;
  font-size: 9px;
}

.info-section span {
  font-weight: 700;
  font-size: 11px;
}

@media screen and (max-width: 500px) {
  .movie-card {
    width: 95%;
    max-width: 95%;
    margin: 1em;
    display: block;
  }
}

.image-movie {
  width: 100%;
  height: 100%;
}

.pagging {
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
</style>