import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendapi",
    })
    .then(() => console.log("Database connected"))
    .catch(() =>
      console.log("Not connected to database, please start the server")
    );
};
