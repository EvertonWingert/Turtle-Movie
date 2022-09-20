import { Slider } from "../../components/Slider"
import { CardMovie } from "./cardMovie"
import { CardTv } from "./cardTv";

export function Home() {
  return (
    <>
      <Slider />
      <div style={{marginLeft: "1rem"}}>
        <CardMovie />
        <CardTv />
      </div>
    </>
  )
}