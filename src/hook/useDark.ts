import { useToggle } from "@vueuse/shared";
import { useDark } from "@vueuse/core";
const isDark = useDark({
  storageKey: "useDarkKEY",
  valueDark: "dark",
  valueLight: "light",
});
const toggle = useToggle(isDark);
export { toggle };
