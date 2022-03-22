<script>
let id = 0

export default {
  data() {
    return {
      newTodo: '',
      hideCompleted: false,
      todos: [
        { id: id++, text: 'Open To-do app', done: true },
        { id: id++, text: 'Add new task', done: false }
      ]
    }
  },
  computed: {
    filteredTodos() {
      return this.hideCompleted
        ? this.todos.filter((t) => !t.done)
        : this.todos
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo, done: false })
      this.newTodo = ''
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    }
  }
}
</script>

<template>
  <center>
    <form @submit.prevent="addTodo" class="">
      <div class="input-group" style="max-width: 80%">
        <input type="text" maxlength="80" class="form-control" placeholder="Add new task" aria-label="New task name" aria-describedby="basic-addon2" v-model="newTodo">
        <div class="input-group-append">
          <button class="btn btn-outline-primary" type="submit">Add</button>
        </div>
      </div>
    </form>

    <br>
    
    <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
    
    <hr style="max-width: 80%">

    <ul class="list-group" style="max-width: 70%; text-align: left;">
      <li class="list-group-item" v-for="todo in filteredTodos" :key="todo.id">
        <div class="container">
          <div class="row">
            <div class="col-1">
              <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."  v-model="todo.done">
            </div>

            <div class="col">
              <span :class="{ done: todo.done }">{{ todo.text }}</span>
            </div>

            <div class="col text-end">
              <button type="button" class="btn btn-outline-danger btn-sm" @click="removeTodo(todo)">X</button>
            </div>
          </div>
        </div>    
      </li>
    </ul>
  </center>
</template>

<style>
.done {
  text-decoration: line-through;
}

span {
    display: inline-block;
    width: inherit;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

@import '~bootstrap/dist/css/bootstrap.css'
</style>