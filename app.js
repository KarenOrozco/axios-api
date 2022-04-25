const app = Vue.createApp({
    data () {
      return {
        info: null
      }
    },
    mounted () {
        const config = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Test-Header': 'test-value',
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Credentials': 'true',
                // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
            }
        };

        // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
          
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json', config)
            .then(response => (this.info = response))
            .catch(e => console.log(e));
    }
})


app.mount("#app");