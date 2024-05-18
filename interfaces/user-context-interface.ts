
export interface InfoUser {
    id: string;
    first_name: string;
    last_name: string;
    father_last_name: string;
    mother_last_name: string;
    dni?: string;
    phone?: string;
    direction?: string;
    birthdate?: string;
    gender?: "male" | "female";
    nationality?: string;
    civil_status?: string;
    photo?: string;
    status?: "active" | "inactive";
    register_date?: string;
    update_date?: string;
    user_name?: string;
    password?: string;
    // connection?: "desktop" | "movil";
    rol?: "ADMIN" | "CLIENT" | "DRIVER";
}


// export interface Rol {
//     id: string;
//     name: string;
//     status?: string;
//     register_date?: string;
//     update_date?: string;
// }

// export interface AssignateRol {
//     id: string;
//     name: string;
//     status?: string;
//     register_date?: string;
//     update_date?: string;
// }
