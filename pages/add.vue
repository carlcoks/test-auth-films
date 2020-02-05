<template>
  <section class="add-film">
    <Subheader
      :title="`Добавление нового фильма`"
    />
    <div class="container">
      <div class="add-film__box">
        <form class="add-film__form" @submit.prevent="submit">
          <v-input
            :class="'add-film__line'"
            :fieldCs="'input-field_line'"
            :boxCs="`input-box_bordered`"
            :model="title"
            :plHolder="`Введите название фильма`"
            @input="title = $event"
            :required="true"
            :name="`title`">
            <template #label>
              Название фильма
            </template>
          </v-input>
          <v-textarea
            :class="'add-film__line'"
            :fieldCs="'textarea-field_line'"
            :boxCs="`textarea-box_bordered`"
            :model="desc"
            :plHolder="`Введите описание фильма`"
            @input="desc = $event"
            :required="true"
            :name="`desc`">
            <template #label>
              Описание
            </template>
          </v-textarea>
          <v-select
            :class="'add-film__line'"
            :fieldCs="'select-field_line'"
            :boxCs="`select-box_bordered`"
            :data="jenres"
            :model="jenre"
            :plHolder="`Укажите жанр фильма`"
            @select="jenre = $event"
            :required="true"
            :name="`jenre`">
            <template #label>
              Жанр
            </template>
          </v-select>
          <v-input
            :class="'add-film__line'"
            :fieldCs="'input-field_line'"
            :boxCs="`input-box_bordered`"
            :model="year"
            :plHolder="`Укажите год выпуска`"
            @input="year = $event"
            :required="true"
            :name="`year`">
            <template #label>
              Год выпуска
            </template>
          </v-input>
          <v-select
            :class="'add-film__line'"
            :fieldCs="'select-field_line'"
            :boxCs="`select-box_bordered`"
            :data="marks"
            :model="mark"
            :plHolder="`Укажите оценку`"
            @select="mark = $event"
            :required="true"
            :name="`mark`">
            <template #label>
              Оценка
            </template>
          </v-select>
          <v-btn
            :btnCs="'button_primary'"
            :text="`Сохранить`"
            :loading="loading"
          />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Subheader from '@/components/global/subheader'

export default {
  components: {
    Subheader
  },
  data () {
    return {
      title: '',
      desc: '',
      year: '',
      jenre: '',
      jenres: ['Драма', 'Мелодрама', 'Детектив', 'Боевик'],
      mark: null,
      marks: [1, 2, 3, 4, 5],
      loading: false
    }
  },
  methods: {
    submit () {
      this.loading = true
      setTimeout(() => {
        console.log(`Title: ${this.title}, Desc: ${this.desc}, Year: ${this.year}, Jenre: ${this.jenre}, Mark: ${this.mark}`)
        this.loading = false
        this.$router.push('/films')
      }, 2000)
    }
  }
}
</script>

<style lang="css">
</style>
