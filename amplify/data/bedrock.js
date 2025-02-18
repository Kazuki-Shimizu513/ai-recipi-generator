
export function request(ctx) {
    const { ingredients = [] } = ctx.args;

    // construct the prompt with the provided ingredients
    const prompt = `Suggest a recipe idea using these ingredients: ${ingredients.join(", ")}.`;


    // Return the request configuration
    return {
       "modelId": "meta.llama3-3-70b-instruct-v1:0",
       "contentType": "application/json",
       "accept": "application/json",
       "body": {
           "prompt":`\n\nHuman: ${prompt}\n\nAssistant:`,
           "max_gen_len":512,
           "temperature":0.5,
           "top_p":0.9,
       },
    }
}


export function response(ctx) {
    // Parse the response body
    const parsedBody = JSON.parse(ctx.result.body);
    // Extract the text content from the response
    const res = {
      body: parsedBody.content[0].text,
    };
    // Return the response
    return res;
 }
