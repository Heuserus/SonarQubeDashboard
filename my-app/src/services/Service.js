
import  config  from "../config";

//Gets data for a single Repo
export async function getRepoData(repoKey) {

    try{
        const response = await fetch('/api/repo',{
            headers:{'key':repoKey}
        
        });
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

//Gets all RepoData

//TODO:
//This should probably solved with a promise about the array length
//Otherwise this sometimes does not fetch all repos which is a major oversight

export async function getAllRepoData(){
    const data = []

    const apps = config.apps;

    apps.forEach(app => {
        app.repos.forEach(repo => {
            getRepoData(repo['url-key']).then(repoData => {
                data.push(repoData)
            })
            
        })
        
    });
    return await data;

}

//Gets the Reponame belonging to the repokey
export function getRepoName(key){
    const apps = config.apps
    var count = 0
    var name = ""
    apps.forEach(app => {
        app.repos.forEach(repo => {
            if(key==repo['url-key'] && count==0){
                
                count++;
                name = repo['name']
            }
            
            
            
        })
        
    });
    return name
}

