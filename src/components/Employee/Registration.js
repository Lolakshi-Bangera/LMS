import React from 'react'
import { Container, CssBaseline, Paper,Box } from '@material-ui/core'
import LinearStepper from './LinearStepper'

function Registration() {
  return (
   <>
   <CssBaseline/>
   <Container component={Box} p={4}>
    <Paper component={Box} p={3}>
      <LinearStepper/>
    </Paper>
   </Container>
   </>
  )
}

export default Registration