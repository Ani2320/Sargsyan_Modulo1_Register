import { useState } from 'react'
import RegisterForm from "./RegisterForm"

function Main() {
    const [showForm, setShowForm] = useState(false)
  return (
    <main>
        {showForm ?
        <RegisterForm />
        :
        <div>
            <h3>Bienvenido a nuestra página oficial. Registrate para seguir navegando </h3>
            <button  
                className='btn-generic br-10 top-10 w-20'
                onClick={() => {setShowForm((showForm) => showForm = !showForm); goToRegister()}}>
            Registrarse
        </button>
        </div>
        
    }
        </main>
  )
}

export default Main