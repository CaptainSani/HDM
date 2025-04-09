import React from "react";
import Total from "../../assets/images/totallogo.png";
import Mobil from "../../assets/images/mobil.png";
import MRS from "../../assets/images/mrslogo.png";
import Castrol from "../../assets/images/Castrol1.png";
import Trustlub from "../../assets/images/trustlub.png";
import Shell from "../../assets/images/shell.png";
import Conoil from "../../assets/images/conoil.png";
import Ammasco from "../../assets/images/ammasco.png";
import Abro from "../../assets/images/abro.png";
import Hyundai from "../../assets/images/hyundai.png";

const BrandsSection = () => {
  return (
    <section className="bg-white py-10 text-center">
      <h3 className="text-2xl font-semibold mb-8">Some Of Our Trusted Brands</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center">
        <img src={Total} alt="Total logo" className="w-32 h-auto" />
        <img src={Mobil} alt="Mobil logo" className="w-32 h-auto" />
        <img src={MRS} alt="MRS logo" className="w-32 h-auto" />
        <img src={Castrol} alt="Castrol logo" className="w-32 h-auto" />
        <img src={Trustlub} alt="Trustlub logo" className="w-32 h-auto" />
        <img src={Shell} alt="Shell logo" className="w-32 h-auto" />
        <img src={Conoil} alt="Conoil logo" className="w-32 h-auto" />
        <img src={Ammasco} alt="Ammasco logo" className="w-32 h-auto" />
        <img src={Abro} alt="Abro logo" className="w-32 h-auto" />
        <img src={Hyundai} alt="Hyundai logo" className="w-32 h-auto" />
      </div>
    </section>
  );
};

export default BrandsSection;
