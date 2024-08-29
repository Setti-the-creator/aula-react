import './styles.css'


export default function Form() {
    return(
        <>
          <section class="last">
            <h2>Seção de formularios</h2>
            <form>
                <div>
                    <label for="nome">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Nome inteiro" required/>
                </div>
                <div>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" placeholder="exemplo@gmail.com" required/>
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input class="senha" type="password" id="password" name="password" placeholder="3xEmpl0"/> 
                </div>
                
                <button class="botao" type="submit">Save</button >
                <button class="botao" type="reset">Clear</button>

        </form>
    </section></>
    )
}