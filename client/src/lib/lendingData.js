const MAXBATHROOM = 5;

const roomTypeData = [
  {
    id: 1,
    name: "Entire room",
    icon: "images/images/bath.jpg",
    selected: false,
  },
  {
    id: 2,
    name: "Private room",
    icon: "images/images/bath.jpg",
    selected: false,
  },
  {
    id: 3,
    name: "Shared room",
    icon: "images/images/bath.jpg",
    selected: false,
  },
];

const bedRoomData = [
  {
    id: 1,
    name: "King",
    icon: "images/images/bath.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Queen",
    icon: "images/images/bath.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Couple",
    icon: "images/images/bath.jpg",
    quantity: 1,
  },
  {
    id: 4,
    name: "Dock",
    icon: "images/images/bath.jpg",
    quantity: 1,
  },
];

const bathrooms = Array.from({ length: MAXBATHROOM }, (_, key) => key + 1);

const lendingData = {
  currentStep: "basics",
  steps: ["basics", "description", "location", "photos", "price"],
  data: [
    {
      stepname: "basics",
      stepdata: {
        roomtype: roomTypeData,
        bedroom: bedRoomData,
        bathrooms: bathrooms,
      },
    },
    {
      stepname: "description",
      stepdata: {
        name: "",
        description: "",
      },
    },
    {
      stepname: "location",
      stepdata: {
        address: "",
        country: "",
      },
    },
    {
      stepname: "photos",
      stepdata: {
        photos: [],
      },
    },
    {
      stepname: "price",
      stepdata: {
        price: 20,
        currency: "$",
      },
    },
  ],
};

export default lendingData;

export const lendingActions = {
  STEP_CHANGE: "Step changed",
  NEXT_STEP: "next step",
  PREV_STEP: "previous step",
  COMPLETE: "complete",
};
