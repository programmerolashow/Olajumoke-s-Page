const messageParts = [

`Happy Birthday, my Best Part (MBP). I’ve sat with my thoughts for a while trying to find the right words for you, and the truth is… no sentence ever feels complete enough. You are one of those rare people whose presence can’t be fully captured in words. But today is special, because it marks the day someone incredibly meaningful to me came into this world — someone whose existence has quietly changed parts of my heart.`,

`Getting to know you never felt forced. It was effortless, like something that was meant to unfold slowly. What started as simple conversations turned into moments I now hold close. I didn’t realize when it happened, but somewhere along the way, those little interactions became something I genuinely valued.`,

`There’s something about you that goes beyond what anyone sees at first glance. Yes, you’re beautiful, but it’s deeper than that. It’s in your energy, your laughter, your calm confidence, and the way you exist so naturally without trying to impress anyone. Being around you always felt… peaceful in a way I didn’t expect.`,

`Your smile is something I still think about. Not just how it looks, but how it feels — how it changes the atmosphere, how it lingers even after the moment has passed. There were times I caught myself replaying your laughter in my head without even realizing it.`,

`We shared moments that may have seemed ordinary, but to me they meant more. The teasing, the jokes, the random talks, the comfortable silence — all of it built something that felt real. Something that didn’t need to be forced or explained.`,

`I admired how you carried yourself. You have this quiet strength about you — playful yet grounded, soft yet firm in who you are. You don’t try to fit into spaces; you naturally become someone people notice and remember.`,

`And then there was that moment… the day we kissed. It wasn’t just a moment to me. It stayed. It settled in my thoughts in a way I couldn’t ignore. It was the moment I realized my feelings had gone beyond something casual.`,

`After that, everything about you became more vivid to me. The way you speak, the way you react, the little expressions you make — I started noticing things I hadn’t paid attention to before. You became someone I cared about in a deeper, more intentional way.`,

`There were times I’d randomly think about you and smile. Times I’d wonder how your day was going without even reaching out. That’s when I knew my feelings had quietly grown into something real.`,

`But then things changed… and I felt the distance. The missed calls, the silence, the space where conversations used to be. I tried to understand it, to give it meaning, to convince myself maybe life just got busy for you.`,

`The hardest part wasn’t even the distance itself — it was not knowing why. Not understanding what shifted. Because when someone matters to you, silence feels heavier than words ever could.`,

`Still, today isn’t about confusion or questions. It’s about you. And I couldn’t let today pass without telling you how much you meant to me — and still do in many ways.`,

`You brought a kind of light into my life that I didn’t even realize I needed. Even in your absence, the memories remain warm. That says a lot about the kind of person you are.`,

`You are not just someone I met — you are someone I felt. And that’s rare. Very rare.`,

`Even now, there’s a part of me that appreciates you in silence, without expectations, just gratitude for what was.`,

`You taught me that some connections don’t need a long timeline to be meaningful. Sometimes, a short moment can leave a lasting impact.`,

`You made ordinary days feel a little more special without even trying.`,

`You reminded me what it feels like to genuinely look forward to talking to someone.`,

`You showed me a version of myself that feels deeply, cares deeply, and remembers deeply.`,

`And for all of that, I will always be thankful.`,

`Life will continue moving, as it always does. Paths may change, people may drift, but some memories remain untouched — and ours is one of them.`,

`On your birthday, my wish for you is simple but sincere: I hope you find happiness that feels steady, peace that feels real, and love that feels certain.`,

`I hope you keep growing into everything you dream of becoming, without losing the beautiful parts of you that make you who you are.`,

`And I hope you are surrounded by people who see your heart the way it deserves to be seen.`,

`If there’s ever a moment where life allows us to reconnect, even just to talk, I would welcome it with an open heart.`,

`But no matter what happens, you will always remain someone who once meant something truly special to me.`,

`Happy Birthday, Gbemisola. May your day be filled with warmth, laughter, and moments that remind you how deeply you deserve to be loved.`

];

let index = 0;

const messageText = document.getElementById("messageText");
const readBtn = document.getElementById("readMoreBtn");

function showNext(){

    if(index < messageParts.length){

        messageText.innerHTML += messageParts[index] + " ";

        index++;

    }

    if(index === messageParts.length){

        readBtn.style.display = "none";

    }

}

showNext();

readBtn.addEventListener("click", showNext);