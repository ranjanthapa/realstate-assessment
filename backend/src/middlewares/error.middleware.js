export const errorHandler = (err, req, res, next) => {
  const message = err.message || "Internal Server Error";

  res.status(400).json({
    status: "error",
    message,
  });
};
