import Link from "next/link";
const Navigation = [
  {
    name: "home",
    link: "/home",
  },
  {
    name: "archive",
    link: "",
  },
  {
    name: "books",
    link: "",
  },
];
const FooterComponent = () => {
  return (
    <div className="flex flex-row mb-10">
      <div className="space-x-5">
        {Navigation.map((nav, index) => {
          return (
            <Link href={nav.link} key={index}>
              <a>{nav.name}</a>
            </Link>
          );
        })}
      </div>

      <h5 className="ml-auto">&copy;2014 Responsive Blog.</h5>
    </div>
  );
};

export default FooterComponent;
