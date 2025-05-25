import "./styles.css";
import { getComponents, App } from "./App";
import {boot} from "@tinkerable/internal/v1"

boot({App: <App />, components: getComponents()})
