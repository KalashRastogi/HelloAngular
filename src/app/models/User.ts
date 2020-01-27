export interface User{
    firstName: string;
    lastName: string;
    age?: number;
    address?: {
        place?: string,
        state?: string,
    },
    image?: string,
    isActive?: boolean,
    profile?: string,
    salary?: number,
    registered?: any,
    hide?: boolean
}