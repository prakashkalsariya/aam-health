const doctorsList = [
  {
    name: "Dr. Abha Sanghavi- MD",
    speciality: "CARDIOLOGY",
    city: "MUMBAI",
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
    city: "MUMBAI",
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
    city: "MUMBAI",
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
    city: "MUMBAI",
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
    city: "MUMBAI",
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
    city: "MUMBAI",
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
    city: "MUMBAI",
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
    city: "MUMBAI",
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
    city: "MUMBAI",
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
    city: "MUMBAI",
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
    city: "DELHI",
    image: "/static/doctors/archana-delhi-img.png",
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
    city: "DELHI",
    image: "/static/doctors/navin-delhi-img.png",
    languages: "English, Hindi, Gujarati",
    experience: "27 Yrs",
    fees: {
      clinic_visit: 1500,
      video_consultation: 1300,
    },
  },

  {
    name: "Dr. Neha Jain- DGO",
    speciality: "NEPHROLOGY",
    city: "DELHI",
    image: "/static/doctors/neha-delhi-img.png",
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
    city: "DELHI",
    image: "/static/doctors/ravinder-delhi-img.jpg",
    languages: "English, Hindi",
    experience: "15 Yrs",
    fees: {
      clinic_visit: 1000,
      video_consultation: 700,
    },
  },

  {
    name: "Dr. Smita Ramachandran- MD",
    speciality: "NEUROSURGERY",
    city: "DELHI",
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
    city: "DELHI",
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
    city: "DELHI",
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
    city: "DELHI",
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
    city: "DELHI",
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
    city: "DELHI",
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
    city: "DELHI",
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
    city: "PATNA",
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
    city: "PATNA",
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
    city: "PATNA",
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
    city: "PATNA",
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
    city: "JAIPUR",
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
    city: "JAIPUR",
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
    city: "JAIPUR",
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
    city: "JAIPUR",
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
    city: "JAIPUR",
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
    city: "JAIPUR",
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
    city: "JAIPUR",
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
    city: "JAIPUR",
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
    city: "JAIPUR",
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
    city: "JAIPUR",
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
    city: "JAIPUR",
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
    city: "JAIPUR",
    image: "/static/doctors/raj-jaipur-img.jpg",
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
    city: "JAIPUR",
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
    city: " RANCHI",
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
    city: " RANCHI",
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
    city: " RANCHI",
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
    city: " RANCHI",
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
    city: " RANCHI",
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
    city: " RANCHI",
    image: "/static/doctors/avinash-ranchi-img.jpg",
    languages: "English, Hindi",
    experience: "19 Yrs",
    fees: {
      clinic_visit: 2200,
      video_consultation: 1500,
    },
  },
  {
    name: "Avinash Kumar Dubey",
    speciality: "PEDIATRICS",
    city: " RANCHI",
    image: "/static/doctors/dubey-ranchi-img.jpg",
    languages: "English, Hindi",
    experience: "15 Yrs",
    fees: {
      clinic_visit: 1600,
      video_consultation: 1300,
    },
  },
  {
    name: "Dr. Basant Kumar Singh",
    speciality: "UROLOGY",
    city: " RANCHI",
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
    city: " RANCHI",
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
    city: "  AMRITSAR",
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
    city: "  AMRITSAR",
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
    city: "  AMRITSAR",
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
    city: "  AMRITSAR",
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
    city: "  AMRITSAR",
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
    city: "  AMRITSAR",
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
    city: "  AMRITSAR",
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
    city: "  AMRITSAR",
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
    city: "  AMRITSAR",
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
    city: "  AMRITSAR",
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
    city: "  AMRITSAR",
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
    city: "  AMRITSAR",
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
    city: "  LUCKNOW",
    image: "/static/doctors/kunal-lacknow-img.jpg",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 1600,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Madhukar Kapoor- DNB",
    speciality: " ENT",
    city: "  LUCKNOW",
    image: "/static/doctors/madhukar-lacknow-img.jpg",
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
    image: "/static/doctors/madhuresh-lacknow-img.jfif",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 900,
      video_consultation: 800,
    },
  },

  {
    name: "Dr. Mansi Dhingra- MS",
    speciality: " NEUROLOGY",
    city: "  LUCKNOW",
    image: "/static/doctors/mansi-lacknow-img.jfif",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 700,
      video_consultation: 500,
    },
  },

  {
    name: "Dr. Neeraj Tandon- MD",
    speciality: " NEUROSURGERY",
    city: "  LUCKNOW",
    image: "/static/doctors/neeraj-lacknow-img.png",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 2000,
      video_consultation: 1500,
    },
  },

  {
    name: "Dr. Piyush P. Singh- M. Ch",
    speciality: " PRIMARY CARE PHYSICIAN",
    city: "  LUCKNOW",
    image: "/static/doctors/piyush-lacknow-img.jpg",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 1600,
      video_consultation: 1300,
    },
  },

  {
    name: "Dr. Pragati Sharma- MS",
    speciality: " PEDIATRICS",
    city: "  LUCKNOW",
    image: "/static/doctors/pragati-lacknow-img.jpg",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 1700,
      video_consultation: 1200,
    },
  },

  {
    name: "Dr. Prarthana Saxena- M. Ch",
    speciality: " UROLOGY",
    city: "  LUCKNOW",
    image: "/static/doctors/prarthana-lacknow-img.jfif",
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
    image: "/static/doctors/praveen-lacknow-img.jpg",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 1100,
      video_consultation: 1100,
    },
  },

  {
    name: "Dr. Abhishek Arun Jaiswal- MD Med.",
    speciality: " MEDICAL ONCOLOGY",
    city: "  LUCKNOW",
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
    speciality: " EMERGENCY MEDICINE & CRITICAL CARE",
    city: "  LUCKNOW",
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
    speciality: " MEDICAL GASTRO",
    city: "  LUCKNOW",
    image: "/static/doctors/ajay-lacknow-img.jpg",
    languages: "English, Hindi",
    experience: "9 Yrs",
    fees: {
      clinic_visit: 1600,
      video_consultation: 1200,
    },
  },
];

function Doctorlistdata() {
  return <div></div>;
}

export default Doctorlistdata;
