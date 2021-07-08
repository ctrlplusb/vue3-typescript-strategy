import { computed, defineComponent, ref } from "vue";
import TodoListItem from "@/components/todo-list-item";
import TodoListAddItem from "@/components/todo-list-add-item";
import { Todo } from "@/model/todos";
import styles from "./todo-list.module.css";

export default defineComponent({
  name: "TodoList",
  setup() {
    const todoItems = ref<Todo[]>([
      { id: 1, text: "Go full TS in Vue", done: true },
      { id: 2, text: "Make a blog post", done: true },
      { id: 3, text: "Finish Vue side project", done: true },
    ]);

    const todoIdIdx = computed(() => {
      if (todoItems.value.length === 0) {
        return 1;
      } else {
        return todoItems.value[todoItems.value.length - 1].id;
      }
    });

    const onAddItem = (text: string) => {
      todoItems.value.push({
        id: todoIdIdx.value + 1,
        text,
        done: false,
      });
    };

    return {
      todoItems,
      onAddItem,
    };
  },
  render() {
    return (
      <ul class={styles.list}>
        {this.todoItems.map((todoItem) => (
          <TodoListItem key={todoItem.id} todo={todoItem} />
        ))}
        <TodoListAddItem onAddItem={this.onAddItem} />
      </ul>
    );
  },
});
