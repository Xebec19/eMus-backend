export interface IUser {
    user_id: string;
    user_name: string;
    first_name: string;
    last_name: string | null;
    email: string;
    password: string;
    plan_id: string;
}