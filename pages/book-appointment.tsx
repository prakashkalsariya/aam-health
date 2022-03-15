// import DateFnsUtils from "@date-io/date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { Dialog, DialogContent, makeStyles, Theme } from "@material-ui/core";
import { Call, Forum, Videocam, WhatsApp } from "@material-ui/icons";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  dialogueContainer: {
    "& .MuiDialogContent-root": {
      padding: "60px 30px",
    },
    "& .appointment-types": {
      marginTop: "25px",
      display: "flex",
      flexWrap: "wrap",
      "& .item-container": {
        width: "100px",
        height: "100px",
        background: "#F7F7F7",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginRight: "24px",
        cursor: "pointer",
        "& span": {
          fontSize: "14px",
        },
        "& .icon": {
          fontSize: "2rem",
          color: "#63C8F2",
          marginBottom: "20px",
        },
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          border: `2px solid #63C8F2`,
        },
        [theme.breakpoints.down("xs")]: {
          marginBottom: 30,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      "& .MuiDialog-paper": {
        width: "100%",
        margin: `0px !important`,
        maxWidth: "unset",
        borderRadius: 0,
      },
    },
  },
  datePicker: {
    // border: "1px solid #E1E1E1",
    boxSizing: "border-box",
    borderRadius: 10,
    maxWidth: 400,
    "& .MuiInputBase-root": {
      borderRadius: theme.shape.borderRadius * 0.5,
    },
    "& .MuiInputBase-input": {
      padding: theme.spacing(2, 2),
      fontSize: "0.9rem",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #E1E1E1",
      borderRadius: 10,
    },
    "& .MuiSvgIcon-root": {
      color: "#63C8F2",
    },
  },
  stepTitle: {
    fontSize: "18px",
    lineHeight: "27px",
    color: "#303030",
  },

  chooseDayTitle: {
    marginTop: 40,
  },
  datePickerContainer: {
    marginTop: 20,
  },
  boockingSlots: {
    "& .slots": {
      marginTop: 13,
    },
  },
  slotTitle: {
    color: "#303030",
    fontSize: "18px",
    lineHeight: "30px",
    marginTop: 30,
  },
  boockingSlot: {
    width: "100%",
    display: "grid",
    alignItems: "center",
    background: "#F6F6F6",
    borderRadius: 5,
    padding: `14px 12px`,
    gridTemplateColumns: "50px calc(100% - 200px) 150px",
    marginBottom: 15,
    "& .middle-content": {
      display: "flex",
      width: "100%",
      justifyContent: "space-around",
    },
    "& .middle-content-sm": {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    "& .mb": {
      [theme.breakpoints.up("xs")]: {
        display: "none",
      },
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
    "& .slot-content-mobile": {
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "block",
        padding: 15,
        "& .content-top": {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        },
        "& .duration-mb": {
          marginTop: 25,
          //   marginBottom: 12,
        },
      },
    },
    "& .select-button": {
      textAlign: "end",
      "& button": {
        background: "#63C8F2",
        borderRadius: 5,
        border: "none",
        color: "white",
        padding: "8px 35px",
        cursor: "pointer",
        "&:hover": {
          background: "#303030",
        },
        [theme.breakpoints.down("xs")]: {
          width: "100% !important",
          padding: "14px 35px",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
      paddingBottom: "0px",
      padding: 0,
      //   "& .name": {
      //     width: "30%",
      //   },
      //   "& .timing-mb": {
      //     width: "50%",
      //   },
      //   display: "flex",
      //   //   gridTemplateColumns: "30% 70%",
    },
  },
  bottomContent: {
    width: "100%",
    justifyContent: "flex-end",
    display: "flex",
    marginTop: 40,
    "& button": {
      fontSize: 15,
      color: "white",
      border: "none",
      borderRadius: 5,
      background: "#303030",
      padding: "14px 35px",
      cursor: "pointer",
    },
    "& .conform-button": {},
    "& .cancel-button": {
      marginRight: 27,
      background: "#727376",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      "& button": {
        width: "100%",
      },
      "& .cancel-button": {
        marginTop: 20,
      },
    },
  },
}));

const boockingSlots = [
  {
    id: "morning",
    title: "Morning",
    slots: [
      {
        id: "morning_slot_1",
        title: "Slot 1",
        timing: "10:00 AM - 10:30 AM",
        duration: "30 minutes",
      },
      {
        id: "morning_slot_2",
        title: "Slot 2",
        timing: "11:00 AM - 12:00 AM",
        duration: "1 Hour",
      },
    ],
  },
  {
    id: "afternoon",
    title: "Afternoon",
    slots: [
      {
        id: "afternoon_slot_1",
        title: "Slot 1",
        timing: "01:00 PM - 01:30 PM",
        duration: "30 minutes",
      },
      {
        id: "afternoon_slot_2",
        title: "Slot 2",
        timing: "01:30 AM - 02:00 AM",
        duration: "30 minutes",
      },
    ],
  },
  {
    id: "evening",
    title: "Evening",
    slots: [
      {
        id: "evening_slot_1",
        title: "Slot 1",
        timing: "06:00 PM - 06:30 PM",
        duration: "30 minutes",
      },
      {
        id: "evening_slot_2",
        title: "Slot 2",
        timing: "06:30 AM - 07:30 AM",
        duration: "30 minutes",
      },
    ],
  },
];

const BookAppointment = () => {
  const styles = useStyles();

  return (
    <div>
      BookAppointment
      <Dialog
        open={true}
        fullWidth
        maxWidth={"md"}
        className={styles.dialogueContainer}
        scroll="body"
        // disablePortal
      >
        <DialogContent>
          <h4 className={`font-600 ${styles.stepTitle}`}>
            CHOOSE APPOINTMENT TYPE
          </h4>

          <div className="appointment-types">
            <div className="item-container">
              <Call className="icon" />
              <span className="font-400">Call</span>
            </div>
            <div className="item-container">
              <Forum className="icon" />
              <span className="font-400">Chat</span>
            </div>
            <div className="item-container">
              <WhatsApp className="icon" />
              <span className="font-400">Whattsapp</span>
            </div>
            <div className="item-container">
              <Videocam className="icon" />
              <span className="font-400">Video Call</span>
            </div>
          </div>

          <h4
            className={`font-600 ${styles.stepTitle} ${styles.chooseDayTitle}`}
          >
            CHOOSE DAY
          </h4>
          <div className={styles.datePickerContainer}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                autoOk
                inputVariant="outlined"
                variant="inline"
                format="dd/MM/yyyy"
                fullWidth
                placeholder="Pick day"
                className={styles.datePicker}
                value={new Date()}
                DialogProps={{
                  scroll: "body",
                }}
                onChange={(date) => {
                  //   formik.setFieldValue("listing_contract_date", date);
                }}
              />
            </MuiPickersUtilsProvider>
          </div>

          <h4
            className={`font-600 ${styles.stepTitle} ${styles.chooseDayTitle}`}
          >
            CHOOSE SLOT
          </h4>

          <div className={styles.boockingSlots}>
            {boockingSlots.map((slots) => (
              <>
                <h4 className={`${styles.slotTitle} font-400`}>
                  {slots.title}
                </h4>
                <div className="slots">
                  {slots.slots.map((slot) => (
                    <div
                      key={slot.id}
                      className={`font-400 ${styles.boockingSlot}`}
                    >
                      <div className="name middle-content-sm">{slot.title}</div>
                      <div className="middle-content middle-content-sm">
                        <div className="timing">{slot.timing}</div>
                        <div className="duration">{slot.duration}</div>
                      </div>

                      <div className="slot-content-mobile">
                        <div className="content-top">
                          <div className="name">{slot.title}</div>

                          <div className="timing-mb mb">{slot.timing}</div>
                        </div>
                        <div className="duration-mb mb">{slot.duration}</div>
                      </div>

                      <div className="select-button">
                        <button className={`font-400`}>Select</button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div>

          <div className={styles.bottomContent}>
            <button className="cancel-button font-400">Cancel</button>
            <button className="conform-button font-400">
              Conform Appointment
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookAppointment;
