import NavbarComponent from "../header/NavbarComponent";
import FooterComponent from "../footer/FooterComponent";
const LayoutComponent = (props: any) => {
  return (
    <div className="max-w-2xl mx-auto bg-white text-black">
      <NavbarComponent />
      <div className="divider"></div>
      {props.children}
      <div className="divider"></div>

      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
