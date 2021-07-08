import { defineComponent, ref, PropType, onMounted } from "vue";

export default defineComponent({
  name: "TodoListAddItem",
  emits: {
    addItem(text: string) {
      return text.length > 0;
    },
  },
  props: {
    // ❗️ WORKAROUND: We need to explicitly define the prop that would be
    // generated for the custom event. It's not ideal, but it isn't awful either
    onAddItem: {
      type: Function as PropType<(text: string) => void>,
      required: true,
    },
  },
  setup(_props, { emit }) {
    const text = ref<string>("");
    const inputRef = ref<HTMLInputElement | null>(null);
    const onSubmit = (event: Event) => {
      event.preventDefault();
      console.log("What");
      emit("addItem", text.value);
      text.value = "";
    };
    onMounted(() => {
      inputRef.value?.focus();
    });
    return {
      inputRef,
      onSubmit,
      text,
    };
  },
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          ref={(ref) => {
            if (ref == null || ref instanceof HTMLInputElement) {
              this.inputRef = ref;
            }
          }}
          v-model={this.text}
          placeholder="New todo"
        />
        <button type="submit">Add</button>
      </form>
    );
  },
});
