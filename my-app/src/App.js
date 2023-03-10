import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Head } from './components/Head'
import { Nav} from './components/Nav'

import {Content} from './components/Content'

import { getRepoData,  getAllRepoData } from './services/Service'
import  config  from "./config";


//General TODOS:
//Add sorting by Metrics to the All Apps tab
//Add an actual Backend to replace the config file
//Add functionality to add projects to that Backend
//
function App() {

  const [urlKeyState, setUrlKeyState] = useState("");
  const [nMM,setnMM] = useState(new Map());
  const [MM,setMM] = useState(new Map());
  const [hideAllApps,setHideAllApps] = useState(false)
  const [repoName,setRepoName] = useState("No Repo picked")

  const newMeasures = config.newMeasures
  const measures = config.measures
  
  //Calls fetch for the current Repository and
  //converts the result into the measuremaps.
  //Here you can also extract the metric to add
  //variable metric support.
  useEffect(() => {
    if(urlKeyState!==""){
      getRepoData(urlKeyState)
      .then(repoData => {
        let newMeasuresMap = new Map();
        let measuresMap = new Map();
        
        repoData['component']['measures'].forEach ((measure) => {
          if(newMeasures.includes(measure['metric'])){
            newMeasuresMap[measure['metric']] = measure['period']['value']
          }
          else if(measures.includes(measure['metric'])){
            measuresMap[measure['metric']] = measure['value']
          }
        });
 
        setMM(measuresMap)
        setnMM(newMeasuresMap)
      });
    }
  }, [urlKeyState,measures,newMeasures]) 

  //Calls Fetch on all repos in the config

  //TODO: repoData needs to be set to a state which is sent to Content for display
  useEffect(() => {
    if(!hideAllApps){
      getAllRepoData()
      .then(repoData => {
        //console.log(repoData)
      });
    } 
  }, [hideAllApps])

    return (
        <div>
          <Head></Head>
          <body>
          <div className="site-wrap">
            <Nav repoKey={setUrlKeyState} setHideAllApps={setHideAllApps} hideAllApps={hideAllApps} repoName={setRepoName}></Nav>
            <main className= "project-data">
                  <Content nMM={nMM} MM={MM} hideAllApps={hideAllApps} repoKey={urlKeyState} repoName={repoName}></Content>
                  </main>
              </div>
          </body>
          
        </div>
    );
}
export default App;
