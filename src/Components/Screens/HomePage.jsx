import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

const products = [
  {
    id: 1,
    name: "Iphone 15 Pro max",
    description: "This is a description for Product 1",
    imageUrl:
      "https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/common/graph/app/iphone-15-pro/iPhone_15_Pro_Natural_Titanium_01.jpg?scl=1&qlt=90",
  },
  {
    id: 2,
    name: "Iphone 14",
    description: "This is a description for Product 2",
    imageUrl:
      "https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/common/graph/app/iphone-14-plus/iPhone_14_Plus_Blue_01.jpg?scl=1&qlt=90",
  },
  {
    id: 3,
    name: "Samsang s22",
    description: "This is a description for Product 3",
    imageUrl:
      "https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/common/graph/app/scg13/galaxy-s22_phantomwhite_05.jpg?scl=1&qlt=90",
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is a description for Product 4",
    imageUrl:
      "https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/common/graph/app/scg20/galaxy-s23-ultra_green_05.jpg?scl=1&qlt=90",
  },
  {
    id: 5,
    name: "Product 5",
    description: "This is a description for Product 5",
    imageUrl:
      "https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/common/graph/app/scg13/galaxy-s22_phantomwhite_05.jpg?scl=1&qlt=90",
  },
  {
    id: 6,
    name: "Product 6",
    description: "This is a description for Product 6",
    imageUrl:
      "https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/common/graph/app/scg13/galaxy-s22_phantomwhite_05.jpg?scl=1&qlt=90",
  },
  {
    id: 7,
    name: "Product 7",
    description: "This is a description for Product 7",
    imageUrl:
      "https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/common/graph/app/scg13/galaxy-s22_phantomwhite_05.jpg?scl=1&qlt=90",
  },
  {
    id: 8,
    name: "Product 8",
    description: "This is a description for Product 8",
    imageUrl:
      "https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/common/graph/app/scg13/galaxy-s22_phantomwhite_05.jpg?scl=1&qlt=90",
  },
  {
    id: 9,
    name: "Product 9",
    description: "This is a description for Product 9",
    imageUrl:
      "https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/common/graph/app/scg13/galaxy-s22_phantomwhite_05.jpg?scl=1&qlt=90",
  },

  // Add more products here...
];

const HomePage = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#f8f9fa", padding: "30px 0" }}>
        <Container maxWidth="md">
          <Typography sx={{ fontSize: "5vmin" }} align="center" gutterBottom>
            Welcome to Our Store
          </Typography>
          <Typography sx={{ fontSize: "4vmin" }} align="center" paragraph>
            Check out our latest products below.
          </Typography>
          <Grid container spacing={4} justify="center">
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={product.name}
                      height="200"
                      width="200"
                      image={product.imageUrl}
                      title={product.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {product.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  {/* Add to Cart button */}
                  <Button
                    size="small"
                    fullWidth
                    sx={{
                      bgcolor: "#1976D2", // Dark blue shade
                      color: "white", // Black text color
                      mt: 1,
                      "&:hover": {
                        bgcolor: "#64B5F6", // Light blue shade on hover
                      },
                    }}
                  >
                    Add to Cart
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
