import { useState } from "react";

function EmojiClick() {
    const [emojiDivs, setEmojiDivs] = useState([]);
    const emojis = ["🍿", "💥", "✨", "🔥", "🎉", "🌟", "⚡", "🎈", "😀", "😎", "🥳"];

    const handleClick = (e) => {
        let icons = [];
        for (let i = 0; i < 4; i++) {
            const duration = Math.floor(Math.random() * 2000 + 1000);
            const newEmoji = {
                x: e.clientX,
                y: e.clientY,
                id: `${Date.now()}-${Math.random()}`,
                emoji: emojis[Math.floor(Math.random() * emojis.length)],
                duration,
                offsetX: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 80,
                offsetY: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 80,
                rotate: Math.floor(Math.random() * 360)
            };
            icons.push(newEmoji);

            setTimeout(() => {
                setEmojiDivs((prev) => prev.filter((emoji) => emoji.id !== newEmoji.id));
            }, duration);
        }
        setEmojiDivs((prev) => [...prev, ...icons]);
    };

    return (
        <div className="absolute inset-0 w-full h-full cursor-pointer select-none " draggable="false" onClick={handleClick}>
            {emojiDivs.map(({ x, y, id, emoji, offsetX, offsetY, rotate }) => (
                <div
                    key={id}
                    className="text-3xl fixed z-50 animate-pop-fall pointer-events-none"
                    style={{
                        top: `${y - 17}px`,
                        left: `${x - 17}px`,
                        "--offset-x": `${offsetX}px`,
                        "--offset-y": `${offsetY}px`,
                        "--rotate": `${rotate}deg`
                    }}
                >
                    {emoji}
                </div>
            ))}
        </div>
    );
}

export default EmojiClick;
