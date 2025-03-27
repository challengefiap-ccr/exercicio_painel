'use client'

import { useState } from 'react'

const Energia = () => {
    const [porcentagem, setPorcentagem] = useState<number>(100)

    return (
        <section className="energia__container">
            <h1>Nível de Energia</h1>
            <article className="energia-painel__container">
                <div className="energia-painel__box">
                    <span>0%</span>
                    <div
                        style={{
                            '--energia': `${porcentagem}%`,
                            '--energia-esgotando': `${
                                porcentagem <= 30 ? 'red' : 'greenyellow'
                            }`,
                            '--texto': `${porcentagem} == 0? 'Energia esgotada!!!:''`,
                        }}
                        className="energia-painel__barra"
                    ></div>
                    <span>100%</span>
                </div>

                <div className="energia-botao__container">
                    <button onClick={() => setPorcentagem(100)}>
                        Recarregar
                    </button>
                    <button
                        onClick={() =>
                            setPorcentagem(porcentagem =>
                                porcentagem > 0 ? porcentagem - 10 : 0
                            )
                        }
                    >
                        Reduzir 10%
                    </button>
                </div>
            </article>
        </section>
    )
}
export default Energia
