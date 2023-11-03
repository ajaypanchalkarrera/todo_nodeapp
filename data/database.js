import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendapi",
    })
    .then((c) => console.log(`Database connected ${c.connection.host}`))
    .catch(() =>
      console.log("Not connected to database, please start the server")
    );
};
