import axios from "axios";

// Limit responses from the API to US nationality

const BASEURL = "https://randomuser.me/api/?nat=US&results=30";

// Export an object with a "retrieve" method that calls the randomuser API 

//Line 7:1:  Assign object to a variable before exporting as module default  import/no-anonymous-default-export
// eslint-disable-next-line
export default {
  retrieve: function () {
    return axios.get(BASEURL);
  }
};
