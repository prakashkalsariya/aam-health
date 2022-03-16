import styles from "../styles/DoctorListData.module.scss";
import Image from "next/image";
import CustomAutoComplete from "../component/CustomAutoComplete";
import { Close, Search } from "@material-ui/icons";
import { useEffect, useState } from "react";
import LayoutContainer from "../component/layout/LayoutContainer";
import BookAppointment, { IDoctorDetails } from "../component/BookAppointment";
import AppHeader from "../component/header/AppHeader";
import Footer from "../component/Footer";

const doctorsList = [
  {
    name: "Avinash Kumar Dubey",
    speciality: "PEDIATRICS",
    speciality_id: "PEDIATRICS",
    city: " RANCHI",
    city_id: "Ranchi",
    image: "/static/doctors/dubey-ranchi-img.jpg",
    languages: "English, Hindi",
    experience: "15 Yrs",
    fees: {
      clinic_visit: 1600,
      video_consultation: 1300,
    },
  },
  {
    name: "Dr. Neha Jain- DGO",
    speciality: "NEPHROLOGY",
    speciality_id: "NEPHROLOGY",
    city: "DELHI",
    city_id: "Delhi",

    image: "/static/doctors/neha-delhi--img.png",
    languages: "English, Hindi",
    experience: "16 Yrs",
    fees: {
      clinic_visit: 1600,
      video_consultation: 1300,
    },
  },

  {
    name: "Dr. Ravinder Pal Singh- MCH",
    speciality: "NEUROLOGY",
    speciality_id: "NEUROLOGY",
    city: "DELHI",
    city_id: "Delhi",

    image: "/static/doctors/ravinder-delhi-img.jpg",
    languages: "English, Hindi",
    experience: "15 Yrs",
    fees: {
      clinic_visit: 1000,
      video_consultation: 700,
    },
  },
  {
    name: "Dr. Abha Sanghavi- MD",
    speciality: "CARDIOLOGY",
    speciality_id: "CARDIOLOGY",
    city: "MUMBAI",
    city_id: "Mumbai",
    image: "/static/doctors/abha-mumbai-img.jpeg",
    languages: "English, Hindi, Gujarati",
    experience: "29 Yrs",
    fees: {
      clinic_visit: 1200,
      video_consultation: 1200,
    },
  },

  {
    name: "Dr. Abhidha Shah- M.Ch",
    speciality: "ENT",
    speciality_id: "ENT",
    city: "MUMBAI",
    city_id: "Mumbai",
    image: "/static/doctors/abhidha-mumbai-img.png",
    languages: "English, Hindi, Marathi",
    experience: "12 Yrs",
    fees: {
      clinic_visit: 1200,
      video_consultation: 800,
    },
  },

  {
    name: "Dr. Abhinav Tiwari- DCH",
    speciality: "NEPHROLOGY",
    speciality_id: "NEPHROLOGY",
    city: "MUMBAI",
    city_id: "Mumbai",
    image: "/static/doctors/abhinav-mumbai-img.jpg",
    languages: "English, Hindi",
    experience: "8 Yrs",
    fees: {
      clinic_visit: 1500,
      video_consultation: 1200,
    },
  },

  {
    name: "Dr. Amit Jain- DNB",
    speciality: "NEUROLOGY",
    speciality_id: "NEUROLOGY",
    city: "MUMBAI",
    city_id: "Mumbai",
    image: "/static/doctors/amit-mumbai-img.png",
    languages: "English, Hindi, Marathi",
    experience: "7 Yrs",
    fees: {
      clinic_visit: 1000,
      video_consultation: 1000,
    },
  },

  {
    name: "Dr. Anita Soni-MD",
    speciality: "NEUROSURGERY",
    speciality_id: "NEUROSURGERY",
    city: "MUMBAI",
    city_id: "Mumbai",
    image: "/static/doctors/anita-mumbai-img.png",
    languages: "English, Hindi, Gujarati",
    experience: "18 Yrs",
    fees: {
      clinic_visit: 1600,
      video_consultation: 1300,
    },
  },

  {
    name: "Dr. Ankita Mishra",
    speciality: "PRIMARY CARE PHYSICIAN",
    speciality_id: "PRIMARY_CARE_PHYSICIAN",
    city: "MUMBAI",
    city_id: "Mumbai",
    image: "/static/doctors/ankita-mumbai-img.jpg",
    languages: "English, Hindi, Marathi",
    experience: "7 Yrs",
    fees: {
      clinic_visit: 1200,
      video_consultation: 1000,
    },
  },

  {
    name: "Dr. Dr. Anshu Kulkarni- MD Kulkarni- MD",
    speciality: "PEDIATRICS",
    speciality_id: "PEDIATRICS",

    city: "MUMBAI",
    city_id: "Mumbai",
    image: "/static/doctors/anshu-mumbai-img.jpg",
    languages: "English, Hindi, Marathi",
    experience: "12 Yrs",
    fees: {
      clinic_visit: 1500,
      video_consultation: 1200,
    },
  },

  {
    name: "Dr. Arun Doshi- MD",
    speciality: "UROLOGY",

    city: "MUMBAI",
    city_id: "Mumbai",
    image: "/static/doctors/arun-mumbai-img.jpg",
    languages: "English, Hindi, Marathi",
    experience: "13 Yrs",
    fees: {
      clinic_visit: 500,
      video_consultation: 300,
    },
  },

  {
    name: "Dr. Atul Gajare- MS",
    speciality: "NEPHROLOGY",
    speciality_id: "NEPHROLOGY",
    city: "MUMBAI",
    city_id: "Mumbai",
    image: "/static/doctors/atul-mumbai-img.jpeg",
    languages: "English, Hindi, Marathi",
    experience: "14 Yrs",
    fees: {
      clinic_visit: 800,
      video_consultation: 500,
    },
  },

  {
    name: "Dr. Avi Sanghavi- MD",
    speciality: "MEDICAL ONCOLOGY",
    speciality_id: "MEDICAL_ONCOLOGY",
    city: "MUMBAI",
    city_id: "Mumbai",
    image: "/static/doctors/avi-mumbai-img.jfif",
    languages: "English, Hindi, Marathi",
    experience: "8 Yrs",
    fees: {
      clinic_visit: 1000,
      video_consultation: 800,
    },
  },

  {
    name: "Dr. Harsha Khanzarkar- MS",
    speciality: "EMERGENCY MEDICINE & CRITICAL CARE",
    speciality_id: "EMERGENCY_MEDICINE_CRITICAL_CARE",
    city: "MUMBAI",
    city_id: "Mumbai",
    image: "/static/doctors/harsha-mumbai-img.jpeg",
    languages: "English, Hindi, Marathi",
    experience: "5 Yrs",
    fees: {
      clinic_visit: 900,
      video_consultation: 900,
    },
  },

  {
    name: "Dr Archana Krishna- Ph. D",
    speciality: "CARDIOLOGY",
    speciality_id: "CARDIOLOGY",
    city: "DELHI",
    city_id: "Delhi",

    image: "/static/doctors/archana-delhi-img.jpg",
    languages: "English, Hindi",
    experience: "13 Yrs",
    fees: {
      clinic_visit: 2000,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Navin Chobdar- DNB",
    speciality: "ENT",
    speciality_id: "ENT",
    city: "DELHI",
    city_id: "Delhi",

    image: "/static/doctors/navin-delhi-img.png",
    languages: "English, Hindi, Gujarati",
    experience: "27 Yrs",
    fees: {
      clinic_visit: 1500,
      video_consultation: 1300,
    },
  },
  {
    name: "Dr. Smita Ramachandran- MD",
    speciality: "NEUROSURGERY",
    speciality_id: "NEUROSURGERY",
    city: "DELHI",
    city_id: "Delhi",

    image: "/static/doctors/smita-delhi-img.jpg",
    languages: "English, Hindi",
    experience: "13 Yrs",
    fees: {
      clinic_visit: 2000,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Sudeep Singh Sachdev- DM",
    speciality: "PRIMARY CARE PHYSICIAN",
    speciality_id: "PRIMARY_CARE_PHYSICIAN",
    city: "DELHI",
    city_id: "Delhi",

    image: "/static/doctors/sudeep-delhi-img.png",
    languages: "English, Hindi",
    experience: "14 Yrs",
    fees: {
      clinic_visit: 1600,
      video_consultation: 1400,
    },
  },

  {
    name: "Dr. Sunita Lulla Gur- MS",
    speciality: "PEDIATRICS",
    speciality_id: "PEDIATRICS",

    city: "DELHI",
    city_id: "Delhi",

    image: "/static/doctors/Sunita-delhi-img.png",
    languages: "English, Hindi",
    experience: "16 Yrs",
    fees: {
      clinic_visit: 900,
      video_consultation: 500,
    },
  },

  {
    name: "Dr. Tanudeep Kaur- MS",
    speciality: "UROLOGY",

    city: "DELHI",
    city_id: "Delhi",

    image: "/static/doctors/tanudeep-delhi-img.png",
    languages: "English, Hindi",
    experience: "11 Yrs",
    fees: {
      clinic_visit: 1000,
      video_consultation: 900,
    },
  },

  {
    name: "Dr. Varun Gogia- MD",
    speciality: "NEPHROLOGY",
    speciality_id: "NEPHROLOGY",
    city: "DELHI",
    city_id: "Delhi",

    image: "/static/doctors/varun-delhi-img.png",
    languages: "English, Hindi",
    experience: "28 Yrs",
    fees: {
      clinic_visit: 2000,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Vikas Chopra- DM",
    speciality: "MEDICAL ONCOLOGY",
    speciality_id: "MEDICAL_ONCOLOGY",
    city: "DELHI",
    city_id: "Delhi",

    image: "/static/doctors/vikas-delhi-img.jpg",
    languages: "English, Hindi",
    experience: "26 Yrs",
    fees: {
      clinic_visit: 1600,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Vikrant Sharma- MS",
    speciality: "EMERGENCY MEDICINE & CRITICAL CARE",
    speciality_id: "EMERGENCY_MEDICINE_CRITICAL_CARE",
    city: "DELHI",
    city_id: "Delhi",

    image: "/static/doctors/vikrant-delhi-img.jpeg",
    languages: "English, Hindi",
    experience: "12 Yrs",
    fees: {
      clinic_visit: 1200,
      video_consultation: 1200,
    },
  },

  {
    name: "Dr. Vivek Gupta- DNB",
    speciality: "MEDICAL GASTRO",
    speciality_id: "MEDICAL_GASTRO",
    city: "DELHI",
    city_id: "Delhi",

    image: "/static/doctors/vivek-delhi-img.png",
    languages: "English, Hindi",
    experience: "17 Yrs",
    fees: {
      clinic_visit: 1100,
      video_consultation: 900,
    },
  },

  {
    name: "Dr. A P Shah- MS",
    speciality: "CARDIOLOGY",
    speciality_id: "CARDIOLOGY",
    city: "PATNA",
    city_id: "Patna",
    image: "/static/doctors/shah-patna-img.jpg",
    languages: "English, Hindi",
    experience: "44 Yrs",
    fees: {
      clinic_visit: 2500,
      video_consultation: 2000,
    },
  },

  {
    name: "Dr. Akhilesh Singh- MD",
    speciality: "ENT",
    speciality_id: "ENT",
    city: "PATNA",
    city_id: "Patna",
    image: "/static/doctors/akhilesh-patna-img.webp",
    languages: "English, Hindi",
    experience: "14 Yrs",
    fees: {
      clinic_visit: 2000,
      video_consultation: 1500,
    },
  },
  {
    name: "Dr. Rishi Kant Singh- MCH",
    speciality: "NEPHROLOGY",
    speciality_id: "NEPHROLOGY",
    city: "PATNA",
    city_id: "Patna",
    image: "/static/doctors/rishi-patna-img.webp",
    languages: "English, Hindi",
    experience: "15 Yrs",
    fees: {
      clinic_visit: 1000,
      video_consultation: 900,
    },
  },

  {
    name: "Dr. Vijay Shankar -DM",
    speciality: "NEUROLOGY",
    speciality_id: "NEUROLOGY",
    city: "PATNA",
    city_id: "Patna",
    image: "/static/doctors/vijay-patna-img.jpg",
    languages: "English, Hindi",
    experience: "10 Yrs",
    fees: {
      clinic_visit: 2000,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Anushri Sharma- MDS",
    speciality: "CARDIOLOGY",
    speciality_id: "CARDIOLOGY",
    city: "JAIPUR",
    city_id: "Jaipur",
    image: "/static/doctors/anushri-jaipur-img.jpeg",
    languages: "English, Hindi",
    experience: "11 Yrs",
    fees: {
      clinic_visit: 800,
      video_consultation: 500,
    },
  },

  {
    name: "Dr. Atul Kasliwal- DM",
    speciality: "ENT",
    speciality_id: "ENT",
    city: "JAIPUR",
    city_id: "Jaipur",
    image: "/static/doctors/atul-jaipur-img.png",
    languages: "English, Hindi",
    experience: "16 Yrs",
    fees: {
      clinic_visit: 2000,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Vijay Kumar Binwal- DM",
    speciality: "NEPHROLOGY",
    speciality_id: "NEPHROLOGY",
    city: "JAIPUR",
    city_id: "Jaipur",
    image: "/static/doctors/vijay-jaipur-img.jpeg",
    languages: "English, Hindi",
    experience: "18 Yrs",
    fees: {
      clinic_visit: 1000,
      video_consultation: 900,
    },
  },

  {
    name: "Dr. Manohar Sharma- DM",
    speciality: "NEUROLOGY",
    speciality_id: "NEUROLOGY",
    city: "JAIPUR",
    city_id: "Jaipur",
    image: "/static/doctors/manohar-jaipur-img.jpg",
    languages: "English, Hindi",
    experience: "16 Yrs",
    fees: {
      clinic_visit: 2000,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Mayuri Kothiwala- MS",
    speciality: "NEUROSURGERY",
    speciality_id: "NEUROSURGERY",
    city: "JAIPUR",
    city_id: "Jaipur",
    image: "/static/doctors/mayuri-jaipur-img.jpg",
    languages: "English, Hindi",
    experience: "11 Yrs",
    fees: {
      clinic_visit: 1500,
      video_consultation: 1200,
    },
  },

  {
    name: "Dr. P R Gupta- MD",
    speciality: "PRIMARY CARE PHYSICIAN",
    speciality_id: "PRIMARY_CARE_PHYSICIAN",
    city: "JAIPUR",
    city_id: "Jaipur",
    image: "/static/doctors/gupta-jaipur-img.jpg",
    languages: "English, Hindi",
    experience: "18 Yrs",
    fees: {
      clinic_visit: 1000,
      video_consultation: 900,
    },
  },

  {
    name: "Dr. Pankaj Gulati- DNB",
    speciality: "PEDIATRICS",
    speciality_id: "PEDIATRICS",

    city: "JAIPUR",
    city_id: "Jaipur",
    image: "/static/doctors/pankaj-jaipur-img.jpg",
    languages: "English, Hindi",
    experience: "12 Yrs",
    fees: {
      clinic_visit: 2000,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Parveen Kumar- DM",
    speciality: "UROLOGY",

    city: "JAIPUR",
    city_id: "Jaipur",
    image: "/static/doctors/Parveen-jaipur-img.jpg",
    languages: "English, Hindi",
    experience: "25 Yrs",
    fees: {
      clinic_visit: 900,
      video_consultation: 500,
    },
  },

  {
    name: "Dr. Pooja Jain- MD",
    speciality: "NEPHROLOGY",
    speciality_id: "NEPHROLOGY",
    city: "JAIPUR",
    city_id: "Jaipur",
    image: "/static/doctors/pooja-jaipur-img.jpg",
    languages: "English, Hindi",
    experience: "19 Yrs",
    fees: {
      clinic_visit: 500,
      video_consultation: 200,
    },
  },

  {
    name: "Dr. Prashant Sharma- MCh",
    speciality: "MEDICAL ONCOLOGY",
    speciality_id: "MEDICAL_ONCOLOGY",
    city: "JAIPUR",
    city_id: "Jaipur",
    image: "/static/doctors/prashant-jaipur-img.jpg",
    languages: "English, Hindi",
    experience: "28 Yrs",
    fees: {
      clinic_visit: 800,
      video_consultation: 600,
    },
  },

  {
    name: "Dr. Priyanka Sharma- MD",
    speciality: "EMERGENCY MEDICINE & CRITICAL CARE",
    speciality_id: "EMERGENCY_MEDICINE_CRITICAL_CARE",
    city: "JAIPUR",
    city_id: "Jaipur",
    image: "/static/doctors/priyanka-jaipur-img.jpg",
    languages: "English, Hindi",
    experience: "8 Yrs",
    fees: {
      clinic_visit: 1000,
      video_consultation: 900,
    },
  },

  {
    name: "Dr. R.K Mathur- MS",
    speciality: "MEDICAL GASTRO",
    speciality_id: "MEDICAL_GASTRO",
    city: "JAIPUR",
    city_id: "Jaipur",
    image: "/static/doctors/mathur-jaipur-img.jpg",
    languages: "English, Hindi",
    experience: "18 Yrs",
    fees: {
      clinic_visit: 1200,
      video_consultation: 900,
    },
  },

  {
    name: "Dr. Raj Kumar Gupta- MS",
    speciality: "NEPHROLOGY",
    speciality_id: "NEPHROLOGY",
    city: "JAIPUR",
    city_id: "Jaipur",
    image: "/static/doctors/raju-jaipur-img.jpg",
    languages: "English, Hindi",
    experience: "8 Yrs",
    fees: {
      clinic_visit: 1300,
      video_consultation: 900,
    },
  },

  {
    name: "Dr. Rakesh Chittora- M. Ch",
    speciality: "MEDICAL GASTRO",
    speciality_id: "MEDICAL_GASTRO",
    city: "JAIPUR",
    city_id: "Jaipur",
    image: "/static/doctors/rakesh-jaipur-img.jpeg",
    languages: "English, Hindi",
    experience: "20 Yrs",
    fees: {
      clinic_visit: 1500,
      video_consultation: 1000,
    },
  },

  {
    name: "Dr. Sarbjaya Singh",
    speciality: "CARDIOLOGY",
    speciality_id: "CARDIOLOGY",
    city: " RANCHI",
    city_id: "Ranchi",
    image: "/static/doctors/sarbjaya-ranchi-img.jpg",
    languages: "English, Hindi",
    experience: "13 Yrs",
    fees: {
      clinic_visit: 500,
      video_consultation: 500,
    },
  },

  {
    name: "Dr. Mohan Kant Thakur",
    speciality: "ENT",
    speciality_id: "ENT",
    city: " RANCHI",
    city_id: "Ranchi",
    image: "/static/doctors/mohan-ranchi-img.jpeg",
    languages: "English, Hindi",
    experience: "11 Yrs",
    fees: {
      clinic_visit: 1000,
      video_consultation: 500,
    },
  },

  {
    name: "Dr. Nishith Kumar",
    speciality: "NEPHROLOGY",
    speciality_id: "NEPHROLOGY",
    city: " RANCHI",
    city_id: "Ranchi",
    image: "/static/doctors/nishith-ranchi-img.jpg",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 2000,
      video_consultation: 1500,
    },
  },
  {
    name: "Dr. A N Kashyap",
    speciality: "NEUROLOGY",
    speciality_id: "NEUROLOGY",
    city: " RANCHI",
    city_id: "Ranchi",
    image: "/static/doctors/kashyap-ranchi-img.jpg",
    languages: "English, Hindi",
    experience: "7 Yrs",
    fees: {
      clinic_visit: 1000,
      video_consultation: 500,
    },
  },
  {
    name: "Dr. Amitesh Anand",
    speciality: "NEUROSURGERY",
    speciality_id: "NEUROSURGERY",
    city: " RANCHI",
    city_id: "Ranchi",
    image: "/static/doctors/amitesh-ranchi-img.jpg",
    languages: "English, Hindi",
    experience: "10 Yrs",
    fees: {
      clinic_visit: 2100,
      video_consultation: 1500,
    },
  },
  {
    name: "Dr Avinash Kumar",
    speciality: "PRIMARY CARE PHYSICIAN",
    speciality_id: "PRIMARY_CARE_PHYSICIAN",
    city: " RANCHI",
    city_id: "Ranchi",
    image: "/static/doctors/avinash-ranchi-img.jpg",
    languages: "English, Hindi",
    experience: "19 Yrs",
    fees: {
      clinic_visit: 2200,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Basant Kumar Singh",
    speciality: "UROLOGY",

    city: " RANCHI",
    city_id: "Ranchi",
    image: "/static/doctors/basant-ranchi-img.jpg",
    languages: "English, Hindi",
    experience: "29 Yrs",
    fees: {
      clinic_visit: 1200,
      video_consultation: 1200,
    },
  },
  {
    name: "Dr. M S Chen",
    speciality: "NEPHROLOGY",
    speciality_id: "NEPHROLOGY",
    city: " RANCHI",
    city_id: "Ranchi",
    image: "/static/doctors/chen-ranchi-img.jpg",
    languages: "English, Hindi",
    experience: "20 Yrs",
    fees: {
      clinic_visit: 2000,
      video_consultation: 1400,
    },
  },

  {
    name: "Dr. Harpreet Singh Makan- MD",
    speciality: "CARDIOLOGY",
    speciality_id: "CARDIOLOGY",
    city: "AMRITSAR",
    city_id: "AMRITSAR",
    image: "/static/doctors/harpreet-amritsar-img.jpg",
    languages: "English, Hindi",
    experience: "21 Yrs",
    fees: {
      clinic_visit: 700,
      video_consultation: 500,
    },
  },

  {
    name: "Dr. J. S. Gumber- MS",
    speciality: "ENT",
    speciality_id: "ENT",
    city: "AMRITSAR",
    city_id: "AMRITSAR",
    image: "/static/doctors/gumber-amritsar-img.jpg",
    languages: "English, Hindi",
    experience: "22 Yrs",
    fees: {
      clinic_visit: 800,
      video_consultation: 500,
    },
  },

  {
    name: "Dr. Mohit Sharma- DNB",
    speciality: "NEPHROLOGY",
    speciality_id: "NEPHROLOGY",
    city: "AMRITSAR",
    city_id: "AMRITSAR",
    image: "/static/doctors/mohit-amritsar-img.jpg",
    languages: "English, Hindi",
    experience: "23 Yrs",
    fees: {
      clinic_visit: 1200,
      video_consultation: 1100,
    },
  },

  {
    name: "Dr. Pradeep Bhatia- MS",
    speciality: "NEUROLOGY",
    speciality_id: "NEUROLOGY",
    city: "AMRITSAR",
    city_id: "AMRITSAR",
    image: "/static/doctors/pradeep-amritsar-img.jpg",
    languages: "English, Hindi",
    experience: "14 Yrs",
    fees: {
      clinic_visit: 900,
      video_consultation: 500,
    },
  },

  {
    name: "Dr. Raj Kumari Sinha- DNB",
    speciality: "NEUROSURGERY",
    speciality_id: "NEUROSURGERY",
    city: "AMRITSAR",
    city_id: "AMRITSAR",
    image: "/static/doctors/raj-amritsar-img.jpg",
    languages: "English, Hindi",
    experience: "16 Yrs",
    fees: {
      clinic_visit: 1200,
      video_consultation: 1000,
    },
  },

  {
    name: "Dr. Rajan Punj- MS",
    speciality: "PRIMARY CARE PHYSICIAN",
    speciality_id: "PRIMARY_CARE_PHYSICIAN",
    city: "AMRITSAR",
    city_id: "AMRITSAR",
    image: "/static/doctors/rajan-amritsar-img.jpg",
    languages: "English, Hindi",
    experience: "20 Yrs",
    fees: {
      clinic_visit: 600,
      video_consultation: 500,
    },
  },

  {
    name: "Dr. Ranjit Singh- MS",
    speciality: "PEDIATRICS",
    speciality_id: "PEDIATRICS",

    city: "AMRITSAR",
    city_id: "AMRITSAR",
    image: "/static/doctors/ranjit-amritsar-img.jpg",
    languages: "English, Hindi",
    experience: "27 Yrs",
    fees: {
      clinic_visit: 1800,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Rishabh Sehgal- DM",
    speciality: "UROLOGY",

    city: "AMRITSAR",
    city_id: "AMRITSAR",
    image: "/static/doctors/rishabh-amritsar-img.jpg",
    languages: "English, Hindi",
    experience: "19 Yrs",
    fees: {
      clinic_visit: 1300,
      video_consultation: 1300,
    },
  },

  {
    name: "Dr. Ritudeep Randhawa- BDS",
    speciality: "NEPHROLOGY",
    speciality_id: "NEPHROLOGY",
    city: "AMRITSAR",
    city_id: "AMRITSAR",
    image: "/static/doctors/ritudeep-amritsar-img.jpg",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 1600,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Vikas Rampal- M. Ch",
    speciality: "MEDICAL ONCOLOGY",
    speciality_id: "MEDICAL_ONCOLOGY",
    city: "AMRITSAR",
    city_id: "AMRITSAR",
    image: "/static/doctors/vikas-amritsar-img.jpg",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 1700,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Vineet Sehgal- DM",
    speciality: "EMERGENCY MEDICINE & CRITICAL CARE",
    speciality_id: "EMERGENCY_MEDICINE_CRITICAL_CARE",
    city: "AMRITSAR",
    city_id: "AMRITSAR",
    image: "/static/doctors/vineet-amritsar-img.jpg",
    languages: "English, Hindi",
    experience: "10 Yrs",
    fees: {
      clinic_visit: 1900,
      video_consultation: 1700,
    },
  },

  {
    name: "Dr. Yanish Bhanot- DNB",
    speciality: "MEDICAL GASTRO",
    speciality_id: "MEDICAL_GASTRO",
    city: "AMRITSAR",
    city_id: "AMRITSAR",
    image: "/static/doctors/yanish-amritsar-img.jpg",
    languages: "English, Hindi",
    experience: "22 Yrs",
    fees: {
      clinic_visit: 2000,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Kunal Shahi- MS",
    speciality: "CARDIOLOGY",
    speciality_id: "CARDIOLOGY",
    city: "  LUCKNOW",
    city_id: "LUCKNOW",
    image: "/static/doctors/kunal-lucknow-img.jpg",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 1600,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Madhukar Kapoor- DNB",
    speciality: "ENT",
    speciality_id: "ENT",
    city: "  LUCKNOW",
    city_id: "LUCKNOW",
    image: "/static/doctors/madhukar-lucknow-img.jpg",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 100,
      video_consultation: 500,
    },
  },

  {
    name: "Dr. Madhuresh Kumar- MS",
    speciality: " NEPHROLOGY",
    city: "  LUCKNOW",
    city_id: "LUCKNOW",
    image: "/static/doctors/madhuresh-lucknow-img.jfif",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 900,
      video_consultation: 800,
    },
  },

  {
    name: "Dr. Mansi Dhingra- MS",
    speciality: "NEUROLOGY",
    speciality_id: "NEUROLOGY",
    city: "  LUCKNOW",
    city_id: "LUCKNOW",
    image: "/static/doctors/mansi-lucknow-img.jfif",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 700,
      video_consultation: 500,
    },
  },

  {
    name: "Dr. Neeraj Tandon- MD",
    speciality: "NEUROSURGERY",
    speciality_id: "NEUROSURGERY",
    city: "  LUCKNOW",
    city_id: "LUCKNOW",
    image: "/static/doctors/neeraj-lucknow-img.png",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 2000,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Piyush P. Singh- M. Ch",
    speciality: "PRIMARY CARE PHYSICIAN",
    speciality_id: "PRIMARY_CARE_PHYSICIAN",
    city: "  LUCKNOW",
    city_id: "LUCKNOW",
    image: "/static/doctors/piyush-lucknow-img.jpg",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 1600,
      video_consultation: 1300,
    },
  },

  {
    name: "Dr. Pragati Sharma- MS",
    speciality: "PEDIATRICS",
    speciality_id: "PEDIATRICS",
    city: "  LUCKNOW",
    city_id: "LUCKNOW",
    image: "/static/doctors/pragati-lucknow-img.jpg",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 1700,
      video_consultation: 1200,
    },
  },

  {
    name: "Dr. Prarthana Saxena- M. Ch",
    speciality: "UROLOGY",

    city: "  LUCKNOW",
    city_id: "LUCKNOW",
    image: "/static/doctors/prarthana-lucknow-img.jfif",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 500,
      video_consultation: 500,
    },
  },

  {
    name: "Dr. Praveen Sharma- DNB",
    speciality: " NEPHROLOGY",
    city: "  LUCKNOW",
    city_id: "LUCKNOW",
    image: "/static/doctors/praveen-lucknow-img.jpg",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 1100,
      video_consultation: 1100,
    },
  },

  {
    name: "Dr. Abhishek Arun Jaiswal- MD Med.",
    speciality: "MEDICAL ONCOLOGY",
    speciality_id: "MEDICAL_ONCOLOGY",
    city: "  LUCKNOW",
    city_id: "LUCKNOW",
    image: "/static/doctors/abhishek-lacknow-img.png",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 1300,
      video_consultation: 1200,
    },
  },

  {
    name: "Dr. Aditya Sharma- M.Ch",
    speciality: "EMERGENCY MEDICINE & CRITICAL CARE",
    speciality_id: "EMERGENCY_MEDICINE_CRITICAL_CARE",
    city: "  LUCKNOW",
    city_id: "LUCKNOW",
    image: "/static/doctors/aditya-lacknow-img.png",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 1800,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Ajay Prakash- DOMS",
    speciality: "MEDICAL GASTRO",
    speciality_id: "MEDICAL_GASTRO",
    city: "  LUCKNOW",
    city_id: "LUCKNOW",
    image: "/static/doctors/ajay-lacknow-img.jpg",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 1600,
      video_consultation: 1200,
    },
  },
];

const specialities = [
  {
    name: "CARDIOLOGY",
    value: "CARDIOLOGY",
  },
  {
    name: "ENT",
    value: "ENT",
  },
  {
    name: "NEPHROLOGY",
    value: "NEPHROLOGY",
  },
  {
    name: "NEUROLOGY",
    value: "NEUROLOGY",
  },
  {
    name: "NEUROSURGERY",
    value: "NEUROSURGERY",
  },
  {
    name: "PRIMARY CARE PHYSICIAN",
    value: "PRIMARY_CARE_PHYSICIAN",
  },
  {
    name: "PEDIATRICS",
    value: "PEDIATRICS",
  },
  {
    name: "UROLOGY",
    value: "UROLOGY",
  },
  {
    name: "NEPHROLOGY",
    value: "NEPHROLOGY",
  },
  {
    name: "MEDICAL ONCOLOGY",
    value: "MEDICAL_ONCOLOGY",
  },
  {
    name: "EMERGENCY MEDICINE & CRITICAL CARE",
    value: "EMERGENCY_MEDICINE_CRITICAL_CARE",
  },
  {
    name: "MEDICAL GASTRO",
    value: "MEDICAL_GASTRO",
  },
];

const cities = [
  {
    name: "Mumbai",
    value: "Mumbai",
  },
  {
    name: "Delhi",
    value: "Delhi",
  },
  {
    name: "Patna",
    value: "Patna",
  },
  {
    name: "Jaipur",
    value: "Jaipur",
  },
  {
    name: "Ranchi",
    value: "Ranchi",
  },
  {
    name: "AMRITSAR",
    value: "AMRITSAR",
  },
  {
    name: "LUCKNOW",
    value: "LUCKNOW",
  },
];

function Doctorlistdata() {
  const [filteredDoctorsList, setFilteredDoctorsList] = useState([
    ...doctorsList,
  ]);
  const [selectedDoctor, setSelectedDoctor] = useState<IDoctorDetails | null>(
    null
  );
  const [filters, setFilters] = useState({
    city: { name: "", value: "" },
    speciality: { name: "", value: "" },
  });

  useEffect(() => {
    let updatedDoctorsList = [...doctorsList];

    if (filters.city.value) {
      updatedDoctorsList = updatedDoctorsList.filter(
        (item) =>
          item.city_id.toLowerCase() === filters.city.value.toLowerCase()
      );
    }

    if (filters.speciality.value) {
      updatedDoctorsList = updatedDoctorsList.filter(
        (item) =>
          item?.speciality_id?.toLowerCase() ===
          filters.speciality.value.toLowerCase()
      );
    }

    if (!filters.city.value && !filters.speciality.value) {
      updatedDoctorsList = [...doctorsList];
    }

    setFilteredDoctorsList(updatedDoctorsList);
  }, [filters]);

  const handleFilterSelection = (type: string, option: any) => {
    const value = option.value;
    setFilters({
      ...filters,
      [type]: option,
    });
  };

  const clearFilter = (type: any) => {
    setFilters({
      ...filters,
      [type]: {
        name: "",
        value: "",
      },
    });
  };

  return (
    <div>
      <AppHeader />
      <BookAppointment doctorDetails={selectedDoctor} />
      <LayoutContainer>
        <div className={`${styles.filters_containers}`}>
          <div
            className={`${styles.input_container} ${styles.specialities_filter}`}
          >
            <CustomAutoComplete
              placeholder="Search by specialities"
              data={specialities}
              type="speciality"
              update={false}
              handleSelection={handleFilterSelection}
            />
          </div>
          <div className={styles.input_container}>
            <CustomAutoComplete
              placeholder="Search by city"
              data={cities}
              type="city"
              update={false}
              handleSelection={handleFilterSelection}
            />
          </div>
        </div>
        {filters.city.value || filters.speciality.value ? (
          <div>
            <div className={`sub-text ${styles.search_results_title}`}>
              Search results
            </div>
            <div className={styles.filters_container}>
              {filters.speciality.name ? (
                <div className={`font-400 ${styles.filter_container}`}>
                  <div className={styles.title}>Speciality</div>
                  <div className={styles.filter_item}>
                    <div className={styles.filter_name}>
                      {filters.speciality.name}
                    </div>
                    <span
                      className={styles.icon_container}
                      onClick={() => clearFilter("speciality")}
                    >
                      <Close className={styles.icon} />
                    </span>
                  </div>
                </div>
              ) : null}
              {filters.city.name ? (
                <div className={`font-400 ${styles.filter_container}`}>
                  <div className={styles.title}>City</div>
                  <div className={styles.filter_item}>
                    <div className={styles.filter_name}>
                      {filters.city.name}
                    </div>
                    <span
                      className={styles.icon_container}
                      onClick={() => clearFilter("city")}
                    >
                      <Close className={styles.icon} />
                    </span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
        <div className={styles.doctors_list}>
          {filteredDoctorsList.map((value, idx) => (
            <div key={idx} className={styles.outer_container}>
              <div className={styles.doctor_data_list_container}>
                <div
                  className={styles.list_img_contain_container}
                  onClick={() => {
                    setSelectedDoctor(value as IDoctorDetails);
                  }}
                >
                  <div className={styles.list_img}>
                    <Image
                      src={value.image}
                      alt="doctor data"
                      layout="fill"
                      objectFit={"cover"}
                    />
                  </div>

                  <div className={styles.list_contain}>
                    <p className={`font-600 ${styles.contain_name}`}>
                      {value.name}
                    </p>
                    <p className={`font-600 ${styles.contain_speciality}`}>
                      {value.speciality}, {value.city}
                    </p>
                    <div className={styles.contain_languages_icon}>
                      <p className={styles.icon}>
                        <Image
                          src="/images/languages-icon.svg"
                          alt="languages"
                          layout="fill"
                          objectFit={"cover"}
                        />
                      </p>
                      <p className={`font-500 ${styles.contain_languages}`}>
                        English, Hindi
                      </p>
                    </div>
                    <div className={styles.contain_experience_icon}>
                      <p className={styles.icon}>
                        <Image
                          src="/images/experience-icon.svg"
                          alt="experience"
                          layout="fill"
                          objectFit={"cover"}
                        />
                      </p>
                      <p className={`font-500 ${styles.contain_experience}`}>
                        Experience {value.experience}
                      </p>
                    </div>

                    <p className={`font-500 ${styles.contain_fees}`}>
                      You pay INR {value.fees.clinic_visit}
                    </p>
                  </div>
                </div>

                <div className={styles.list_btn}>
                  <button
                    className={`font-600 ${styles.book_button}`}
                    onClick={() => {
                      setSelectedDoctor(value as IDoctorDetails);
                    }}
                  >
                    Book An Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutContainer>
      <Footer />
    </div>
  );
}

export default Doctorlistdata;
