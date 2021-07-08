import { defineComponent } from "vue";
import HelloWorld from "./components/hello-world";
import "./app.css";
import logo from "./assets/logo.png";

export default defineComponent({
  name: "App",
  render() {
    return (
      <>
        <img alt="Vue logo" src={logo} />
        <HelloWorld msg="This is radness" />
      </>
    );
  },
});
