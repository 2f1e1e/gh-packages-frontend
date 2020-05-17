export const getRepositories = `query($count:Int!) {
    viewer {
      name
       repositories(last: $count) {
         nodes {
           name
         }
       }
     }
  }`;
