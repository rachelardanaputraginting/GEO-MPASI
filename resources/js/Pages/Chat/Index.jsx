import Chat from "@/Layouts/Chat";
import { IconBrandWhatsapp, IconMessage } from "@tabler/icons-react";
import React from "react";

export default function Index() {
    return (
        <div className="px-6 py-4 flex flex-col items-center justify-center flex-1 h-screen space-y-2">
            <p className="text-lg text-fifth font-semibold">
                Ayoo mulai obrolan..
            </p>
            <p className="text-xl text-fifth">
                Silahkan berdiskusi dengan Dokter kesayangan Anda
            </p>
            <IconMessage className="text-fifth" size={72} stroke={1} />
        </div>
    );
}

Index.layout = (page) => <Chat children={page} title="Chattan App" />;
