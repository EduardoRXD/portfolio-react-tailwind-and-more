import { useState } from "react";

function EmojiClick() {
    const [emojiDivs, setEmojiDivs] = useState([]);
    const emojis = ["🍿", "💥", "✨", "🔥", "🎉", "🌟", "⚡", "🎈", "😀", "😎", "🥳"];

    function handleClick(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        const divX = rect.left;
        const divY = rect.top;

        const icons = Array.from({ length: 4 }).map(() => ({
            x: e.clientX - divX,
            y: e.clientY - divY,
            id: `${Date.now()}-${Math.random()}`,
            emoji: emojis[Math.floor(Math.random() * emojis.length)],
            offsetX: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 80,
            offsetY: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 80,
            rotate: Math.floor(Math.random() * 360),
        }));

        setEmojiDivs(prev => [...prev, ...icons]);
    }

    function handleAnimationEnd(id) {
        setEmojiDivs(prev => prev.filter(emoji => emoji.id !== id));
    }

    return (
        <div className="absolute inset-0 w-full aspect-square cursor-pointer select-none" draggable="false" onClick={handleClick}>
            {emojiDivs.map(({ x, y, id, emoji, offsetX, offsetY, rotate }) => (
                <div
                    key={id}
                    className="text-3xl absolute animate-pop-fall pointer-events-none"
                    style={{
                        top: `${y - 17}px`,
                        left: `${x - 17}px`,
                        "--offset-x": `${offsetX}px`,
                        "--offset-y": `${offsetY}px`,
                        "--rotate": `${rotate}deg`,
                    }}
                    onAnimationEnd={() => handleAnimationEnd(id)}
                    draggable="false"
                >
                    {emoji}
                </div>
            ))}
        </div>
    );
}

export default EmojiClick;
