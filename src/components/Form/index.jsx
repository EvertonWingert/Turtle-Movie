import { FaSearch } from "react-icons/fa";


export function Form() {
  return (
    <form>
      <input type="text" placeholder="Busque um filme" />
      <button type="submit"><FaSearch /></button>
    </form>
  )
}