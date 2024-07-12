import mongoose from "mongoose";
import app from "./app";

async function main() {

    try{

        await mongoose.connect(process.env.DB_URL);

        const port = 5000
    }catch(err){
        console.log(err);
        
    }

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })

  }

  main ();