// const apiRequest = require("../src/client/js/formHandler")
import {apiRequest} from "../src/client/js/formHandler"

describe('Testing the submit functionality', () => {
    test('Polarity schould be NONE', ()=>{
        // expect.assertions(1);
        const formText = {submittedText:"Hi, my name is Frederik."};
        const output={
            polarity:'NONE',
            subjectivity: 'OBJECTIVE',
            text: 'Hi, my name is Frederik.'
        };

        return apiRequest(formText).then (data => {
            expect(data).toEqual(output)
        })
        

    })
  });