import React, {useState}from 'react'
import {Typography,Button,Stepper,Step,StepLabel,TextField} from '@material-ui/core';
import {useForm,FormProvider,useFormContext,Controller} from 'react-hook-form';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: theme.spacing(40),
  },

}));

function getSteps(){
    return["Primary Info",
    "Secondary Info",
    "Education Details",
    "Address Details",
    "Bank Details",
    "Technical Skills",
    "Experience",
    "Contact"]
}

const PrimaryInfo=()=>{
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );}
const SecondaryInfo=()=>{
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );}
const EducationDetails=()=>{
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
}
const AdressDetails=()=>{
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
}
const BankDetails=()=>{
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );}
const TechnicalSkills=()=>{ const { control } = useFormContext();
return (
  <>
    <Controller
      control={control}
      name="firstName"
      render={({ field }) => (
        <TextField
          id="first-name"
          label="First Name"
          variant="outlined"
          placeholder="Enter Your First Name"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    />

    <Controller
      control={control}
      name="lastName"
      render={({ field }) => (
        <TextField
          id="last-name"
          label="Last Name"
          variant="outlined"
          placeholder="Enter Your Last Name"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    />

    <Controller
      control={control}
      name="nickName"
      render={({ field }) => (
        <TextField
          id="nick-name"
          label="Nick Name"
          variant="outlined"
          placeholder="Enter Your Nick Name"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    />
  </>
);}
const Experience=()=>{
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );}
const Contact=()=>{ const { control } = useFormContext();
return (
  <>
    <Controller
      control={control}
      name="firstName"
      render={({ field }) => (
        <TextField
          id="first-name"
          label="First Name"
          variant="outlined"
          placeholder="Enter Your First Name"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    />

    <Controller
      control={control}
      name="lastName"
      render={({ field }) => (
        <TextField
          id="last-name"
          label="Last Name"
          variant="outlined"
          placeholder="Enter Your Last Name"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    />

    <Controller
      control={control}
      name="nickName"
      render={({ field }) => (
        <TextField
          id="nick-name"
          label="Nick Name"
          variant="outlined"
          placeholder="Enter Your Nick Name"
          fullWidth
          margin="normal"
          {...field}
        />
      )}
    />
  </>
);}
function getStepContent(step) {
    switch (step) {
      case 0:
        return (
        <PrimaryInfo/>
        );
  
      case 1:
        return (
          <SecondaryInfo/>
        );
      case 2:
        return (
         <EducationDetails/>
        );
      case 3:
        return (
         <AdressDetails/>
        );
      case 4:
        return (
          <BankDetails/>
        );
      case 5:
        return (
          <TechnicalSkills/>
        );
      case 6:
        return (
          <Experience/>
        );
      case 7:
        return (
          <Contact/>
        );
      default:
        return "unknown step";
    }
  }  
    
function LinearStepper() {
  const classes = useStyles();
    const [activeStep,setActiveStep]=useState(0);
    const [isStepComplete,setStepComplete]=useState(false)
    const steps=getSteps();
    const methods=useForm({
      defaultValues: {
        firstName: "",
        lastName: "",
        nickName: "",
        emailAddress: "",
        phoneNumber: "",
        alternatePhone: "",
        address1: "",
        address2: "",
        country: "",
        cardNumber: "",
        cardMonth: "",
        cardYear: "",
      },
});
    const handleNext=(data)=>{
      console.log(data);
      if (activeStep === steps.length - 1) {
        fetch("https://jsonplaceholder.typicode.com/comments")
          .then((data) => data.json())
          .then((res) => {
            console.log(res);
            setActiveStep(activeStep + 1);
          });
      }
      else {
       
        setActiveStep(activeStep + 1);
       
        
      }
       
    }
    const handleBack=()=>{
        setActiveStep(activeStep-1)
    }
    // const onSubmit=(data )=>{
    //   console.log(data);
    // }
  return (
    <div>
      <Stepper activeStep={activeStep} connector={null}>
                {
                    steps.map((step,index)=>{
                        return(
                            <Step key={index} >
                            <StepLabel icon={null}>{step}</StepLabel>
                         </Step>
                        
                    )})
                }
        
         
      </Stepper>
      {
        activeStep===steps.length?(<Typography variant='h3'align="center">
            Thank You
        </Typography>):(
            <>
            <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
            {getStepContent(activeStep)}
           
            <Button variant='contained'color='primary'
             className={classes.button}
             disabled={activeStep===0} 
             onClick={handleBack}>
              Back</Button>
            <Button variant='contained'color='primary'
             className={classes.button}
            //  onClick={handleNext} 
             type='submit'>
              {activeStep===steps.length-1?"Finish":"Next"}</Button>
              </form>
            </FormProvider>
           
    
      
            </>
        )
      }

    </div>
  )
}

export default LinearStepper
