<template>
  <div>
    <div class="film-card">
      <div class="film-card__head">
        <div class="film-card__media">
          <img class="film-card__image" src="/img/film.png" alt="image">
        </div>
        <h3 class="film-card__title">
          {{ item.title }}
        </h3>
      </div>
      <div class="film-card__body">
        <div
          ref="desc"
          class="film-card__description">
          <p class="film-card__description-text">
            {{ item.body }}
          </p>
          <v-btn
            :btnCs="`button_more`"
            :text="showBlock ? 'Скрыть' : 'Подробнее'"
            @click="showMoreBtn()"
          />
        </div>
        <div class="film-card__info">
          <div class="film-card__info-line">
            <span class="film-card__info-label">Жанр:</span>
            <a href="#" class="film-card__info-data">Драма, мелодрама</a>
          </div>
          <div class="film-card__info-line">
            <span class="film-card__info-label">Год:</span>
            <a href="#" class="film-card__info-data">1994</a>
          </div>
          <div class="film-card__info-line">
            <span class="film-card__info-label">Рейтинг:</span>
            <a href="#" class="film-card__info-data">5</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  data () {
    return {
      showBlock: false
    }
  },
  methods: {
    showMoreBtn () {
      const el = this.$refs.desc
      if (!this.showBlock) {
        el.children[0].style = `height: ${el.scrollHeight}px`
      } else {
        el.children[0].style = ''
      }
      this.showBlock = !this.showBlock
    }
  }
}
</script>

<style lang="css">
</style>
