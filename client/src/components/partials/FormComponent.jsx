import React from "react";
import QuizForm from "../modules/QuizModule";
import FormImage from "../../assets/img/form.svg";
import LogoSida from "../../assets/img/sida.png";
function FormComponent() {
 return (
  <div className="container">
   <div className="row">
    <div className=" col-xl-6 col-lg-6 col-md-12 col-xs-12">
     <div className="d-flex flex-column">
      <img className="img__form" src={FormImage} alt="image form" width={"100%"} height={600}></img>
      <p>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste incidunt, illo impedit itaque, quasi porro fuga ipsam distinctio alias animi eaque at esse doloribus pariatur beatae, modi id
       labore dolor.
      </p>
     </div>
    </div>
    <div className=" col-xl-6 col-lg-6 col-md-12 col-xs-12">
     <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
      <h3 className="text-left mt-2">
       <img src={LogoSida} width={50} height={50}></img>
       Partager votre expérience avec VIH/SIDA{" "}
      </h3>
      <QuizForm />
     </div>
    </div>
   </div>
  </div>
 );
}

export default FormComponent;
