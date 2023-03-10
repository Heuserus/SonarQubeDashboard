import React from 'react'
import "../App.css";

//TODOS:
//Pull Metrics from Config (line 50-68)
//CSS Style the Content
//Add Marks for the individual scores
//Add a calculation Service to convert hours into days/weeks
//And of course build the Whole All Apps dashboard
//
export const Content = ({nMM,MM,hideAllApps,repoKey,repoName}) => {

    const [hideRecentData, setHideRecentData] = React.useState(false);
    

    return(
        <>
        
        <header  className={` ${hideAllApps ? "hidden" : ""}`}>
      <h1 className="title" id="title">{repoName}</h1>

      <nav className="nav-tabs" id="nav-tabs">
        <a href="#0" className={`${hideRecentData ? "" : "active"}`} id="tab1" onClick={() => setHideRecentData(false)}>
          Most Recent
          <span>!</span>
        </a>
        <a href="#0" className={`${hideRecentData ? "active" : ""}`} id="tab2" onClick={() => setHideRecentData(true)} >
          Overall
          <span>!</span>
        </a>
      </nav>
    </header>
    <header  className={` ${hideAllApps ? "" : "hidden"}`}>
      <h1 className="title" id="title">All Apps</h1>

      <nav className="nav-tabs" id="nav-tabs">
        <a href="#0" className={`${hideRecentData ? "" : "active"}`} id="tab1" onClick={() => setHideRecentData(false)}>
          Most Recent
          <span>!</span>
        </a>
        <a href="#0" className={`${hideRecentData ? "active" : ""}`} id="tab2" onClick={() => setHideRecentData(true)} >
          Overall
          <span>!</span>
        </a>
      </nav>
    </header>
        <div  className={`content-columns ${hideAllApps ? "hidden" : ""}`} >
        <div className={`recentData ${hideRecentData ? "hidden" : ""}`} id="div1">
          
            <div>{nMM['new_bugs']} Bugs</div>
            <div>{nMM['new_vulnerabilities']} Vulnerabilities</div>
            <div>{nMM['new_security_hotspots']} Security Hotspots</div>
            <div>{nMM['new_technical_debt']}h Technical Debt</div>
            <div>{nMM['new_coverage']}% Coverage</div>
            <div>{nMM['new_duplicated_lines_density']}% Duplications</div>
          
          
          
          </div>
        <div className={`recentData ${hideRecentData ? "" : "hidden"}`} id="div1" >

        
            <div><div>{MM['bugs']} Bugs</div></div>
            <div><div>{MM['vulnerabilities']} Vulnerabilities</div></div>
            <div><div>{MM['security_hotspots']} Security Hotspots</div></div>
            <div><div>{MM['sqale_index']}h Technical Debt</div></div>
            <div><div>{MM['coverage']}% Coverage</div></div>
            <div><div>{MM['duplicated_lines_density']}% Duplications</div></div>
          
          
        </div>
        </div>
        <div  className={`content-columns ${hideAllApps ? "" : "hidden"}`} >
          All Apps
        </div>
        
        </>
    )
}