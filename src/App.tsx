import { cn } from "@/lib/utils";
import { NavigationMenuDemo } from "@/itens/menu/menu";
import Page from "@/itens/menu/page";
import { CardWithForm } from "./itens/menu/card";

export default function App() {
  return (
    <div className="p-12 font-mono">
      <NavigationMenuDemo />
      <div>
        <Page />
        <CardWithForm />
      </div>
    </div>
  )
}
