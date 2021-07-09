import { InjectionKey, Ref } from "vue";
import { Config, Mode } from "@/model";

export const ConfigInjectionKey: InjectionKey<Ref<Config>> = Symbol("Config");

export const UpdateConfigModeInjectionKey: InjectionKey<(mode: Mode) => void> =
  Symbol("Config");
