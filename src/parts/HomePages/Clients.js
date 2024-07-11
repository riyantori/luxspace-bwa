import logoAdobe from "../../assets/img/logo-adobe.svg";
import logoIkea from "../../assets/img/logo-ikea.svg";
import logoHermanmiller from "../../assets/img/logo-hermanmiller.svg";
import logoMiele from "../../assets/img/logo-miele.svg";

export default function Clients() {
  return (
    <section className="container mx-auto">
      <div className="border-t border-gray-200 py-6 px-4"></div>
      <div className="flex justify-center flex-wrap">
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={logoAdobe} alt="" className="mx-auto" />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={logoIkea} alt="" className="mx-auto" />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={logoHermanmiller} alt="" className="mx-auto" />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={logoMiele} alt="" className="mx-auto" />
        </div>
      </div>
    </section>
  );
}
