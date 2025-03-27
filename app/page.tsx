import Comunicador from './components/Comunicador'
import Energia from './components/Energia'
import TempoEstelar from './components/TempoEstelar'

export default function Home() {
    return (
        <main className="painel__container">
            <Comunicador />
            <Energia />
            <TempoEstelar />
        </main>
    )
}
