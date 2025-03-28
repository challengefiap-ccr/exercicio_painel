'use client'

import { useEffect, useState } from 'react'

type MensagemType = {
    hora_msg: string
    msg: string
}

const Comunicador = () => {
    const [mensagem, setMensagem] = useState<string>('')
    const [mensagemTerra, setMensagemTerra] = useState<boolean>(false)
    const [historico, setHistorico] = useState<MensagemType[]>([])

    const hora = new Date()
    const adicionarMensagem = () => {
        setHistorico(historico => [
            ...historico,
            { hora_msg: hora.toLocaleTimeString(), msg: mensagem },
        ])
        setMensagem('')

        setTimeout(() => {
            setMensagemTerra(true)
        }, 2000)
    }

    useEffect(() => {
        setTimeout(() => {
            setMensagemTerra(false)
        }, 2000)
    }, [mensagemTerra])

    return (
        <main className="comunicador__container">
            <section>
                <form className="comunicador-form__container">
                    <label htmlFor="mensagem">Digite sua mensagem</label>
                    <textarea
                        value={mensagem}
                        onChange={e => setMensagem(e.target.value)}
                        name="mensagem"
                        id="mensagem"
                    ></textarea>
                    <div>
                        <button type="button" onClick={adicionarMensagem}>
                            Enviar mensagem
                        </button>
                    </div>
                </form>
            </section>

            <div>{mensagemTerra ? 'MENSAGEM RECEBIDA DA TERRA' : ''}</div>

            <section className="comunicador-historico__container">
                <ul>
                    {historico.map(({ hora_msg, msg }) => {
                        return (
                            <li key={msg}>
                                {hora_msg}: <span>{msg}</span>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}
export default Comunicador
