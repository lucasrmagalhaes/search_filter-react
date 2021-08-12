import './styles.css';

export const PostCard = ({ id, title, body, cover }) => (
  <div className="post" alt={title}>
    <img src={cover} alt="Cover" />

    <div className="post-content">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
)

