import React , {useState} from "react";



const Alert = ({ color }) => {
  const [showAlert, setShowAlert] = React.useState(true);
  return (
    <>
      {showAlert ? (
        <div
          className={
            "text-white px-6 py-4 border-0 rounded relative mb-4 bg-" +
            color +
            "-500"
          }
        >
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-star" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">{" "}</b> &nbsp;Thank you for subscribing !
            
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none  p-2 right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)} style={{margin:"10px"}}
          >
            <span>x</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

const axios = require('axios');
//const hubspotClient = axios.create({baseURL:'https://api.hubapi.com/contacts/v1/contact/?hapikey=23e5dd34-9abf-4b2f-a7b2-dc3f249490de'})
const hubspotClient = axios.create({baseURL:'https://api.hubapi.com/contacts/v1/contact/?hapikey=' + process.env.hubspotApiKey})


function Hubspot() {

  const [emailID , setEmail] = useState("notanemail@gmail.com");
  const [success , setStatus] = useState(false);

    
  function formv3(){
    // Create the new request 
    var xhr = new XMLHttpRequest();
    var url = 'https://api.hsforms.com/submissions/v3/integration/submit/' + process.env.portalID + '/' + process.env.formID
    // Example request JSON:
    var data = {
      "fields": [
        {
          "name": "email",
          "value": emailID
        },
       
      ],
      
      "legalConsentOptions":{ // Include this object when GDPR options are enabled
        "consent":{
          "consentToProcess":true,
          "text":"I agree to allow Example Company to store and process my personal data.",
          "communications":[
            {
              "value":true,
              "subscriptionTypeId":999,
              "text":"I agree to receive marketing communications from Example Company."
            }
          ]
        }
      }
    }

    var final_data = JSON.stringify(data)

    xhr.open('POST', url);
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) { 
            //alert(xhr.responseText); // Returns a 200 response if the submission is successful.
            console.log("email submitted  " + emailID)
            if(emailID != "notanemail@gmail.com")
            {
              setStatus(true);

            }

        } else if (xhr.readyState == 4 && xhr.status == 400){ 
            alert(xhr.responseText); // Returns a 400 error the submission is rejected.          
        } else if (xhr.readyState == 4 && xhr.status == 403){ 
            alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.           
        } else if (xhr.readyState == 4 && xhr.status == 404){ 
            alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found     
        }
       }


    // Sends the request 
    
    xhr.send(final_data)
 }
 



  
  return (


<section className="relative block   bg-gray-900">
        <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container py-16 mx-auto px-4 ">
            <div className="flex flex-wrap justify-center ">
              
              <div className="w-full lg:w-6/12 px-4 ">

                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-5">
                    <h4 className="text-2xl font-semibold">
                      Want us to keep you updated ?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Please provide us your email to get early access.
                    </p>
                    

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}

                      />
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={formv3}

                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {success? (<Alert color="teal" />) :null}

          </div>

        </section>
  )
}

export default Hubspot;
