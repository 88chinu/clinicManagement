// src/components/QRCodePage.js
import React, { useState, useEffect } from 'react'; // Import React and hooks
import { QRCodeSVG } from 'qrcode.react'; // Import QR code generator
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CircularProgress,
  Box
} from '@mui/material'; // Material UI components for layout and styling
import DownloadIcon from '@mui/icons-material/Download'; // Icon for the download button
import axios from 'axios'; // Axios for API requests

const URL = process.env.REACT_APP_API_URL; // Access environment variable

const QRCodePage = () => {
  // State for storing clinic data
  const [patients, setPatients] = useState([]); // Ensure initial state is an empty array
  // State for handling loading status
  const [loading, setLoading] = useState(true);

  // Base URL for accessing clinic details (to be embedded in QR code)
  const baseUrl = `${URL}/detail/`;

  // Fetch clinic data when the component loads
  useEffect(() => {
    axios
      .get(`${URL}/api/clinics`) // API endpoint to fetch clinic data
      .then(res => {
        console.log(res.data); // Debug: inspect the API response
        // Safeguard: Ensure patients is an array
        setPatients(Array.isArray(res.data) ? res.data : []);
        setLoading(false); // Set loading to false once data is loaded
      })
      .catch(err => {
        console.error('Error fetching clinics:', err); // Log errors, if any
        setLoading(false); // Ensure loading is false even in case of an error
      });
  }, []); // Empty dependency array ensures this runs only once

  // Function to download QR code as an image
  const downloadQR = (patientId, patientName) => {
    const canvas = document.createElement('canvas'); // Create a canvas element
    const svg = document.getElementById(`qr-${patientId}`); // Get the QR code SVG by ID
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg); // Serialize SVG to a string

    const img = new Image();
    // Convert the SVG source to an image
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);

    img.onload = () => {
      canvas.width = img.width; // Set canvas width
      canvas.height = img.height; // Set canvas height
      const ctx = canvas.getContext('2d'); // Get canvas context
      ctx.drawImage(img, 0, 0); // Draw the image onto the canvas

      const a = document.createElement('a'); // Create an anchor element for download
      a.download = `QR-${patientName.replace(/\s+/g, '-')}.png`; // Set download filename //regular expression
      a.href = canvas.toDataURL('image/png'); // Set the image data as the download URL
      a.click(); // Trigger the download
    };
  };

  // Show a loading spinner while data is being fetched
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress /> {/* Loading indicator */}
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}> {/* Main container */}
      <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
        Patient QR Codes
      </Typography>
      <Typography variant="body1" gutterBottom align="center" sx={{ mb: 4 }}>
        Scan QR codes to quickly access patient details
      </Typography>

      <Grid container spacing={3}> {/* Grid layout for QR cards */}
        {Array.isArray(patients) && patients.map((patient) => ( // Safeguard: Check if patients is an array
          <Grid item xs={12} sm={6} md={4} key={patient._id}>
            <Card sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 2
            }}>
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
              }}>
                {/* Generate QR code for each clinic */}
                <QRCodeSVG
                  id={`qr-${patient._id}`} // Unique ID for each QR code
                  value={`${baseUrl}${patient._id}`} // URL to embed in QR code
                  size={200} // QR code size
                  level="H" // Error correction level
                  includeMargin // Include margin around QR code
                />
                <Typography
                  variant="h6"
                  component="div"
                  align="center"
                  sx={{ mt: 2, mb: 1 }}
                >
                  {patient.Patient_name} {/* Clinic name */}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  sx={{ mb: 2 }}
                >
                  Age of {patient.age} {/* Clinic manager */}
                </Typography>
                {/* Button to download QR code */}
                <Button
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  onClick={() => downloadQR(patient._id, patient.Patient_name)}
                  size="small"
                >
                  Download QR
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default QRCodePage;
