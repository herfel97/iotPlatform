declare module jsonUsuario {
    export interface Role {
        id: number;
        nombre: string;
    }

    export interface Self {
        href: string;
    }

    export interface Usuario2 {
        href: string;
    }

    export interface Links {
        self: Self;
        usuario: Usuario2;
    }

    export interface Usuario {
        id: number;
        username: string;
        password: string;
        enabled: boolean;
        nombre: string;
        apellido: string;
        intentos?: any;
        email: string;
        roles: Role[];
        _links: Links;
    }

    export interface Embedded {
        usuarios: Usuario[];
    }

    export interface Self2 {
        href: string;
    }

    export interface Profile {
        href: string;
    }

    export interface Search {
        href: string;
    }

    export interface Links2 {
        self: Self2;
        profile: Profile;
        search: Search;
    }

    export interface Page {
        size: number;
        totalElements: number;
        totalPages: number;
        number: number;
    }

    export interface RootObject {
        _embedded: Embedded;
        _links: Links2;
        page: Page;
    }

}