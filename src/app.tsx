import "@/app.css";
import { defineComponent } from "vue";
import Counter from "@/components/counter";
import CounterIncrementButton from "@/components/counter-increment-button";
import TodoList from "@/components/todo-list";

export default defineComponent({
  name: "App",
  render() {
    return (
      <>
        <Counter />
        <TodoList />
        <CounterIncrementButton />
      </>
    );
  },
});
