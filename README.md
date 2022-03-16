# Xcentium Login Challenge

* Given CSV data, successfully parse and login using credentials on file. 
* Responsive design for login and homepage. 
* Check state if user is logged in. True: redirect to /homepage False: reroute to /.
* Set errors if invalid credentials.

### npm install in root directory & react root directory.

## Reading the CSV data
### ../backend/routes/index.js

```js
fs.createReadStream("./logindata.csv")
  .pipe(parse())
  .on("data", (csvrow) => {
    try {
      //save data as in object, username for unique values
      csv_data[csvrow.Username] = {
        Username: csvrow.Username,
        Password: csvrow.Password,
        Name: csvrow.Name,
        Id: csvrow.Id,
      }
    } catch (error) {
      console.log(error);
    }
  })
  .on("end", function () {
    console.log("this is csv data", csv_data);
    console.log("CSV file successfully processed");
  });
  ```
  
  ## Fetch API between React and Node.js 
  ### ../frontend/src/components/Login/index.js
  
  ```js
  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "XSRF-Token": Cookies.get("XSRF-TOKEN"),
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response;
    setRes(data)
    return data;
  }

  useEffect(() => {
    if (res) {
    if (res.status >= 400) {
      setError("Invalid username or password");
      setUser(null);
    } else {
      setUser(username);
    }
  }
  ```
