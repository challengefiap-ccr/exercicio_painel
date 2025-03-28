'use client'

import { useEffect, useState } from 'react'

const TempoEstelar = () => {
    const [tempo, setTempo] = useState<Date>(new Date())
    const [tempoCorrendo, setTempoCorrendo] = useState<boolean>(true)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        if (!tempoCorrendo) return

        const horas = setInterval(() => {
            setTempo(new Date())
        }, 1000)

        return () => clearInterval(horas)
    }, [tempoCorrendo])

    if (!isClient) {
        return <div>Loading...</div>
    }

    return (
        <main className="tempo__container">
            <section className="tempo__display">
                <div className="tempo__hora">{tempo.toLocaleTimeString()}</div>
            </section>

            <section>
                <button
                    onClick={() => setTempoCorrendo(!tempoCorrendo)}
                    className="tempo__botao"
                >
                    {tempoCorrendo ? 'Pausar' : 'Retomar'}
                </button>
            </section>
        </main>
    )
}
export default TempoEstelar
