import Review from "../models/ReviewSchema";
import Doctor from "../models/DoctorSchema";

// get all reviews

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});

    res
      .status(200)
      .json({ success: true, messge: "Successfully", data: reviews });
  } catch (err) {
    res.status(404).json({ success: false, messge: "Not Found" });
  }
};

// Create review

export const createReview = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.userId;

  const newReview = new Review(req.body);

  try {
    const savedReview = await newReview.save();

    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: savedReview._id }, // Saved Review Are Fetched by Reviews id
    });

    res
      .status(200)
      .json({ success: true, message: "Review submitted", data: savedReview });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// part-03:   1:17:16
