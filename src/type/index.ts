export type TSignUp = {
    name: string;
    email: string;
    phone: string;
    address: string;
    role: string;
    password: string;
}

export type TFacilityData = {
    _id: string
    name: string;
    img: string | File
    description: string
    pricePerHour: number
    location: string
    isDeleted: boolean
}

// type TUser
export type TUserData = {
    _id: string
    name: string
    email: string
    role: string
    phone: string
    address: string
}

export type TBookingData = {
    _id: string
    date: string
    startTime: string
    endTime: string
    facility: TFacilityData
    payableAmount: number
    isBooked: string
    user: TUserData
}