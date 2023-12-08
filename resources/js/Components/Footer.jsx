import Container from "@/Components/Container";
import React from "react";
import NavLink from "./NavLink";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <div className="bg-third py-4 mt-16 w-full bottom-[-80px] left-0 right-0">
            <Container>
                <div className="flex flex-wrap justify-between">
                    <div className="w-full mb-12 md:mb-0 md:w-1/2">
                        <div className="flex h-full flex-col justify-between">
                            <div className="w-100">
                                <NavLink
                                    href="/"
                                    className="px-0 text-2xl font-bold"
                                >
                                    <h4 className="text-secondary font-bold">
                                        GEO-MPASI
                                    </h4>
                                </NavLink>
                                <p className="mt-5 text-dark">
                                    Aplikasi “GEO-MPASI” adalah sebuah platform
                                    teknologi yang dirancang untuk memenuhi
                                    kebutuhan bayi untuk mencegah growth
                                    faltering di seluruh Indonesia
                                </p>
                            </div>
                            <div className="w-100">
                                <p className="text-dark">
                                    Syarat dan ketentuan | Kebijakan privasi |
                                    Cookies
                                </p>
                                <p className="text-dark">
                                    © {new Date().getFullYear()} Lab. FMIPA UGM
                                    Allrights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/4 w-full">
                        <div className="text-left">
                            <h5
                                href="/"
                                className="text-xl font-semibold text-secondary"
                            >
                                <h4 className="text-secondary">Jelajahi</h4>
                            </h5>
                            <div className="flex flex-col mt-5 gap-y-2">
                                <Link className="text-dark text-base"
                                    href={route("home.index")}
                                    active={route().current("home.index")}
                                >
                                    Beranda
                                </Link>
                                <Link className="text-dark text-base"
                                    href={route("home.index")}
                                    active={route().current("home.index")}
                                >
                                    Artikel
                                </Link>
                                <Link className="text-dark text-base"
                                    href={route("home.index")}
                                    active={route().current("home.index")}
                                >
                                    Dokter
                                </Link>
                                <Link className="text-dark text-base"
                                    href={route("home.index")}
                                    active={route().current("home.index")}
                                >
                                    Tentang
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
