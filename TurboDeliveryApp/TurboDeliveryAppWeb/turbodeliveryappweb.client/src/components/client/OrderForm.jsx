
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const RootContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(3),
}));

function OrderForm() {
    return (
        <RootContainer>
            <Typography variant="h1">Order Form</Typography>
            {/* Add order form fields here */}
        </RootContainer>
    );
}

export default OrderForm;
