<template>
  <div class="v-todolist">
    <div class="container">
      <h2 class="todo-list-title">
        {{ title }}
      </h2>
      <ul class="todo-list" v-if="todoList.length > 0">
        <li
          class="todo-item"
          :class="{ finish: item.isFinish }"
          v-for="(item, index) in todoList"
          :key="index"
        >
          {{ item.name }}
        </li>
      </ul>
      <div class="no-todo-list" v-else>No Data</div>
      <div class="finish-count">已经{{finishTodoLength}}项</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v_todolist',
  data() {
    return {
      title: 'TODO LIST',
      todoList: [
        { name: '中华有为', isFinish: false },
        { name: '喂喂喂', isFinish: true }
      ]
    }
  },
  computed: {
    finishTodoLength() {
      return this.todoList.filter(item=>item.isFinish).length
    }
  },
  methods: {
    getFinishCount() {
      return this.todoList.filter(item => item.isFinish).length
    }
  },
  watch: {
    todoList: {
      immediate: true,
      handler: function (to) {
        
      }
    },
    todoList(to) {
      this.finishTotal=to.filter(item=>item.isFinish).length
    }
  }
}
</script>

<style></style>
