import "@/app.css";
import { defineComponent } from "vue";
import Counter from "@/components/counter";
import CounterIncrementButton from "@/components/counter-increment-button";
import ConfigProvider from "@/components/config-provider";
import DisplayModeControl from "@/components/display-mode-control";
import TodoList from "@/components/todo-list";

export default defineComponent({
  name: "App",
  render() {
    return (
      <ConfigProvider>
        <DisplayModeControl />
        <Counter />
        <TodoList />
        <CounterIncrementButton />
      </ConfigProvider>
    );
  },
});
