import InputFileChat from "@/Components/InputFIleChat";
import Chat from "@/Layouts/Chat";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { IconMoodSmile } from "@tabler/icons-react";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";

const sts = (x, y, option = "justify") => {
    if (option == "justify") {
        return x == y ? "justify-end" : "justify-start";
    }
    if (option == "background") {
        return x == y
            ? "text-primary flex items-end text-white"
            : "text-secondary flex items-start text-white";
    }

    if (option == "bubble") {
        return x == y
            ? "w-auto bg-primary/75 rounded-xl rounded-br-none"
            : "w-auto bg-secondary/75 rounded-xl rounded-bl-none";
    }
};

export default function Show(props) {
    const { auth } = usePage().props;

    const [typing, setTyping] = useState(false);

    const scrollRef = useRef(null);
    const messageRef = useRef(null);

    const { user, chats } = props;

    const { data, setData, reset, errors } = useForm({
        message: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        router.post(
            `/chat/${user.username}`,
            {
                ...data,
                message: data.message,
            },
            {
                onSuccess: () => {
                    reset("message");
                    scrollRef.current.scrollTo(0, 999999999);
                },
            }
        );
    };

    const onTyping = () => {
        setTimeout(() => {
            Echo.private(`chats.${user.uuid}`).whisper("isTyping", {
                name: user.name,
            });
        }, 500);
    };

    Echo.private("chats." + auth.user.uuid)
        .listenForWhisper("isTyping", () => {
            setTyping(true);

            setTimeout(() => setTyping(false), 5000);
        })
        .listen("MessageSent", () => {
            router.reload({
                preserveScroll: true,
                onSuccess: () => {
                    scrollRef.current.scrollTo(0, 999999999);
                },
            });
        });
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
        }
        messageRef.current.focus();
    }, [chats]);

    return (
        <div>
            <Head title={`GEO-MPASI | Chat with ${user.username}`} />

            <div className="flex flex-col justify-between h-screen">
                <div className="shadow-xl border-b border-fifth px-4 py-4 bg-secondary">
                    <div className="flex gap-2">
                        <img
                            src={
                                `${user.picture}`
                                    ? `/storage/${user.picture}`
                                    : "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png"
                            }
                            alt={user.picture}
                            className="h-10 w-10 rounded"
                        />

                        <div className="flex flex-col">
                            <div className="font-semibold">{user.name}</div>
                            <div className="text-xs">Rs. Sejahtera</div>
                        </div>
                    </div>
                    {typing && (
                        <div className="text-xs text-dark">is typing...</div>
                    )}
                </div>
                <div
                    className="overflow-y-auto flex flex-col h-full px-4 py-2 space-y-2"
                    ref={scrollRef}
                >
                    {chats.length ? (
                        chats.map((chat) => (
                            <div
                                className={`flex text-sm
                            ${sts(auth.user.id, chat.sender_id)}`}
                                key={chat.id}
                            >
                                <div
                                    className={`p-3 rounded rounded-br-none w-3/4 flex flex-col  ${sts(
                                        auth.user.id,
                                        chat.sender_id,
                                        "background"
                                    )}`}
                                    created
                                >
                                    <div
                                        className={`p-4 flex flex-col items-end ${sts(
                                            auth.user.id,
                                            chat.sender_id,
                                            "bubble"
                                        )}`}
                                    >
                                        {chat.message}
                                    </div>
                                    <span className="text-[10px] text-dark">
                                        {moment(chat.created_at).format(
                                            "HH:mm"
                                        )}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-fifth flex justify-center items-center flex-1">
                            Silahkan Berkonsultasi dengan {user.name}
                        </div>
                    )}
                </div>
                <div className="border-t bg-secondary border-fifth p-4">
                    <form onSubmit={submitHandler} className="w-full flex items-center">
                        <div className="w-1/12">
                            <div className="flex items-center justify-evenly w-full">
                            <InputFileChat  />
                            <IconMoodSmile className=" text-white" />
                            </div>
                        </div>
                        <div className="w-11/12">
                            <input
                                value={data.message}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        message: e.target.value,
                                    })
                                }
                                onKeyUp={onTyping}
                                type="text"
                                ref={messageRef}
                                name="message"
                                autoComplete={"off"}
                                id="message"
                                placeholder="Ketik pesan..."
                                className="w-full px-4 py-3 rounded border-none p-0 border-0 focus:ring-0 focus:ring-none"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

Show.layout = (page) => <Chat children={page} />;
