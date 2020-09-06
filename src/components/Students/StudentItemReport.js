import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";

const StudentItemReport = () => {
    return (
        <Grid container>
           <Grid item sm={12}>
               <ButtonGroup variant={"contained"}>
                   <Button>TOEFL</Button>
                   <Button>SAT</Button>
                   <Button>SAT Subject</Button>
               </ButtonGroup>
           </Grid>
        </Grid>
    );
}

export default StudentItemReport;