import React, { useState } from 'react'
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import DoneIcon from "@mui/icons-material/Done";
import Button from "@mui/joy/Button";

const PgDetailHeader = ({data}) => {
    const [open, setOpen] = useState(false);
  return (
    <>
     <div className="pgdetail-header">
          <div className="pgdetail-header-info">
            <span>Rent/bed</span>
            <div className="pgdetail-header-info-price">
              ₹{data.price}
              <span>onwards</span>
            </div>
          </div>
          <div className="pgdetail-header-pgname">
            <div className="partner">
              <DoneIcon />
              <span>Partner Verified</span>
            </div>
            <div>
              <h1>{data.name} Paying Guest</h1>
              <div className="pgdetail-header-occupancy">
                <div className="occupancy">Occupancy Type: Double, Triple</div>{" "}
                <div className="gender">For {data.gender}</div>{" "}
                {data.foodavailable ? (
                  <spna
                    style={{
                      "border": "0px solid",
                      "backgroundColor": "#909090"
}}>
                    Food include
                  </spna>
                ) : (
                  <span>Food Notinclude</span>
                )}
              </div>
            </div>
          </div>
          <div className="phoneno">
          <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
       View Phone No.
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.body',
            }}
          />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Phone Number
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
             +91{data.number}
          </Typography>
        </Sheet>
      </Modal>
          </div>
        </div>
    </>
  )
}

export default PgDetailHeader