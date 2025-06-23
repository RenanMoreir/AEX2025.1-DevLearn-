import './comment.css';

export default function Comment() {
    return(
        <div className="comments-section">
            <h3>10 Comentários</h3>
            <div className="comment-input">
                <div className="user-initial">L</div>
                <textarea placeholder="Adicione um comentário..." rows="3"></textarea>
            </div>
            <div className="comment-item">
                <div className="user-initial">L</div>
                <div class="comment-content">
                    <h4>Lucas Stampini</h4>
                    <p>Muito bom!</p>
                    <span className="comment-time">Há 3 minutos</span>
                </div>
            </div>
        </div>
    )
}