import Image from "next/image";
import { useRouter } from "next/router";

const PostBlogComponent = (props: any) => {
  const router = useRouter();
  return (
    <div className="flex flex-col mt-10 space-y-6 ">
      <div className="text-4xl font-extrabold  text-center">
        <h1>{props.post.title}</h1>
      </div>
      <div>
        <h5 className="text-center  text-gray-600">
          By {props.post.author.name} on {props.post.date}
        </h5>
      </div>
      <div className="mx-auto">
        <Image src="/photo.jpeg" alt="post_photo" width={1500} height={800} />
      </div>

      <div>
        <div dangerouslySetInnerHTML={{ __html: props.post.content }}></div>
      </div>
      <div className="divider"></div>

      <div className=" flex flex-row space-x-5 mx-auto">
        <button
          className="p-2 border-2 border-black"
          onClick={() => router.push(`/${props.post.prev}`)}
        >
          Prev
        </button>
        <span className="mt-2">
          page {props.index + 1} of {props.length}
        </span>
        <button
          className="p-2 border-2 border-black"
          onClick={() => router.push(`/${props.post.next}`)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default PostBlogComponent;
