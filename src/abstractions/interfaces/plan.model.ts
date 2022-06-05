export interface IPlan {
    plan_id?:string|null,
    plan_name:string|null,
    description?:string|null,
    no_of_stores:number|null,
    no_of_members:number|null,
    created_on?:string|null,
    updated_on?:string|null,
    price:number|null
}