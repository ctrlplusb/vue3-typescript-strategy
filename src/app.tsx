import "@/app.css";
import { defineComponent } from "vue";
import TodoList from "@/components/todo-list";

export default defineComponent({
  name: "App",
  render() {
    return (
      <>
        <TodoList />
      </>
    );
  },
});
