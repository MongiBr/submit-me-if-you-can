import React, { useState } from "react";
import { Button, Checkbox, Form, Input, notification } from "antd";

const { TextArea } = Input;

import emojiGif from "../../assets/img/emoji.webp";
import { QUIZ_ATTRIBUTES } from "../../utilities/quiz";
import FeedbackRepository from "../../repositories/FeedbackRepository";

const inital_state = {
 fullName: "",
 anonyme: false,
 getSickAndDiscover: "",
 when: "",
 experience: "",
 traitement: "",
 advise: "",
};
function QuizModule() {
 const [form] = Form.useForm();
 const [quiz, setQuiz] = useState(inital_state);
 const [move, setMove] = useState(false);
 const [currentQuestion, setCurrentQuestion] = useState(1);
 const [isMoved, setIsMoved] = useState(false);

 const onFinish = async () => {
  let res = await FeedbackRepository.saveFeedback(quiz);

  if (res.status == 200) {
   notification.success({
    message: `Ajout avis!`,
    description: "Votre avis à été enregistré avec succées, merci pour votre temps!",
    placement: "top",
   });
   form.resetFields();
  } else {
   notification.error({
    message: `Erreur serveur!`,
    description: " Un autre erreur s’est produite",
    placement: "top",
   });
   setQuiz(inital_state);
   form.resetFields();
  }
 };

 const handleMouseEnter = (e) => {
  let invalid = true;
  Object.values(quiz).forEach((element, index) => {
   if (!element && index > 1) {
    invalid = true;
    return;
   }
   invalid = false;
  });
  if (quiz.fullName || quiz.anonyme) {
   invalid = false;
  }
  if (quiz.getSickAndDiscover.length < 50 || quiz.traitement.length < 50 || quiz.experience.length < 50 || quiz.advise.length < 50) {
   invalid = true;
  }

  if (invalid) {
   setIsMoved((prev) => !prev);
   setMove(true);
  } else {
   setMove(false);
  }
 };

 const handleChange = (e) => {
  if (e.target.name == "anonyme") {
   setQuiz((prev) => ({
    ...prev,
    [e.target.name]: e.target.checked,
   }));
   return;
  }
  setQuiz((prev) => ({
   ...prev,
   [e.target.name]: e.target.value,
  }));
 };

 let buttonClass;
 let emojiClass = null;
 if (!isMoved) {
  buttonClass = "d-flex justify-content-end w-100";
  emojiClass = "d-flex justify-content-start ";
 } else {
  buttonClass = "d-flex justify-content-start w-100";
  emojiClass = "d-flex justify-content-end ";
 }

 return (
  <>
   <Form className="mt-4" form={form} name="basic" onSubmit={onFinish} autoComplete="on">
    <div className="d-flex justify-content-between">
     <label>Nom et prénom </label>
     <div className="d-inline-block">
      <Checkbox name="anonyme" onChange={(e) => handleChange(e)} />
      <label className="ms-2">Anonyme</label>
     </div>
    </div>
    <Form.Item
     name="fullName"
     className="w-100"
     rules={[
      {
       required: !quiz.anonyme,
       message: "Entrer votre nom et prénom SVP!",
      },
     ]}
    >
     <Input className="w-100" name="fullName" disabled={quiz.anonyme} onChange={(e) => handleChange(e)} />
    </Form.Item>

    <label>Comment êtes vous tombé malade et comment avez vous dévouvert? </label>
    <Form.Item
     name="getSickAndDiscover"
     className="w-100"
     rules={[
      {
       required: true,
       message: "Entrer votre réponse SVP!",
      },
      { pattern: /.*.{50}$/, message: "Minimum 50 caractére" },
     ]}
    >
     <TextArea className="w-100" rows={4} name="getSickAndDiscover" onChange={(e) => handleChange(e)} />
    </Form.Item>
    <label>Quand êtes-vous tombé malade?</label>
    <Form.Item
     name="when"
     className="w-100"
     rules={[
      {
       required: true,
       message: "Entrer votre réponse SVP!",
      },
     ]}
    >
     <Input className="w-100" name="when" onChange={(e) => handleChange(e)} />
    </Form.Item>

    <label>Quelle à été votre experience avec SIDA?</label>
    <Form.Item
     name="experience"
     className="w-100"
     rules={[
      {
       required: true,
       message: "Entrer votre réponse SVP!",
      },
      { pattern: /.*.{50}$/, message: "Minimum 50 caractére" },
     ]}
    >
     <TextArea className="w-100" rows={4} name="experience" onChange={(e) => handleChange(e)} />
    </Form.Item>

    <label>Quelle est le meilleur traitement qui vous a aidé?</label>
    <Form.Item
     name="traitement"
     className="w-100"
     rules={[
      {
       required: true,
       message: "Entrer votre réponse SVP!",
      },
      { pattern: /.*.{50}$/, message: "Minimum 50 caractére" },
     ]}
    >
     <TextArea className="w-100" rows={4} name="traitement" onChange={(e) => handleChange(e)} />
    </Form.Item>

    <label>Que conseillez-vous?</label>
    <Form.Item
     name="advise"
     className="w-100"
     rules={[
      {
       required: true,
       message: "Entrer votre réponse SVP!",
      },
      { pattern: /.*.{50}$/, message: "Minimum 50 caractére" },
     ]}
    >
     <TextArea className="w-100" rows={4} name="advise" onChange={(e) => handleChange(e)} />
    </Form.Item>

    <Form.Item>
     <div className={buttonClass}>
      <Button type="primary" className="d-flex gap-2 align-items-center" htmlType="submit" onClick={() => onFinish()} onMouseEnter={(e) => handleMouseEnter(e)}>
       {move && (
        <div className={emojiClass}>
         <img src={emojiGif} className={emojiClass} height={30} width={30}></img>
        </div>
       )}
       <span>Submit</span>
      </Button>
     </div>
    </Form.Item>
    <div className="ps-fixed"></div>
   </Form>
  </>
 );
}
export default QuizModule;
