import * as React from 'react';
import Box from '@mui/material/Box';
import { Card, Grid } from '@mui/material';
import { Style } from "./style";
import { StepperRole } from './Stepper';
import { ClaimEmail } from './ClaimEmail';
import { PaymentInfo } from './PaymentInfo';
import { useState } from 'react';
import { PaymentEmail } from './PaymentEmail';
import { SuccessScreen } from './Success';
import { MerchantProfile } from './MerchantProfile';
import { DiscoverFeedCard } from './DiscoverFeedCard';
import { MerchantCategories } from './MerchantCategories';
import { CustomButton } from './customButton/CustomButton';
import { Protection } from './Protection';



export const OnBoarding = () => {
    const [stepperValue, setStepperValue] = useState(0)
    console.log(stepperValue)
    const previousButton = () => {
        if (stepperValue > 0) {
            setStepperValue((value) => value - 1);
        }
        else {
            return
        }
    }
    const nextButton = () => {
        if (stepperValue < 7) {
            setStepperValue((value) => value + 1);
        }
        else {
            return
        }
    }

    const classes = Style();

    return (
        <>
            <Box sx={{ width: "952px", backgroundColor: "gray", margin: "auto" }}>
            <Card sx={{ backgroundColor: "white", borderRadius: "20px", marginTop: "2rem", }}>

            <StepperRole className={classes.progressbar} stepperValue={stepperValue} />

                    <Grid container>
                        <Grid item
                            xs={4} sm={4} md={3} lg={3} xl={3}>

                        </Grid>
                        <Grid item

                            xs={4} sm={4} md={6} lg={6} xl={6}>

                                <Box sx={{ marginRight: "2rem", marginLeft: "2rem" }}>

                                    <Box >
                                        {stepperValue === 0 && <ClaimEmail />}
                                        {stepperValue === 1 && <PaymentInfo />}
                                        {stepperValue === 2 && <PaymentEmail />}
                                        {stepperValue === 3 && <MerchantProfile />}
                                        {stepperValue === 4 && <DiscoverFeedCard />}
                                        {stepperValue === 5 && <MerchantCategories />}
                                        {stepperValue === 6 && <Protection />}
                                        {stepperValue === 7 && <SuccessScreen />}



                                    </Box>
                                    <Grid container >
                                        <Grid item
                                            xs={4} sm={4} md={3} lg={3} xl={3} >

                                        </Grid>
                                        <Grid item
                                            xs={4} sm={4} md={6} lg={6} xl={6} >
                                            <Box className={classes.buttonBox}>
                                                <CustomButton onClick={previousButton}>Previous</CustomButton>
                                                <CustomButton onClick={nextButton}>Continue</CustomButton>

                                            </Box>
                                        </Grid>
                                        <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>

                                        </Grid>
                                    </Grid>
                                </Box>

                        </Grid>
                        <Grid item
                            xs={4} sm={4} md={3} lg={3} xl={3}>

                        </Grid>

                    </Grid>
                </Card>

            </Box>

        </>

    );
}
