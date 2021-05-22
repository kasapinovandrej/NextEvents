import classes from './comment-list.module.css';

function CommentList(props) {
  const { items } = props
  return (
    <ul className={classes.comments}>
      {items.map(el => <li key={el._id}><p>{el.text}</p><div>By <address>{el.name}</address></div></li>)}
    </ul>
  );
}

export default CommentList;
