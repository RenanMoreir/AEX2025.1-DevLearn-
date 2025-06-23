import './section.css'
import CodeBlock from '../CodeBlock/CodeBlock'

export default function Section({ title, text, code, syntaxTitle }) {
    return(
        <section>
            <h2 className="section-subtitle">{title}</h2>
            <p className="section-text">{text}</p>
            <h3 className="syntax-title">{syntaxTitle}</h3>
            <CodeBlock code={code} />
        </section>
    )
}