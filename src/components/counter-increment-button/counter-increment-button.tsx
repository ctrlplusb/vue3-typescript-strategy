import { defineComponent } from "vue";
import { useCounterModule } from "@/store";

export default defineComponent({
  name: "CounterIncrementButton",
  setup() {
    const counter = useCounterModule();
    const increment = () => counter.increment(1);
    return {
      increment,
    };
  },
  render() {
    return <button onClick={this.increment}>Increment Counter</button>;
  },
});
