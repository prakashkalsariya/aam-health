// import DateFnsUtils from "@date-io/date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { Dialog, DialogContent, makeStyles, Theme } from "@material-ui/core";
import { Call, Forum, Videocam, WhatsApp } from "@material-ui/icons";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  dialogueContainer: {
    // zIndex: `13000 !important`,
    "& .MuiBackdrop-root": {
      backdropFilter: `blur(10px)`,
    },
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

      "& .selected_type": {
        border: `2px solid #63C8F2`,
      },
    },
    [theme.breakpoints.down("xs")]: {
      "& .MuiDialog-paper": {
        width: "100%",
        margin: `0px !important`,
        maxWidth: "unset",
        borderRadius: 0,
        height: "100%",
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
    border: `2px solid #F6F6F6`,
    transition: "all 0.2s ease-in-out",
    "& .middle-content": {
      display: "flex",
      width: "100%",
      justifyContent: "space-around",
    },
    "&:hover": {
      border: `2px solid #63C8F2`,
      "& button": {
        background: "#303030",
      },
    },
    "&.active-slot": {
      border: `2px solid #63C8F2`,
      "& button": {
        background: "#303030",
      },
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
        transition: "all 0.2s ease-in-out",

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
  successContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& .text-content": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 20,
      "& .title-text": {
        color: "#303030",
        fontSize: "20px",
        marginBottom: 15,
        marginTop: 15,
      },
      "& .dr-name": {
        color: "#F0B01B",
        fontSize: "30px",
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        lineHeight: "130%",
        // [theme.breakpoints.down("xs")]: {

        // },
      },
    },

    "& .button-content": {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      marginTop: 50,
      "& button": {
        minWidth: 200,
        padding: `15px 0px`,
        background: "#63C8F2",
        borderRadius: 5,
        border: "none",
        color: "white",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        letterSpacing: "0.02em",
      },
      "& .home-button": {
        background: "#727376",
      },
      "& .details-button": {
        marginRight: 30,
      },
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 30,
        "& .details-button": {
          marginRight: 0,
          marginBottom: 15,
        },
      },
    },
  },
  successIcon: {
    width: 107,
    height: 107,
    position: "relative",
  },
}));

const boockingSlots = [
  {
    id: "morning",
    title: "Morning",
    slots: [
      {
        session_id: "morning",
        id: "morning_slot_1",
        title: "Slot 1",
        timing: "10:00 AM - 10:30 AM",
        duration: "30 minutes",
      },
      {
        session_id: "morning",
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
        session_id: "afternoon",
        id: "afternoon_slot_1",
        title: "Slot 1",
        timing: "01:00 PM - 01:30 PM",
        duration: "30 minutes",
      },
      {
        session_id: "afternoon",
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
        session_id: "evening",
        id: "evening_slot_1",
        title: "Slot 1",
        timing: "06:00 PM - 06:30 PM",
        duration: "30 minutes",
      },
      {
        session_id: "evening",
        id: "evening_slot_2",
        title: "Slot 2",
        timing: "06:30 AM - 07:30 AM",
        duration: "30 minutes",
      },
    ],
  },
];

class AppointmentTypes {
  static call = "call";
  static chat = "chat";
  static whattsapp = "whattsapp";
  static videoCall = "video_call";
}

const appointmentTypes = [
  {
    value: AppointmentTypes.call,
    title: "Call",
    icon: <Call className="icon" />,
  },
  {
    value: AppointmentTypes.chat,
    title: "Chat",
    icon: <Forum className="icon" />,
  },
  {
    value: AppointmentTypes.whattsapp,
    title: "WhatsApp",
    icon: <WhatsApp className="icon" />,
  },
  {
    value: AppointmentTypes.videoCall,
    title: "Video Call",
    icon: <Videocam className="icon" />,
  },
];

export interface IDoctorDetails {
  name: string;
  speciality: string;
  speciality_id: string;
  city: string;
  city_id: string;
  image: string;
  languages: string;
  experience: string;
  fees: {
    clinic_visit: number;
    video_consultation: number;
  };
}

interface IBookAppointment {
  doctorDetails: IDoctorDetails | null;
}

const BookAppointment = ({ doctorDetails }: IBookAppointment) => {
  const styles = useStyles();
  const [formState, setFormState] = useState({
    appointment_type: "",
    date: new Date(),
    slot: {
      session_id: "",
      id: "",
      title: "",
      timing: "",
      duration: "",
    },
    session_id: "",
    doctor: doctorDetails || {},
    conformed: false,
    isDialougueOpen: false,
  });

  const handleTypeChange = (type: string) => {
    setFormState({
      ...formState,
      appointment_type: type,
    });
  };

  useEffect(() => {
    if (doctorDetails?.name) {
      setFormState({
        ...formState,
        doctor: doctorDetails,
        isDialougueOpen: true,
      });
    } else {
      setFormState({
        ...formState,
        doctor: {},
        isDialougueOpen: false,
      });
    }
  }, [doctorDetails]);

  const handleClose = () => {
    setFormState({
      ...formState,
      doctor: {},
      isDialougueOpen: false,
      appointment_type: "",
      date: new Date(),
      slot: {
        session_id: "",
        id: "",
        title: "",
        timing: "",
        duration: "",
      },
      session_id: "",
      conformed: false,
    });
  };

  return (
    <div>
      <Dialog
        open={formState.isDialougueOpen}
        fullWidth
        maxWidth={"md"}
        className={styles.dialogueContainer}
        scroll="body"
        onClose={handleClose}
      >
        {formState.conformed ? (
          <DialogContent>
            <div className={styles.successContainer}>
              <div className={`${styles.successIcon}`}>
                <Image
                  src={"/images/success-outlined-icon.svg"}
                  alt={"Success icon"}
                  layout="fill"
                />
              </div>

              <div className="text-content">
                <h5 className="font-600 title-text">Your Appointment</h5>
                <p className="font-400 subtext">with</p>
                <h3 className="font-700 dr-name">
                  {(formState?.doctor as any)?.name ?? ""}
                </h3>
                <p className="font-400 subtext">has been</p>
                <h5 className="font-600 title-text">Conformed</h5>
              </div>

              <div className="button-content">
                <button
                  className="details-button font-400"
                  onClick={() => {
                    setFormState({
                      ...formState,
                      conformed: false,
                    });
                  }}
                >
                  View Details
                </button>

                <button className="home-button font-400" onClick={handleClose}>
                  Ok
                </button>
              </div>
            </div>
          </DialogContent>
        ) : (
          <DialogContent>
            <h4 className={`font-600 ${styles.stepTitle}`}>
              CHOOSE APPOINTMENT TYPE
            </h4>

            <div className="appointment-types">
              {appointmentTypes.map((item, idx) => (
                <div
                  key={idx}
                  className={`${`item-container ${
                    formState.appointment_type === item.value && "selected_type"
                  }`}`}
                  onClick={() => handleTypeChange(item.value)}
                >
                  {item.icon}
                  <span className="font-400">{item.title}</span>
                </div>
              ))}
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
                  value={formState.date}
                  DialogProps={{
                    scroll: "body",
                  }}
                  onChange={(date) => {
                    setFormState({
                      ...formState,
                      date: date as Date,
                    });
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
              {boockingSlots.map((slots, session_id) => (
                <>
                  <h4 className={`${styles.slotTitle} font-400`}>
                    {slots.title}
                  </h4>
                  <div className="slots">
                    {slots.slots.map((slot) => (
                      <div
                        key={slot.id}
                        className={`font-400 ${styles.boockingSlot} ${
                          formState?.slot?.id === slot.id && "active-slot"
                        }`}
                        onClick={() => {
                          setFormState({
                            ...formState,
                            session_id: slot.session_id,
                            slot: slot,
                          });
                        }}
                      >
                        <div className="name middle-content-sm">
                          {slot.title}
                        </div>
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
                          <button className={`font-400`}>
                            {formState?.slot?.id === slot.id
                              ? "Selected"
                              : "Select"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ))}
            </div>

            <div className={styles.bottomContent}>
              <button className="cancel-button font-400" onClick={handleClose}>
                Cancel
              </button>
              <button
                className="conform-button font-400"
                onClick={() => {
                  setFormState({
                    ...formState,
                    conformed: true,
                  });
                }}
              >
                Conform Appointment
              </button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default BookAppointment;
