import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './artigo.css';

import Sidebar from './Sidebar/Sidebar';
import Comment from './CommentSection/Comment';
import Section from './Section/Section';
import CodeBlock from './CodeBlock/CodeBlock';

const code1 = `
    function greeting() {
        let blipGreeting = 'Hiho!'

        if (blipGreeting === 'Hiho!') {
            blipGreeting.message = 'Hello people! I\'m BLIP'
        }

        return blipGreeting
    }
`

const code2 = `
    if (condicao) {
    // Bloco para condição 'true';
    } else {
    // Bloco para condição 'false';
    }
`

const code3 = `
    switch (expressao) {
        case A:
            // Bloco executado quando expressão for igual a A
            Break;
        case B:
            // Bloco executado quando expressão for igual a B
            break;
        default:
            // Bloco executado se nenhum valor corresponder
    }
`

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className='content-wrapper'>
            <Sidebar />

            <section className="main-content">
                <h1 className="lesson-title">Estruturas Condicionais</h1>
                <p className="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.</p>

                <CodeBlock code={code1} />

                <Section 
                    title={"Estruturas Simples - if... else"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lac."}
                    code={code2}
                    syntaxTitle={"Sintaxe"}
                />

                <Section 
                    title={"Estrutura Switch"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit. Lorem ipsum."}
                    code={code3}
                    syntaxTitle={"Sintaxe"}
                />

                <Comment />

            </section>
        </div>
    </StrictMode>
) 