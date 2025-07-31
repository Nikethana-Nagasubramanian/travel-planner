import {createRoot} from "react-dom/client"
import App  from "./App.jsx"
/**
 * Challenge:
 * 
 * - Create an App component in a separate file.
 *   Import it here and render it
 * - Create a "components" folder and a Header component.
 *   Render the Header inside the App component.
 * - Follow the Travel Journal design to build the Header
 *   for our page.
 */

const root = createRoot(document.getElementById("root"))
root.render(
  <App/>
)