import prettier from 'prettier'

// Print and format every response
const logger = (res) => {
      console.log("\n" + prettier.format(JSON.stringify(res.data) + "\n", {
            semi: false,
            parser: "json-stringify"
      }));
      console.log(res.headers.date + "\n")
}

export default logger