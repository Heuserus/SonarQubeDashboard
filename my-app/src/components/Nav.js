import React from 'react'
import  config  from "../config";
import "../App.css";
import {useState} from 'react'
import { getRepoName } from '../services/Service'

const apps = config.apps;

//TODOS:
//All Apps ref has a different hover color than the Apps #mystery
//

export const Nav = ({repoKey,setHideAllApps,hideAllApps,repoName}) => {

  const [hideMap, setMapState] = useState(new Map());



  const hideNavTabs = (key) => {
    setMapState(new Map())
    setMapState(map => new Map(map.set(key, !hideMap.get(key))));
  }

  const setRepoKey = (key) => {
    repoKey(key)
    setHideAllApps(false)
    repoName(getRepoName(key))
    
  }

  
    return(
        <nav className="site-nav">

        <div className="name">
          Variety Dashboard
    
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M11.5,22C11.64,22 11.77,22 11.9,21.96C12.55,21.82 13.09,21.38 13.34,20.78C13.44,20.54 13.5,20.27 13.5,20H9.5A2,2 0 0,0 11.5,22M18,10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18L18,16M19.97,10H21.97C21.82,6.79 20.24,3.97 17.85,2.15L16.42,3.58C18.46,5 19.82,7.35 19.97,10M6.58,3.58L5.15,2.15C2.76,3.97 1.18,6.79 1,10H3C3.18,7.35 4.54,5 6.58,3.58Z"></path>
          </svg>
        </div>
    
        <div className="app-tabs" id="app-tabs">
          <a href="#1" style={{margin:"32px"}} onClick={()=>setHideAllApps(true)}>All Apps</a>
          {apps.map((app, key) => {
            return (
              <ul>
              <li>
              <a href="#0" onClick={() => {hideNavTabs(app['name'])} } >{app['name']}</a>
              
                {app.repos.map((repo) =>  {
                  return (
                  <ul className={`${hideMap.get(app['name']) ? "" : "hidden"}`} ><a id="repo" href="#0" onClick={() => {setRepoKey(repo['url-key'])}}>{repo['name']}</a></ul>
            )})}
              
            
              </li>
              </ul>
            )
          })}
          
        </div>
    
        <div className="note">
          <h3>Note</h3>
          <p>Dashboard made with data from Sonarcube API.</p>
        </div>
    
      </nav>
    )
}