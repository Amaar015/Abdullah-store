export const Protect = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Something went wrong!",
      success: false,
    });
  }
};
