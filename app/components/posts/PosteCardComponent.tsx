import { useRouter } from "next/router";
const PostCardComponent = (props: any) => {
  const router = useRouter();
  return (
    <div>
      <div className="card lg:card-side ">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() => router.push(`/${props.id}`)}
            >
              More info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostCardComponent;
