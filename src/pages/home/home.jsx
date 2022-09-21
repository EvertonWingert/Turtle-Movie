import { Slider } from "../../components/Slider"
import { CardMovie } from "./cardMovie"
import { CardTv } from "./cardTv"
import { Section } from './styles'

export function Home() {
  return (
    <>
      <Slider />
      <Section>
        <CardMovie />
        <CardTv />
      </Section>
    </>
  )
}