import { cn } from "@/lib/utils";
import { NavigationMenuDemo } from "@/itens/menu/menu";
import Page from "@/itens/page/page";
import { CardWithForm } from "@/itens/card/card";

export default function App() {
  return (
    <div className="p-12 font-mono">
      <div className="mb-10">
        <NavigationMenuDemo />
      </div>
      <div>
        <Page />
        <div className="flex justify-center">
          <CardWithForm />
        </div>
      </div>
    </div>
  )
}
