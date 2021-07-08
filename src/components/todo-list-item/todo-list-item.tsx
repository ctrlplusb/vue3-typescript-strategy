import { defineComponent, PropType } from "vue";
import { Todo } from "@/model/todos";

export default defineComponent({
  name: "TodoListItem",
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true as true,
    },
  },
  render() {
    return <li>{this.todo.text}</li>;
  },
});
