<template>
  <div v-on:click="suggestionsVisible=false">
    <h2>
      Начните вводить данные об орагнизации(название, инн, огрн, кпп, адрес, фио руководителя)
    </h2>
    <input
      type="text"
      v-on:input="getSuggestions($event.target.value)"
      @focus="suggestionsVisible=true"
      v-on:click.stop
      />
    <div id="item-warpper" v-show="suggestionsVisible">
      <div
        id="item"
        v-for="item in doneSuggestions"
        v-on:click="selected = item;"
        >
        {{ item.name }}
      </div>
    </div>
    <div id="selected-company-wrapper" v-if="!suggestionsVisible && selected">
      <h2>
        Выбранная организация:
      </h2>
      <div id="selected-company-rows-wrapper">
        <div>
          Название: {{selected.name}}
        </div>
        <div>
          ИНН: {{selected.inn}}
        </div>
        <div>
          ОГРН: {{selected.ogrn}}
        </div>
        <div>
          КПП: {{selected.kpp}}
        </div>
        <div>
          Фио руководителя: {{selected.fio}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data(){
    return {
      selected: null,
      suggestionsVisible: false
    }
  },
  computed: {
    ...mapGetters('dadata',[
      'doneSuggestions'
    ])},
  methods: mapActions('dadata', [
    'getSuggestions'
  ])
}
</script>
