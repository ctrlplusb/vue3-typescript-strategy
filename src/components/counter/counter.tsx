import { computed, defineComponent } from "vue";
import { useCounterModule } from "@/store";

export default defineComponent({
  name: "Counter",
  setup() {
    const counter = useCounterModule();
    const count = computed(() => counter.count);
    return {
      count,
    };
  },
  render() {
    return <div>Counter: {this.count}</div>;
  },
});
