export type UserPermissions = {
    permission_id: string;
    permission: string;
};

export type User = {
    user_id?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    father_last_name?: string;
    mother_last_name?: string;
    phone?: string;
    avatar?: string;
    rol?: "ADMIN" | "CLIENT" | "DRIVER" | "";
    permissions?: UserPermissions[];
};
