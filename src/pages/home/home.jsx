import Cards from "../../components/Card/Card";
import { Slider } from "../../components/Slider";
import { CardMovie } from "./cardMovie"
import { CardTv } from "./cardTv";

export function Home() {
  return (
    <>
      <Slider />
      <CardMovie />
      <CardTv />
    </>
  )
}