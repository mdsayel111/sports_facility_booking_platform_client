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
    img: string
    description: string
    pricePerHour: number
    location: string
    isDeleted: boolean
} 