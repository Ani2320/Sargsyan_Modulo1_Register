function RegisterForm() {
    
  return (
    <form id = "reg-form" className="gap-20" >

        <input type="text" placeholder="Nombre" id = "user-name" required />
        <input type="text" placeholder="Apellido" id = "user-surname" required />
        <input type="email" placeholder="Email" id = "user-email" required />
        <input type="tel" placeholder="Teléfono" />
        <input type="password" placeholder="Contraseña" id = "user-pass" required />
        <input type="password" placeholder="Repetir contraseña" id = "user-repPass" required />


        <button type="submit" onClick={confirmRegisterForm} className="btn-generic top-10 br-10">Confirmar</button>

    </form>
    
  )

}
export default RegisterForm