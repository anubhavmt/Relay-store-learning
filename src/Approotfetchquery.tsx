import { Environment, fetchQuery, useFragment, useRelayEnvironment } from "react-relay/hooks"
import { graphql } from "babel-plugin-relay/macro";

const appquery = graphql`
# Queries in graphql tags must start with the module name ('App') and end with 'Query'. Got 'allbook' instead.
query ApprootfetchqueryQuery {
  books {
    ...App_detail
  }
}
`;



const fetch =  (env: any) => {

    const response = fetchQuery(env,  appquery ,{})

    if ('toPromise' in response) {
        return response.toPromise();
      }
    
      // Todo: look into the reason for different behaviour in production and local
      return response;
    
}

const fetchData =async (env: any) => {


    const cachedData = env.getStore().getSource().get("1");   // so if we want to check manuaaly then must have id of that
    if (cachedData) {
        console.log(cachedData)
      return Promise.resolve(cachedData);
    }

    const data = await fetch(env)

    console.log(data)
    // env.getStore().getSource().set("anubhav|12345", data);  // error since set not exist in getSource return type

    return data; 
}
const App = () => {

    fetchData(useRelayEnvironment())

    return <>fdsafasfsadf</>
}

export default App