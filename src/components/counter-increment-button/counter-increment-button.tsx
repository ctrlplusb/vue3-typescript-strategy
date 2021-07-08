import { MutationType, useStore } from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CounterIncrementButton",
  setup() {
    const store = useStore();
    const increment = () => {
      store.commit(MutationType.INCREMENT, undefined);
    };
    return {
      increment,
    };
  },
  render() {
    return <button onClick={this.increment}>Increment Counter</button>;
  },
});
