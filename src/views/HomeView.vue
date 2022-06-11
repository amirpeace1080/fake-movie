<template>
  <div id="app">
    <h1>Memory Game</h1>
    <p>Turn: {{ turn }}</p>
    <main id="board-game">
      <div
        v-for="(card, index) in deckOfCards"
        @click="onClick(card, index)"
        :class="['card', isFlippedClass(card)]"
        :key="card.id"
      >
        <div class="front"></div>
        <div class="back">{{ card.content }}</div>
      </div>
    </main>
    <button v-if="allPairsAreFound" @click="replay()">Play again</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return{
      timer: null,
      turn: 0,
      flippedCards: [],
      deckOfCards: [],
      allPairsAreFound: false,
      cards: ["🎈", "🎆", "🎇", "🎉", "⚽", "🍟"]
    }
  },
  methods: {
    isFlippedClass({ id, isPairFound }) {
      return {
        flipped: this.flippedCards.find((x) => x.id === id),
        matchingPair: isPairFound
      };
    },
    onClick(card, index) {
      if (!card.isPairFound) {
        clearTimeout(this.timer);
        this.flippedCards =
          this.flippedCards.length === 2
            ? [{ ...card, index }]
            : [...this.flippedCards, { ...card, index }];
      }
    },
    shuffle(cards) {
      return cards.sort(() => Math.random() - 0.5);
    },
    replay() {
      clearTimeout(this.timer);
      this.turn = 0;
      this.flippedCards = [];
      this.cards = this.cards.map((x) => {
        return { ...x, isPairFound: false };
      });
      this.deckOfCards = this.shuffle(this.cards);
    }
  },
  watch: {
    flippedCards(cards) {
      if (cards.length === 2) {
        this.turn++;
        if (cards[0].content === cards[1].content) {
          this.deckOfCards[cards[0].index].isPairFound = true;
          this.deckOfCards[cards[1].index].isPairFound = true;
        } else if (cards[0].content !== cards[1].content) {
          const self = this;
          this.timer = setTimeout(() => {
            self.flippedCards = [];
          }, 2000);
        }
        this.allPairsAreFound = this.deckOfCards.every((x) => x.isPairFound);
      }
    }
  },
  mounted() {
    // Create all cards obj
    this.cards = this.cards.map((x, index) => {
      return { id: index, content: x, isPairFound: false };
    });

    // Dupplicate obj to get pairs and concat them to the existing array
    this.cards = this.cards.concat(
      this.cards.slice().map(({ content, id }) => {
        return { id: this.cards.length + id, content };
      })
    );

    this.deckOfCards = this.shuffle(this.cards);
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Arial";
  margin: 0;
  padding: 0;
}

body {
  background: #252b31;
  color: #a0ba2d;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app {
  width: 85%;
  margin: 0 auto;
  padding-top: 30px;
  max-width: 630px;
}

h1 {
  text-align: center;
  font-size: 3.3rem;
  text-transform: uppercase;
}

p {
  font-size: 1.5rem;
  margin: 10px 0 20px 0px;
  text-align: right;
}

main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  width: 100%;
  justify-items: center;
  column-gap: 10px;
  row-gap: 10px;
  margin-bottom: 25px;
}

.card {
  width: 150px;
  height: 180px;
  font-size: 3rem;
  font-family: Verdana;
  position: relative;
  transition: opacity 0.7s;
  margin-bottom: 10px;
}

.back,
.front {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 5px;
  background: white;
}

.card .front {
  background-image: url("https://i.pinimg.com/originals/ba/28/e5/ba28e59df29672f9cd9826a4c30ba20c.jpg");
  background-size: 85%;
  background-position: center;
  background-repeat: no-repeat;
}

.card .back {
  transform: rotateY(-180deg);
  display: flex;
  justify-content: center;
  align-items: center;
}

.card.matchingPair .front,
.card.flipped .front {
  transform: rotateY(180deg);
}

.card.matchingPair .back,
.card.flipped .back {
  transform: rotateY(0deg);
}

.card.matchingPair {
  opacity: 0.3;
}

button {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 0.8rem;
  padding: 8px 10px;
  text-transform: uppercase;
  background: #f2add2;
  border: none;
  color: white;
  border-radius: 4px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>