const express = require('express');
const app = new express();

/*This tells the server to use the client 
folder for all static resources*/
app.use(express.static('client'));

/*This tells the server to allow cross origin references*/
const cors_app = require('cors');
app.use(cors_app());

/*Uncomment the following lines to loan the environment 
variables that you set up in the .env file*/

 const dotenv = require('dotenv');
 dotenv.config();
 const api_key = process.env.API_KEY;
 const api_url = process.env.API_URL;

function getNLUInstance() {
    let api_key = process.env.API_KEY;
    let api_url = process.env.API_URL;

    const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
    const { IamAuthenticator } = require('ibm-watson/auth');

    const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
        version: '2020-08-01',
        authenticator: new IamAuthenticator({
            apikey: api_key,
        }),
        serviceUrl: api_url,
    });
    return naturalLanguageUnderstanding;
}


//The default endpoint for the webserver
app.get("/",(req,res)=>{
    res.render('index.html');
  });

//The endpoint for the webserver ending with /url/emotion
app.get("/url/emotion", (req, res) => {
    const analyzeParamsEmotion = {
        'url': req.query.url,
        'features': {
            'emotion': {
                'limit': 5
            }
        }
    }
    getNLUInstance().analyze(analyzeParamsEmotion)
        // on promise resolve then..
        .then(analysisResults => {
            // console.log(JSON.stringify(analysisResults, null, 2));
            return res.send(analysisResults.result.emotion.document.emotion);
        })
        .catch(err => {
            console.log('error:', err);
        });
});

app.get("/url/sentiment", (req, res) => {
    const analyzeParamsSentiment = {
        'url': req.query.url,
        'features': {
            'sentiment': {
            }
        }
    }
    getNLUInstance().analyze(analyzeParamsSentiment)

        // on promise resolve then..
        .then(analysisResults => {
            // console.log(JSON.stringify(analysisResults, null, 2));
            return res.send(analysisResults.result.sentiment.document.label);
        })
        .catch(err => {
            console.log('error:', err);
        });
});

app.get("/text/emotion", (req, res) => {
    const analyzeParamsEmotion = {
        'text': req.query.text,
        'features': {
            'emotion': {
                'limit': 5
            }
        }
    }
    getNLUInstance().analyze(analyzeParamsEmotion)
        // on promise resolve then..
        .then(analysisResults => {
            // console.log(JSON.stringify(analysisResults, null, 2));
            return res.send(analysisResults.result.emotion.document.emotion);
        })
        .catch(err => {
            console.log('error:', err);
        });
});

app.get("/text/sentiment", (req, res) => {
    const analyzeParamsSentiment = {
        'text': req.query.text,
        'features': {
            'sentiment': {
            }
        }
    }
    getNLUInstance().analyze(analyzeParamsSentiment)
        // on promise resolve then..
        .then(analysisResults => {
            // console.log(JSON.stringify(analysisResults, null, 2));
            return res.send(analysisResults.result.sentiment.document.label);
        })
        .catch(err => {
            console.log('error:', err);
        });
});

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})

