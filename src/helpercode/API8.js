import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=30";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query

//Line 7:1:  Assign object to a variable before exporting as module default  import/no-anonymous-default-export
// eslint-disable-next-line
export default {
  search: function() {
    console.log("HEY YOU");
    return axios.get(BASEURL).then(response => {
      console.log("HELP");
      console.log(response);
    }) 
  }
};
