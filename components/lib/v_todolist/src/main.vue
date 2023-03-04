<template>
  <div class="v-todolist">
   <div class="todolist-body">
    <h1>todos</h1>
    
    <v_input class="todos-input" placeholder="Enter your todo" :value="input" @input="(data) => (input = data)"
      clearable>
    </v_input>
    <v_button type="primary"  @click="submit" class="todos-btn">确认</v_button>
   
    
    <ul class="todos" id="todos">
      <li v-for="item in li" :key="item" @click="isDone(item)" :class="{ completed: item.completed }">{{ item.text }}</li>
    </ul>
    <small>Left click to toggle completed. <br> Right click to delete todo</small>
   </div>
  </div>
</template>

<script>
export default {
  name: 'v_todolist',
  data() {
    return {
      li: [],
      input:''
}
  },
  created() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
    this.li=todos
    } else {
      localStorage.setItem('todos', JSON.stringify(this.li))
   }
  },
  methods: {
    submit() {
      this.li.push({text:this.input,completed:false})
      localStorage.setItem('todos', JSON.stringify(this.li))
      this.input=''
    },
    isDone(item) {
        item.completed=!item.completed
      localStorage.setItem('todos', JSON.stringify(this.li))
    }
  }
}
</script>

<style>

</style>