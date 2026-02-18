export const zodValidators = (schema) => {
  return async (req, res, next) => {
    try {
      console.log(req.body);
      schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(400).json({
        error: error.issues,
        success: false,
        message: "Validation Failed",
      });
    }
  };
};
