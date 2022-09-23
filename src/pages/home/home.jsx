import { Slider } from "../../components/Slider"
import { CardHome } from "./cardHome"
import { Section } from './styles'

export function Home() {
  
  return (
    <>
      <Slider />
      <Section>
        <CardHome />
      </Section>
    </>
  )
}