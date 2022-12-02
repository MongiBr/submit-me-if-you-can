import Repository, { baseUrl, serializeQuery } from "./Repository";

class FeedbackRepository {
 // Api to get all submited feedbacks
 async getAllFeedbacks() {
  const reponse = await Repository.get(
   `${baseUrl}/feedback
            `
  )
   .then((response) => {
    if (response) {
     return response;
    } else {
     return null;
    }
   })

   .catch((error) => {
    console.log(JSON.stringify(error));
    return null;
   });
  return reponse;
 }

 // Api submit feedback <<<- submit me if u can ->>>
 async saveFeedback(payload) {
  const reponse = await Repository.post(
   `${baseUrl}/feedback
            `,
   payload
  )
   .then((response) => {
    if (response) {
     return response;
    } else {
     return null;
    }
   })

   .catch((error) => {
    console.log(JSON.stringify(error));
    return null;
   });
  return reponse;
 }
}

export default new FeedbackRepository();
