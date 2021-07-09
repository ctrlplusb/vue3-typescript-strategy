import { computed, defineComponent } from "vue";
import {
  ConfigInjectionKey,
  UpdateConfigModeInjectionKey,
} from "@/components/config-provider";
import { Mode } from "@/model";
import { injectStrict } from "@/lib/inject-strict";

export default defineComponent({
  name: "DisplayModeControl",
  setup() {
    const config = injectStrict(ConfigInjectionKey);
    const updateConfigMode = injectStrict(UpdateConfigModeInjectionKey);
    const mode = computed(() => config.value.mode);
    const toggleMode = () => {
      updateConfigMode(
        config.value.mode === Mode.Light ? Mode.Dark : Mode.Light
      );
    };
    return {
      mode,
      toggleMode,
    };
  },
  render() {
    return <button onClick={this.toggleMode}>{this.mode} Mode</button>;
  },
});
