import { FaSearch } from 'react-icons/fa'
import { Form } from "./styles";
 
export function Search() {
  return (
    <section>
      <Form>
        <input type="text" placeholder='Busque um filme' />
        <button type='submit'> <FaSearch /> </button>          
      </Form>   
    </section>
  )
}