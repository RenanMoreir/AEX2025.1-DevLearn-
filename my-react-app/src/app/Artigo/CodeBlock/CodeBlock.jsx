import './codeblock.css'

export default function CodeBlock({ code, language = "javascript" }) {
    return (
      <div className="code-block">
        <pre>
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    );
  }
  