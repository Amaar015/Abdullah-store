import {
  Avatar,
  Box,
  Button,
  Fade,
  Modal,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";

import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 250, sm: 400 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: { xs: "1rem", sm: "2rem 2rem" },
};

const Review = ({ handleClose, open }) => {
  const [review, setReview] = useState({
    name: "",
    avatar: "",
    comment: "",
    rating: 0,
  });
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };
  const handleRatingChange = (event, newValue) => {
    setReview({ ...review, rating: newValue });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setReview({
        ...review,
        avatarFile: file,
        avatarPreview: URL.createObjectURL(file),
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      ...review,
      date: new Date().toLocaleDateString(),
    };
    console.log(newReview);
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Stack sx={style} spacing={2}>
          <Typography fontSize={"20px"} fontWeight={"bold"}>
            Review Product
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                {review.avatarPreview && (
                  <Avatar
                    src={review.avatarPreview}
                    alt="avatar preview"
                    sx={{ width: 64, height: 64 }}
                  />
                )}
                <Button
                  variant="outlined"
                  component="label"
                  sx={{
                    height: "40px",
                    color: "#6a5acd",
                    borderColor: "#6a5acd",
                    "&:hover": {
                      backgroundColor: "#6a5acd",
                      color: "#fff",
                      borderColor: "#6a5acd",
                    },
                  }}
                >
                  Upload Avatar
                  <input
                    size={"small"}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleFileChange}
                  />
                </Button>
              </Stack>
              <TextField
                label="Name"
                name="name"
                required
                fullWidth
                value={review.name}
                onChange={handleChange}
                sx={{
                  "& label.Mui-focused": {
                    color: "#6a5acd",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#6a5acd",
                    },
                  },
                }}
              />

              {/* <TextField
                label="Avatar URL"
                name="avatar"
                fullWidth
                value={review.avatar}
                onChange={handleChange}
              /> */}
              <TextField
                label="Comment"
                name="comment"
                required
                fullWidth
                multiline
                rows={3}
                value={review.comment}
                onChange={handleChange}
                sx={{
                  "& label.Mui-focused": {
                    color: "#6a5acd",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#6a5acd",
                    },
                  },
                }}
              />
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography>Rating:</Typography>
                <Rating
                  name="rating"
                  value={review.rating}
                  onChange={handleRatingChange}
                />
                <Typography>({review.rating})</Typography>
              </Stack>
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  height: "40px",
                  color: "#6a5acd",
                  borderColor: "#6a5acd",
                  "&:hover": {
                    backgroundColor: "#6a5acd",
                    color: "#fff",
                    borderColor: "#6a5acd",
                  },
                }}
              >
                Submit Review
              </Button>
            </Stack>
          </form>
        </Stack>
      </Fade>
    </Modal>
  );
};

export default Review;
