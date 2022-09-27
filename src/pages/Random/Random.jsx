import Erro404 from '/404.svg'

function Random() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img 
        style={{width:'60vw', marginTop: '4rem'}}
        src={Erro404} 
        alt="erro" 
      />
    </div>
  )
}

export default Random

