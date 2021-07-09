import { defineComponent, provide, ref } from "vue";
import { ConfigInjectionKey, UpdateConfigModeInjectionKey } from "./symbols";
import { Config, Mode } from "@/model";

export default defineComponent({
  name: "ConfigProvider",
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
    return this.$slots.default?.();
  },
});
