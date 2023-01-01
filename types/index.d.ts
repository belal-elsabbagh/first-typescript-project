export type Company = {
    name: string;
    catchPhrase: string;
}

export type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    company: Company
}