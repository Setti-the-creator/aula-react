import './styles.css'


export default function List({ titulo }) {
    return(
        <>
        <section>
            <h2>{titulo}</h2>
            <div>
                <h3>Lista não ordenada:</h3>
                <ul>
                    <li>Gosto de jogos fps</li>
                    <li>Faço academia</li>
                    <li>Sou hetero</li>
                </ul>
            </div>
            <div>
                <h3>Lista ordenada:</h3>
                <ol>
                    <li>Jujutsu Kaisen</li>
                    <li>Bunny Girl </li>
                    <li>Kaiju n° 8</li>
                </ol>
            </div>
        </section></>
    )
}