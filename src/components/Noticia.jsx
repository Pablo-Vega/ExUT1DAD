import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Card, CardContent, Typography, IconButton, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle, Menu, MenuItem } from "@mui/material";

const Noticia = ({ title, Date, imagenUrl, altText}) => {
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{
        maxWidth: 600,
        margin: "20px auto",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      
      <IconButton
        onClick={handleMenuClick}
        sx={{ position: "absolute", top: 10, right: 10 }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Compartir</MenuItem>
      </Menu>

      <CardContent>
        <Typography variant="h5" component="h4">
          {title}
        </Typography>

        {Date}
      </CardContent>

      <CardContent>
      <img 
            src={imagenUrl}
            alt={altText}
            style={{ maxWidth: '90%', maxHeight: '80vh', cursor: 'pointer' }} 
          />
      </CardContent>
      
      <IconButton
        onClick={toggleLike}
        aria-label="Like"
        sx={{ marginTop: "10px" }}
      >
        {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
      </IconButton>

      <IconButton
        onClick={() => setOpen(true)}
        aria-label="Share"
        sx={{ marginTop: "10px" }}
      >
        <ShareIcon />
      </IconButton>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Compartir</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿A través de qué plataforma quieres compartir?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <IconButton aria-label="WhatsApp">
            <WhatsAppIcon />
          </IconButton>
          <IconButton aria-label="Telegram">
            <TelegramIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default Noticia;


