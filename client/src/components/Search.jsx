import {
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  Modal,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { recentSearch } from "../data/data";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Search = ({ open, handleClose, handleOpen }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    // Simulate fetching suggestions
    const filtered = recentSearch.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filtered);
  }, [query]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            width: { xs: "90%", sm: "70%", md: "50%" },
            bgcolor: "#fff",
            height: "400px",
            padding: "1rem 2rem",
            gap: "1rem",
            flexDirection: "column",
          }}
        >
          <Input
            placeholder="Search Here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            sx={{ width: "100%" }}
          />
          {query.trim() !== "" && suggestions.length > 0 && (
            <List sx={{ width: "100%", height: "200px", overflowY: "auto" }}>
              {suggestions.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    borderBottom: "1px solid #ddd",
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#f0f0f0" },
                  }}
                >
                  <Box>
                    <Typography fontWeight="bold">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Category: {item.category}
                    </Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          )}

          {/* Recent Search */}
          {query.trim() === "" && (
            <List
              sx={{
                overflow: "auto",
                width: "100%",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {recentSearch.map((search, index) => (
                <ListItem
                  key={index}
                  sx={{
                    padding: "1.5rem 2rem",
                    marginTop: "1rem",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    fontSize: "1.2rem",
                    color: "#888",
                    cursor: "pointer",
                  }}
                >
                  {search.name}
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Search;
