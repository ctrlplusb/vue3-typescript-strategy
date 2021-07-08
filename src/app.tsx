import "@/app.css";
import { defineComponent, provide, ref } from "vue";
import Counter from "@/components/counter";
import CounterIncrementButton from "@/components/counter-increment-button";
import DisplayModeControl from "@/components/display-mode-control";
import TodoList from "@/components/todo-list";
import { ConfigInjectionKey, UpdateConfigModeInjectionKey } from "./inject";
import { Config, Mode } from "./model";

export default defineComponent({
  name: "App",
  setup() {
    const config = ref<Config>({
      mode: Mode.Light,
    });
    const updateConfigMode = (mode: Mode) => {
      config.value.mode = mode;
    };
    provide(ConfigInjectionKey, config);
    provide(UpdateConfigModeInjectionKey, updateConfigMode);
  },
  render() {
    return (
      <>
        <DisplayModeControl />
        <Counter />
        <TodoList />
        <CounterIncrementButton />
      </>
    );
  },
});
