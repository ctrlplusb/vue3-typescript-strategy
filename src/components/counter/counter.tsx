import { useStore } from "@/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Counter",
  setup() {
    const store = useStore();
    return {
      count: computed(() => store.state.count),
    };
  },
  render() {
    return <div>Counter: {this.count}</div>;
  },
});
