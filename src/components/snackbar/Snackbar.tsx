import { SyntheticEvent } from "react";
import Stack from "@mui/material/Stack";
import MUISnackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert";
import { useReactiveVar } from '@apollo/client';
import { snackVar } from '../../constants/snack';

const Snackbar = () => {
  const snack = useReactiveVar(snackVar);

  const handleClose = (
    _event?: SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    snackVar(undefined);
  };

  return (
    <>
      {snack && (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <MUISnackbar
            open={!!snack}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity={snack.type}
              sx={{ width: "100%" }}
            >
              {snack.message}
            </Alert>
          </MUISnackbar>
        </Stack>
      )}
    </>
  );
}

export default Snackbar;