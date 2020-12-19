import { Button, Comment as AntdComment } from 'antd';

const Comment =({ comment, onDelete }) => (
  <AntdComment
    {...comment}
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
);

export default Comment;
