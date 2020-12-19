import { Button, Comment as AntdComment } from 'antd';

const Comment = React.forwardRef(({ comment, onDelete }, ref) => (
  <AntdComment
    {...comment}
    ref={ref}
    actions={[
      <Button
        type="link"
        size="small"
        className="pl-0"
        onClick={() => onDelete(comment)}
      >
        Delete
      </Button>
    ]}
  />
));

export default Comment;
