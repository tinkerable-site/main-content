import "./styles.css";
import { App } from "./App";
import { getComponents } from "./src/components";
import { boot } from "@tinkerable/internal/v1";

boot({ App, components: getComponents() });
